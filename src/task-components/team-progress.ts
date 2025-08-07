import {Component} from '@angular/core';

@Component({
  selector: 'team-section',
  imports: [],
  template: `

      <div class="flex justify-between px-10 py-2">
        <div class="text-gray-900 text-[15px] font-bold ">progress</div>
        <div class="text-gray-500 text-[13px]-">a week</div>
      </div>

  `,
  styles: [],
})

export class TeamComponent{
  title :string = 'team-section';
}
