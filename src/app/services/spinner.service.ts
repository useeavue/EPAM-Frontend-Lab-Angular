import { Subject } from 'rxjs';

export class SpinnerService {
  public isLoading: Subject<boolean> = new Subject<boolean>();
}
