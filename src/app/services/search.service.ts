import { debounceTime, distinctUntilChanged, filter, Subject } from 'rxjs';

export class SearchService {
  public searchInput$: Subject<string> = new Subject<string>();

  get searchValue() {
    return this.searchInput$.pipe(
      debounceTime(500),
      filter((value) => {
        if (value.trim() === '') return true;
        return value.length > 2;
      }),
      distinctUntilChanged()
    );
  }
}
