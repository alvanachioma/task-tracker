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
            <circle-section bgcolor="bg-blue-950" iconclass="lab la-blogger" iconcolor="text-white"  />
            <circle-section />
            <circle-section iconclass="lab la-quora"/>
             <smallcircle-sec iconclass2="lab la-windows" />
            <circle-section iconclass="las la-folder"/>
      </div>

      <div class="flex flex-col space-y-2">
        <circle-section iconclass="las la-paste"/>
        <circle-section iconclass="las la-sms"/>
      </div>

    </div>





      </div>
    </div>

  `,
})

export class NavigationComponent {
  title = 'side-nav';
}
