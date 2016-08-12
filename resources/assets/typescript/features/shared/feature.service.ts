import { Injectable } from '@angular/core';

export class Feature {
    constructor(public id: number, public description: string) { }
}

@Injectable()
export class FeatureService {

	private _features: Feature[] = [
		new Feature(1, 'Easy installation via script'),
		new Feature(2, 'Bundling with Webpack'),
		new Feature(3, 'Require Angular templates and styles external files')
	];

	getFeatures() { return this._features; }

	getFeature(id: number | string) {
		return this._features.find(feature => feature.id === +id);
	}
}