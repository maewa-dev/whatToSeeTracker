import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-grid',
  templateUrl: './page-grid.component.html',
  styleUrls: ['./page-grid.component.scss'],
})
export class PageGridComponent  implements OnInit {

  constructor() { }

  @Input() showsInfo: any[];
  @Input() subpage!: string;

  ngOnInit() {}

}
