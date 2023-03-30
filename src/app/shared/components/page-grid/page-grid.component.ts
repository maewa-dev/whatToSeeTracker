import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-grid',
  templateUrl: './page-grid.component.html',
  styleUrls: ['./page-grid.component.scss'],
})
export class PageGridComponent {

  @Input() showsInfo: any[];
  @Input() subpage!: string;

}
