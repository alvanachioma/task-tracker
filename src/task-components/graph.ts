import {Component} from '@angular/core';
import {TeamComponent} from './team-progress';





@Component({
  selector: "graph-sections",
  imports: [
    TeamComponent,

  ],
  template: `
<div class="flex flex-col space-y-4 p-2 ">
<!--progress-->

<div class="bg-white h-[250px] rounded-2xl">
<team-section />
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
  <!--ends div for the 2 small circle-->
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
</div>
  `,
})
export class GraphComponents{
  title:string= 'graph-sections';
}
