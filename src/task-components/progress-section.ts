import {Component} from '@angular/core';




@Component({
  selector: "progress-sections",
  imports: [
  ],
  template: `
    <!--second container div in the main content with four divs-->
    <div class=" w-[440px] h-[480px] ">
      <!--div that carries the four div content-->
      <div>
        <!--div that carries the two divs that are flexed-->
        <div class="flex justify-around ">
          <!--1st flexed div-->
          <div class="bg-white w-[200px] h-[120px] rounded-2xl p-2">

            <!--meetings div-->
            <div class="flex justify-between">
              <div class="font-bold text-[15px] text-gray-700 ">Meetings</div>
              <div class=" border-2 w-3 h-3 rounded-full font-bold text-[12px]"></div>
            </div>
            <!--2/3 div-->
            <div class="pt-5">
              <p class="text-gray-500 font-[bold] text-[12px] text-right">66%</p>
            </div>
            <div class="flex justify-between">
              <div class="font-bold text-[17px] text-gray-700">2/3</div>
              <div class=" pt-2">
                <div class="h-[10px] w-[80px] rounded-[100vh] bg-gray-100">
                  <div class="bg-lime-300 h-full w-[60%] rounded-[100vh]"></div>
                </div>

              </div>

            </div>

          </div>
          <!--ends 1st flexed div-->
          <div class="bg-white w-[200px] h-[120px] rounded-2xl p-2">

            <div class="flex justify-between">
              <!--meetings div-->
              <div class="font-bold text-[15px] text-gray-700 ">Task Completed</div>
              <div class=" border-2 w-3 h-3 rounded-full font-bold text-[12px]"></div>
            </div>

            <!--2/3 div-->
            <div class="pt-5">
              <p class="text-gray-500 font-[bold] text-[12px] text-right">32%</p>
            </div>
            <div class="flex justify-between">
              <div class="font-bold text-[17px] text-gray-700">3/10</div>
              <div class="flex flex-row">
                <div class=" pt-2">

                  <div class="h-[10px] w-[70px] rounded-[100vh]  bg-gray-100">
                    <div class="bg-lime-300 h-full w-[30%] rounded-[100vh]"> </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <!--ends div that carries the two divs that are flexed-->
        <div class="flex flex-col space-y-4 p-2 ">
          <!--progress-->

          <div class="bg-white  h-[250px] rounded-2xl">
            <div class="flex justify-between px-5 py-2">
              <div class="text-gray-900 text-[15px] font-bold ">progress</div>
              <div class="text-gray-500 text-[13px]-">a week</div>
            </div>
            <div class="flex space-x-2 px-4 py-1">
              <div class="font-bold text-gray-700 text-[25px]">7h 22m</div>
              <div class="py-1">
                <div class="font-bold text-gray-500 ">Average</div>
                <div class="pb-3 text-gray-500 font-bold ">activity</div>
              </div>
            </div>
            <!---->
            <div class="bg-white h-[137px] rounded-br-2xl rounded-bl-2xl flex flex-row justify-center items-center ">
              <div class=" flex space-x-2  ">
                <!--1st graph-->

                <div class="bg-white border-l-1 border-r-1 border-gray-200 h-[110px] w-[50px] flex flex-col justify-end items-center  gap-y-2 ">

                  <div class="bg-gray-300 w-[20px] h-[40px] rounded-2xl "></div>
                  <p class="text-gray ">Mo</p>

                </div>
                <!--2nd graph-->
                <div class="bg-white border-l-1 border-r-1 border-gray-200 h-[110px] w-[50px] flex flex-col justify-end items-center gap-y-2 ">
                  <div class="bg-gray-300 w-[20px] h-[70px] rounded-2xl "></div>
                  <p class="text-gray ">Tu</p>
                </div>
                <!--3rd graph-->
                <div class="bg-white border-l-1 border-r-1 border-gray-200 h-[110px] w-[50px] flex flex-col justify-end  items-center gap-y-2 ">
                  <div class="bg-gray-300 w-[20px] h-[50px] rounded-2xl "></div>
                  <p class="text-gray ">We</p>
                </div>
                <!--4th graph-->
                <div class="bg-white border-l-1 border-r-1 border-gray-200 h-[110px] w-[50px] flex flex-col justify-end  items-center gap-y-2  ">
                  <div class="bg-gray-300 w-[20px] h-[60px] rounded-2xl "></div>
                  <p class="text-gray ">Th</p>
                </div>
                <!--5th graph-->

                <div class=" bg-white border-l-1 border-r-1  border-gray-200 h-[110px] w-[50px] flex flex-col justify-end  items-center gap-y-">
                  <!--div for the 2 small cicle and the graph-->
                  <div class="space-y-3 flex flex-col justify-center items-center">
                    <!--div for the 2 small cicle-->
                    <div class="flex flex-col justify-center items-center">
                      <div class="w-12 h-5 bg-lime-300 border-2 border-gray-300 rounded-2xl text-[10px] text-center">
                        8h 13m
                      </div>
                      <div class="w-2 h-2 bg-lime-300 border-2 border-gray-200 rounded-full "></div>
                    </div>
                    <!--ends div for the 2 small cicle-->
                    <div class="bg-lime-300 w-[20px] h-[70px] rounded-2xl "></div>
                  </div>
                  <!--ends div for the 2 small cicle and the graph-->
                  <p class="text-gray ">Fr</p>
                </div>
                <!--6th graph-->
                <div class="bg-white border-l-1 border-r-1 border-gray-200 h-[110px] w-[50px] flex flex-col justify-end  items-center gap-y-2 ">
                  <div class="bg-gray-300 w-[20px] h-[70px] rounded-2xl "></div>
                  <p class="text-gray ">Sa</p>
                </div>
                <!--7th graph-->
                <div class="bg-white border-l-1 border-r-1 border-gray-200 h-[110px] w-[50px] flex flex-col justify-end  items-center gap-y-2  ">
                  <div class="bg-gray-300 w-[20px] h-[70px] rounded-2xl"></div>
                  <p class="text-gray ">Su</p>
                </div>
              </div>
            </div>
            <!--ends the progress graphy-->
          </div>


          <!--ends the progress-->
          <!--the third div-->
          <div class="bg-white  h-[120px] rounded-2xl">
            <div class="flex justify-between pt-3 p-3">
              <div class=" text-gray-900 text-[15px] font-bold ">Documents</div>
              <button class="bg-white text-center text-gray-500 text-[13px] cursor-pointer
                                         rounded-2xl hover:bg-gray-400 hover:text-white w-[60px] h-[20px]">Show all</button>
            </div>
            <!--the three blue blocks-->
            <div class="flex justify-evenly">
              <!--emplouyment-->
              <div class="">
                <div class=" bg-blue-500 w-[95px] h-[28px] rounded-[5px]"></div>
                <div>
                  <p class="text-[13px] text-center font-bold text-gray-500">
                    Employment<br>Contract doc</p>
                </div>
              </div>
              <!--brand style-->
              <div>
                <div class=" bg-blue-500 w-[95px] h-[28px] rounded-[5px]"></div>
                <div>
                  <p class="text-[13px] text-center font-bold text-gray-500">Brand
                    Style<br>Docume_doc</p>
                </div>
              </div>

              <!--new project-->
              <div>
                <div class=" bg-blue-500 w-[95px] h-[28px] rounded-[5px]"></div>
                <div>
                  <p class="text-[13px] text-center font-bold text-gray-500">New<br>
                    Project.doc</p>
                </div>
              </div>
            </div>
            <!--ends the three blue blocks-->
          </div>
        </div>


        <!--ends the div that carries the four div content-->
      </div>
      <!--ends the second container div in the main content with four div-->
    </div>
    <!--ends flex holding the 3 divs-->
    <!--ends the side menu and two section of main content-->

  `,
})





export class ProgressComponents{
  title:string= 'progress-sections';
}
