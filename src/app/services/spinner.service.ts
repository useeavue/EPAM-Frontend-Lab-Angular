import { Subject } from 'rxjs';

export class SpinnerService {
  public isLoading$ = new Subject<boolean>();
}
