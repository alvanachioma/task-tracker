import {Component} from '@angular/core';




@Component({
  selector: "task-sections",
  imports: [
  ],
  template: `

      <!-- the second div container-->
      <div class="bg-gray-100 w-[300px] h-[600px] rounded-tr-2xl rounded-br-2xl p-4">
        <!--tasktracker div-->
        <div class="flex justify-between pt-3 p-2">
          <div class=" text-gray-900 text-[15px] font-bold ">Task tracker</div>
          <button class="bg-white text-center text-gray-500 text-[13px] cursor-pointer
                    rounded-2xl hover:bg-gray-400 hover:text-white w-[60px] h-[20px]">Show all</button>
        </div>
        <!--ends tasktracker div-->
        <!--three flexed div all, uncomlated and comlated-->
        <div class="p-1 flex justify-center ">
          <div class="bg-gray-300 w-70 h-8 rounded-2xl flex justify-around items-center p-2 ">
            <p class=" bg-white w-22 h-6 rounded-2xl text-center text-[13px] cursor-pointer">All</p>
            <p class="  w-22 h-6 rounded-2xl text-center text-[13px] cursor-pointer">Uncompleted</p>
            <p class=" w-22 h-6 rounded-2xl text-center text-[13px] cursor-pointer">Completed</p>
          </div>
        </div>
        <!--ends three flexed div-->
        <!--the 5 writeup-->
        <!--Meet your team-->
        <div class="space-y-1">
          <div class="bg-gray-100 w-68 h-11 p-2  ">
            <div class="flex flex-col">
              <div class="flex space-x-3 ">
                <div class="bg-blue-500 rounded-full w-4 h-4"></div>

                <p class="font-extrabold text-gray-500 pb-1 text-[12px]">Meet your team</p>


              </div>

              <div class="flex space-x-3">
                <div>
                  <div class=" rounded-full w-4 h-4"></div>
                </div>
                <div class="flex">
                  <p class="text-[11px] text-gray-400 text-right ">Deadline: Today,10:00 </p>
                  <div class="flex pl-2"><img class="w-3 h-3 rounded-full"
                     src="/images/WIN_20240805_08_12_12_Pro.jpg" alt="">
                    <div class="text-[11px] text-gray-400 pl-1">Louise Green</div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <!--Get Access-->
          <div class="bg-gray-100 w-68 h-14 p-2 pt-1 ">
            <div class="flex flex-col">
              <div class="flex space-x-3 ">
                <div class="bg-blue-500 rounded-full w-4 h-4"></div>

                <div class="font-extrabold text-gray-500 pb-1 text-[12px]">Get access credentials from<br>the project manager #James Elliott</div>


              </div>

              <div class="flex space-x-3">
                <div>
                  <div class="rounded-full w-4 h-4"></div>
                </div>
                <div class="flex">
                  <div class="text-[11px] text-gray-400 text-right ">Deadline: Today </div>
                  <div class="flex pl-2"><img class="w-3 h-3 rounded-full"
                                              src="/images/WIN_20240805_08_12_12_Pro.jpg" alt="">
                    <div class="text-[11px] text-gray-400 pl-1">Louise Green</div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <!--Read the brand book-->
          <div class="bg-red-400 w-68 h-18 p-3 rounded-2xl  ">
            <div class="flex flex-col">
              <div class="flex space-x-3 ">
                <div class=" ring ring-gray-400 outline-0 rounded-full w-4 h-4"></div>

                <div class="font-extrabold text-gray-500 pb-1 text-[11px]">Read the brand book<br> and UI kit</div>
                <div class="flex flex-row space-x-2 ">
                  <div class="bg-blue-300 rounded-full w-1 h-1 "></div>
                  <div class="font-bold text-blue-300 pb-1 text-[12px]">Do this first</div>
                </div>
              </div>

              <div class="flex space-x-3">
                <div>
                  <div class="rounded-full w-4 h-4"></div>
                </div>
                <div class="flex">
                  <div class="text-[12px] text-gray-400 text-right ">Deadline: Today </div>
                  <div class="flex pl-2"><img class="w-3 h-3 rounded-full"
                                              src="/images/WIN_20240805_08_12_12_Pro.jpg" alt="">
                    <div class="text-[11px] text-gray-400 pl-1">Louise Green</div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <!--Review the current project-->
          <div class="bg-gray-100 w-68 h-16 p-3 rounded-2xl  ">
            <div class="flex flex-col">
              <div class="flex justify-between ">
                <div class="flex space-x-3">
                  <div class=" ring ring-gray-400 outline-0 rounded-full w-4 h-4"></div>

                  <div class="font-extrabold text-gray-500 text-[11px] pb-2">Review the current project<br>"NovaCare App" in Figma</div>
                </div>
                <div class="">
                  <button class="flex justify-center font-bold items-center  text-[10px] p-2 text-center
                                w-18 h-5 text-black bg-green-100 rounded-2xl hover:bg-green-700">In progress</button></div>
              </div>
            </div>

            <div class="flex space-x-3">
              <div>
                <div class="rounded-full w-4 h-4"></div>
              </div>
              <div class="flex space-y-2">
                <div class="text-[11px] text-gray-400 text-right ">Deadline: Today </div>
                <div class="flex pl-2"><img class="w-3 h-3 rounded-full"
                                            src="/images/WIN_20240805_08_12_12_Pro.jpg" alt="">
                  <div class="text-[11px] text-gray-400 pl-1">Mark Fell</div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <!--Review the employee handwork-->
        <div class="bg-gray-100 w-68 h-15 p-3 pb-3 rounded-2xl  ">
          <div class="flex flex-col">
            <div class="flex justify-between ">
              <div class="flex space-x-3">
                <div class=" ring ring-gray-400 outline-0 rounded-full w-4 h-4"></div>

                <div class="font-extrabold text-gray-500 text-[12px] pb-2">Review the employee handbook</div>
              </div>

            </div>
          </div>

          <div class="flex space-x-3">
            <div>
              <div class="rounded-full w-3 h-3"></div>
            </div>
            <div class="flex space-y-3">
              <div class="text-[11px] text-gray-400 text-right ">Deadline: Tomorrow,14:00 </div>
              <div class="flex pl-2"><img class="w-3 h-3 rounded-full"
                                          src="/images/WIN_20240805_08_12_12_Pro.jpg" alt="">
                <div class="text-[9px] text-gray-400 pl-1">Anna Fish</div>
              </div>

            </div>
          </div>
        </div>
        <!--ends the 5 writeup-->
        <!--Begins goals tracker-->

        <div class="p-1">
          <div class="">Goal Tracker</div>
          <p class="text-[11px] text-gray-400">These goals are design to support you onboarding during the first two weeks</p>
        </div>
        <!--flexing get to know your team-->
        <div>
          <!--get to know your team-->
          <div class="flex space-x-2">
            <div class="bg-gray-400 w-4 h-4"></div>
            <div class="text-gray-500 font-extrabold text-[12px]">Get to know your team</div>
          </div>
          <!--ends get to know your team-->
          <!--the two color and 72%-->
          <div class="">
            <div class="flex justify-between">
              <div class=" pt-2">
                <div class="h-[10px] w-[220px] rounded-[100vh] bg-gray-200">
                  <div class="bg-lime-300 h-full w-[70%] rounded-[100vh]"></div>
                </div>

              </div>
              <div class="text-gray-500 text-[10px]">72%</div>
            </div>
            <!--ends the div that is flexing the two colors and number-->
          </div>
          <!--ends the div holding them-->
          <div class="flex space-x-3 pt-2">
            <div class="bg-gray-400 w-4 h-4"></div>
            <div class="text-gray-500 font-extrabold text-[10px]">Set up your work tools and accounts</div>
          </div>
          <!--ends get to know your team-->
          <!--the two color and 72%-->
          <div class="">
            <div class="flex justify-between">
              <div class="  pb-1">
                <div class="h-[10px] w-[218px] rounded-[100vh] bg-gray-200">
                  <div class="bg-lime-300 h-full w-[90%] rounded-[100vh]"></div>
                </div>

              </div>
              <div class="text-gray-500 text-[10px] ">95%</div>
            </div>
              <!--ends the div that is flexing the two colors and number-->
            </div>
            <div class="flex space-x-3 pt-2">
              <div class="bg-gray-400 w-4 h-4"></div>
              <div class="text-gray-500 font-extrabold text-[12px]">Complete your profile</div>
            </div>
            <!--ends get to know your team-->
            <!--the two color and 72%-->
            <div class="">
              <div class="flex justify-between">
                <div class="  pb-1">
                  <div class="h-[10px] w-[218px] rounded-[100vh] bg-gray-200">
                    <div class="bg-lime-300 h-full w-[90%] rounded-[100vh]"></div>
                  </div>

                </div>
                <div class="text-gray-500 text-[10px] ">95%</div>
              </div>
              <!--ends the div that is flexing the two colors and number-->
            </div>
            <!--the two colors and numbers-->
          </div>
          <!--ends the flexed div-->
        </div>









    <!--ends the second div container-->


  `,
})





export class TrackerComponents{
  title:string= 'task-sections';
}
