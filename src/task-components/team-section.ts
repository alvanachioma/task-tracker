import {Component} from '@angular/core';

@Component({
  selector: 'team-section',
  imports: [],
  template: `
    <div class="flex justify-between pt-3 p-2">
      <div class=" text-gray-900 text-[15px] font-bold ">Your team</div>
      <button class="bg-white text-center text-gray-500 text-[13px] cursor-pointer
              rounded-2xl hover:bg-gray-400 hover:text-white w-[60px] h-[20px]">Show all
      </button>
    </div>
  `,
  styles: [],
})

export class TeamComponent{
  title :string = 'team-section';
}
