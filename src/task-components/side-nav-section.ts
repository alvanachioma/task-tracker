import { Component } from '@angular/core';

import {CircleComponent} from './circle-sec';
import {CircleDotComponent} from './circledot-section';




@Component({
  selector: 'side-nav',
  imports: [CircleComponent, CircleDotComponent],
  template:`


     <div class="flex pt-15 md:pt-3">
      <div class=" w-[80px] pt-7">
        <div class="min-h-[455px]  flex flex-col justify-between items-center">
          <div class=" flex flex-col space-y-2">
            <circle-section bgColor="bg-blue-950" iconClass="lab la-blogger" iconColor="text-white"  />
            <circle-section />
            <circle-section iconClass="lab la-quora"/>
            <circle-section [showBadge]="true" iconClass="lab la-windows" [badgeValue]="3"/>
            <circle-section iconClass="las la-folder"/>
      </div>

      <div class="flex flex-col space-y-2">
        <circle-section iconClass="las la-paste"/>
        <circle-section iconClass="las la-sms"/>
      </div>

    </div>





      </div>
    </div>

  `,
})

export class NavigationComponent {
  title = 'side-nav';
}
