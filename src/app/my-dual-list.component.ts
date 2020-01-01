import { Component } from '@angular/core';
import { DualListComponent } from 'projects/angular-dual-listbox/src/public-api';

@Component({
	selector: 'app-my-dual-list',
	styleUrls: ['./my-dual-list.component.css'],
	templateUrl: './my-dual-list.component.html'
})
export class MyDualListComponent extends DualListComponent {

	static DEFAULT_FORMAT = {
		add: 'Add',
		remove: 'Remove',
		all: 'All',
		none: 'None',
		available: 'Available',
		selected: 'Selected',
		direction: DualListComponent.LTR,
		draggable: true,
		locale: undefined
	};

}
