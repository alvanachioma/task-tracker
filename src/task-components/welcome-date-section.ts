import { Component } from '@angular/core';
import {NavigationComponent} from './side-nav-section';
import {DateWelcomeComponent } from './date-component';
import {SearchComponents} from './Search-component';
import {CircleDotComponent } from './circledot-section';




@Component({
  selector: 'Search-sec',
  imports: [
    NavigationComponent, DateWelcomeComponent, SearchComponents,CircleDotComponent,


  ],
  template: `

    <div class="flex flex-row">
      <div class ="  h-[80px] md:p-3 ">
        <div class =" h-[80px] md:p-3">
          <div class="sm-space-y-10  md:flex justify-between space-x-14">
           <date-section />
            <div class="flex space-x-2 ">
              <search-section />
              <smallcircle-sec />
            </div>
          </div>
        </div>
        <side-nav />
      </div>
    </div>


`,
  styles:[],

})
export class SearchComponent {
  title = 'Search-sec';
}
