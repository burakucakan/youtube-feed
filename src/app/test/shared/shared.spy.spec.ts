import {} from 'jasmine';

import { _ENVIRONMENT } from './shared.mock.spec';

export class RouterSpy {
	private navigate = jasmine.createSpy('navigate');
}

