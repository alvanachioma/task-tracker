import {Component, input } from '@angular/core';




@Component({
  selector: "circle-section",
  imports: [

  ],
  template: `
    <div class=" flex flex-col space-y-2">
      <a href=""
        class="{{bgColor()}} w-[40px] h-[40px] {{iconColor()}}
        flex justify-center items-center
        rounded-full hover:outline-2 hover:outline-blue-600">
            <i class="{{iconClass()}} text-[1.6rem]"></i>

      </a>
    </div>
  `,
})


export class CircleComponent {
  bgColor = input("bg-white") ;
  iconClass = input(" las la-car-side ") ;
  iconColor = input(" text-white") ;
}
