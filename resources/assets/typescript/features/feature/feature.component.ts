import { Component, OnInit, OnDestroy } from '@angular/core';
import { Feature, FeatureService } from '../shared/feature.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
	template: require('./feature.component.html')
})
export class FeatureComponent implements OnInit {
	
	feature: Feature;

	private _sub: Subscription;

	constructor(
	    private _route: ActivatedRoute,
	    private _router: Router,
	    private _featureService: FeatureService) {}

	ngOnInit() {
		this._sub = this._route.params.subscribe(params => {
			let id = +params['id']; // (+) converts string 'id' to a number
			this.feature = this._featureService.getFeature(id);
		});
	}

    ngOnDestroy() {
        this._sub.unsubscribe();
    }

}