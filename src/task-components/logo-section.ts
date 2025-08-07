import {Component} from '@angular/core';
import {TrackerComponents} from './tracker-section';
import {SideNavComponent} from './side-nav-section';



@Component({
  selector: "logo-sections",
  imports: [
     TrackerComponents, SideNavComponent,
  ],
  template: `
    <div class="flex  pt-10">
      <!--container div holding every content-->
      <div class="bg-slate-200  h-[600px] rounded-2xl">
        <!--flex holding the two div of the container-->

        <div class="flex flex-row">
          <!--first part of the div container-->
          <div class="  h-[550px]">
            <!--div holding the welcome and search-->
            <div class=" h-[80px] pt-3">
              <!--flex separating the search and welcome-->
              <div class="flex justify-between p-3">
                <div><span class="font-bold text-gray-700">Welcome Daniel!</span><br><span
                  class="text-gray-500 text-xs">Fri 16 may 2025</span></div>
                <!--flex separating the search and the circle-->
                <div class="flex space-x-2">
                  <!--search section-->
                  <div class="bg-gray-100 w-[400px] h-[35px] rounded-2xl cursor-pointer p-5 flex items-center">
                    <input type="text" placeholder="search" class="outline-none w-[400px]">
                  </div>
                  <!--ends the search section-->
                  <!--small circle near search-->
                  <div class="bg-white w-9 h-9 rounded-full relative cursor-pointer">
                    <span class="bg-blue-500 w-3 h-3 rounded-full absolute left-6"></span>
                  </div>
                  <!--ends the small circle section-->
                </div>
                <!--end flex separating the search and the circle-->
              </div>
              <!--end of the flex separating the search and welcome-->

            </div>
            <!--end of the div holding the welcome and search-->

            <side-nav-sections />



          </div>

          <task-sections />
        </div>
      </div>
    </div>

  `,
})
export class LogoComponents{
  title:string= 'logo-sections';
}
