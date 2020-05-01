import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-report-type',
  templateUrl: './report-type.component.html',
  styleUrls: ['./report-type.component.scss']
})
export class ReportTypeComponent {
  private sortData = [
    {
      label: 'PDF',
      value: 'pdf'
    },
    {
      label: 'HTML',
      value: 'html'
    },
    {
      label: 'CSV',
      value: 'csv'
    }
  ]

  private sortBy = 'pdf';

  selectedItem = '0';


}
