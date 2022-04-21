import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  providers: [TitleCasePipe],
})
export class BreadcrumbsComponent implements OnInit {
  private title: string = '';

  constructor(
    private titleCasePipe: TitleCasePipe,
    private activatedRoute: ActivatedRoute
  ) {}

  get titleTemplate() {
    return this.title ? `/${this.title}` : '';
  }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params['id']) {
      const title = this.activatedRoute.snapshot.queryParams['title'];
      this.title = this.titleCasePipe.transform(title);
    }
  }
}
