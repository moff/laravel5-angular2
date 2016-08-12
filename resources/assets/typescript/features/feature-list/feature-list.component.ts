import { Component, OnInit } from '@angular/core';
import { Feature, FeatureService } from '../shared/feature.service';

@Component({
	template: require('./feature-list.component.html'),
	styles: [require('./feature-list.component.scss')]
})
export class FeatureListComponent implements OnInit {

	features: Feature[];

	constructor(private _featureService: FeatureService) {}

	ngOnInit() {
	    this.features = this._featureService.getFeatures();
  	}

}