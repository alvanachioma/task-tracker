import {Component, signal} from '@angular/core';
import {NavigationComponent} from './side-nav-section';
import {DateWelcomeComponent } from './date-component';
import {SearchComponents} from './Search-component';
import {CircleDotComponent } from './circledot-section';
import {CircleComponent} from './circle-sec';




@Component({
  selector: 'Search-sec',
  imports: [
    NavigationComponent, DateWelcomeComponent, SearchComponents,  CircleComponent,


  ],
  template: `

    <div class="flex flex-row">
      <div class ="  h-[80px] md:p-3 ">
        <div class =" h-[80px] md:p-3">
          <div class="sm-space-y-10  md:flex justify-between space-x-14">
           <date-section />
            <div class="flex space-x-2 ">
              <search-section />
              <circle-section [showBadge]="true" iconClass="las la-bell" [badgeValue]="notificationCount()"/>
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
  notificationCount=signal(1);
  fakeNotification(){
    window.setTimeout(() => {
      this.notificationCount.set(6000);
    },10000);
  }
  ngOnInit() {
    this.fakeNotification();
  }
}
