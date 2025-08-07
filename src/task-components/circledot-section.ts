import {Component, input} from '@angular/core';



@Component({
  selector: "smallcircle-sec",
  imports: [


  ],
  template: `


<div class="bg-white w-9 h-9 rounded-full relative cursor-pointer flex justify-center items-center text-blue-600">
  <i class="{{iconclass2()}}"></i>
<span class="bg-blue-500 w-3 h-3 rounded-full
 absolute top-0.5 right-0.5 text-[9px]  text-white flex justify-center items-center">3</span>
  </div>
  `,
  styles:[],

})
export class CircleDotComponent {
  title = 'smallcircle-sec';
  iconclass2= input("las la-archive");

}
