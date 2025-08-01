import {Component} from '@angular/core';
import {CircleComponent} from './circle-sec';
import {CircleComponents} from './circleblue-sec';
import {NixenComponents} from './daniel-nisen-component';
import {ProgressComponents} from './progress-section';


@Component({
  selector: "side-nav-sections"  ,
  imports: [CircleComponent, CircleComponents, NixenComponents,ProgressComponents

  ],
  template: `
    <!--the side menu and two section of main content-->
    <!--flex holding the 3 divs-->
    <div class="flex">
      <!--side menu container-->
      <div class="  w-[100px] h-[450px] pt-3 flex flex-col justify-between items-center ">
        <!--flex div for the first four-->
        <div class=" flex flex-col space-y-2">
          <!--the first five circle-->
          <div class="flex flex-col space-y-2">
            <circle2-section />
            <circle-section />
            <circle-section />
            <circle-section />
            <circle-section />
          </div>
        </div>
        <!--ends the first 5 circle-->
        <!--two circle down-->
        <div class="flex flex-col space-y-2">
        <circle-section />
        <circle-section />
      </div>
      </div>
        <!--ends the two circle down-->

      <!--ends side menu-->
      <nixen-sections />

      <progress-sections />

    </div>




  `,

  styles:[],
})
export class SideNavComponent {
  title = 'side-nav-sections';
}
