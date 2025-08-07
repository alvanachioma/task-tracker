import {Component, input} from '@angular/core';


@Component({
  selector: "smallcircle-sec",
  imports: [],
  template: `


    <div class="bg-white w-9 h-9 rounded-full relative cursor-pointer flex justify-center items-center text-blue-600">

      <span class="bg-blue-500 w-3 h-3 rounded-full
       absolute -top-[0px] -right-[2px] text-[9px]  text-white flex justify-center items-center">3</span>
      <i class="{{iconClass()}}"></i>
    </div>
  `,
  styles: [],

})
export class CircleDotComponent {
  title = 'smallcircle-sec';
  iconClass = input("las la-archive");

}
