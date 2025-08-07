import {Component,input} from '@angular/core';



@Component({
  selector: "circle-section",
  imports: [


  ],
  template: `

    <div class=" flex flex-col space-y-2">

      <a href="" class="{{bgcolor()}} {{iconcolor()}} flex justify-center items-center
      w-[35px] h-[35px] rounded-full hover:outline-2
          hover:outline-blue-600"><i class="{{iconclass()}}"></i></a>

    </div>

  `,
})

export class CircleComponent {
  title = 'circle-section  ' ;
  bgcolor= input("bg-white");
  iconclass= input("lab la-app-store");
  iconcolor= input("text-blue-700");

}
















