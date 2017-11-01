import {} from 'jasmine';

import { MockBackend, MockConnection } from '@angular/http/testing';
import { Response, RequestMethod, ResponseOptions } from '@angular/http';

export class TestHelper {

	public static generateResponse(mock: any): Response {
		return new Response(new ResponseOptions(
			{
				body: mock
			}
		));
	}

	public static backendHandler(mockBackend: MockBackend, requestMethod: RequestMethod, output: any = {}) {
		mockBackend.connections.subscribe((conn: MockConnection) => {

			expect(conn.request.method).toEqual(requestMethod);
			conn.mockRespond(this.generateResponse(output));

		});
	}
}
