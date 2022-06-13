import { Injectable, OnDestroy } from '@angular/core';
import { Observable, ReplaySubject, takeUntil } from 'rxjs';

const innerSubj = Symbol('inner subject');

@Injectable()
export class OnDestroyService extends Observable<void> implements OnDestroy {
	[innerSubj] = new ReplaySubject<void>(1);

	constructor() {
		super(observer => this[innerSubj].subscribe(observer));
	}

	ngOnDestroy() {
		this[innerSubj].next();
		this[innerSubj].complete();
	}

	takeUntil<T>() {
		return takeUntil<T>(this);
	}
}
