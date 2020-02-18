import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">© 2020 <b><a href="" target="_blank">TransportGenie</a></b> All Rights Reserved.</span>
  `,
})
export class FooterComponent {
}
