import {Component} from '@angular/core';




@Component({
  selector: "circle-section",
  imports: [

  ],
  template: `
    <!--the side menu and two section of main content-->
    <!--flex holding the 3 divs-->

        <div class=" flex flex-col space-y-2">
          <!--the first five circle-->
          <a href="">
            <div class="bg-white w-[40px] h-[40px] rounded-full hover:outline-2 hover:outline-blue-600"></div>
          </a>




        </div>


      <!--ends side menu-->













  `,
})


export class CircleComponent {
  title = 'circle-section';
}
