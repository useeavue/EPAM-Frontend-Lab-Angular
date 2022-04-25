import { debounceTime, distinctUntilChanged, filter, Subject } from 'rxjs';

export class SearchService {
  public searchInput$: Subject<string> = new Subject<string>();

  get searchValue() {
    return this.searchInput$.pipe(
      debounceTime(500),
      filter((value) => {
        return value.trim() === '' ? true : value.length > 2;
      }),
      distinctUntilChanged()
    );
  }
}
