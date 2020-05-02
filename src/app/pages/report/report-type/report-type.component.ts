import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-report-type',
  templateUrl: './report-type.component.html',
  styleUrls: ['./report-type.component.scss']
})
export class ReportTypeComponent {
  private sortData = [
    {
      label: 'DATE',
      value: 'date'
    },
    {
      label: 'SIZE',
      value: 'size'
    },
  ]

  private sortBy = 'date';

  selectedItem = '0';


}
