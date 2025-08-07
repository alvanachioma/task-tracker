import {Component} from '@angular/core';




@Component({
  selector: "date-section",
  imports: [

  ],
  template: `

    <div><span class=" font-bold text-gray-700">Welcome Daniel!</span><br><span
      class="text-gray-500 text-xs">Fri 16 may 2025</span></div>

  `,
})

export class DateWelcomeComponent {
  title = 'date-section';
}
