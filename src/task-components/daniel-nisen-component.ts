import {Component} from '@angular/core';




@Component({
  selector: "nixen-sections",
  imports: [
  ],
  template: `
    <!--first div in the main content after side menu-->

    <div class="w-[450px] h-[466px] ">
      <!--first  container div in the main content with three div-->
      <div>
        <!--Daniel Nixen design-->
        <div class="pb-3">
          <div class=" bg-sky-500 w-[440px] h-[180px] rounded-2xl flex ">
            <!--div holding the picture and writeup-->
            <!--image-->
            <div class="flex">
              <img class="[]" src="./images/profile.jpg" alt="">

              <!--ends image section-->
              <!--Nixen-->

              <!--Nixen write up-->
              <div class="flex flex-col p-3">
                <div class="text-white font-bold ">Daniel<br> Nixen<br><span
                  class="text-gray-300 font-light text-[10px]">USUK designer</span>
                </div>
                <!--Nixen write up-->
                <!--circle-->
                <div class="border-2 border-green-500 w-9 h-9 rounded-full relative">
                  <span class="bg-white text-black w-7 h-3 rounded-2xl absolute left-5 top-7 text-[9px] text-center">95%</span>
                </div>
                <div class=" pt-6">
                  <div class="bg-white w-[40px] h-[25px] pr-20 rounded-2xl"></div>
                </div>
              </div>
            </div>
            <!--ends circle-->
          </div>
          <!--ends Nixen-->
          <!--ends div holding the picture and writeup-->

        </div>

        <!--ends Daniel Nixen-->
        <!--your team-->
        <div class="pb-3">
          <div class="bg-white w-[440px] h-[195px] rounded-2xl ">
            <!--team and show all-->
            <div class="flex justify-between pt-3 p-2">
              <div class=" text-gray-900 text-[15px] font-bold ">Your team</div>
              <button class="bg-white text-center text-gray-500 text-[13px] cursor-pointer
                                         rounded-2xl hover:bg-gray-400 hover:text-white w-[60px] h-[20px]">Show all</button>
            </div>
            <!--ends team and show all-->
            <!--the four round pictures-->
            <div class="flex justify-around items-center p-7">
              <!--first picture and write up-->
              <div class="flex items-center flex-col relative"><img
                class="bg-red-400 w-[40px] h-[40px] rounded-full"
                src="./images/profile.jpg" alt="">
                <span class="bg-orange-300 w-3 h-3 border-2 border-white rounded-full absolute left-4"></span>
                <div class="text-center">
                  <p class="text-[13px] font-bold text-gray-700 ">Louise Green</p>
                  <p class="text-[12px] text-gray-500">Team-Lead</p>
                </div>
              </div>
              <!--second picture and write up-->
              <div class="flex items-center flex-col relative"><img
                class="bg-white w-[40px] h-[40px] rounded-full"
                src="./images/profile.jpg" alt="">
                <span class="bg-orange-300 w-3 h-3 border-2 border-white rounded-full absolute left-3"></span>
                <div class="text-center">
                  <p class="text-[13px] font-bold text-gray-700 ">Mark Fell</p>
                  <p class="text-[12px] text-gray-500">Art Director</p>
                </div>
              </div>
              <!--third picture and write up-->
              <div class="flex items-center flex-col relative"><img
                class="bg-white w-[40px] h-[40px] rounded-full"
                src="./images/profile.jpg" alt="">
                <span class="bg-orange-300 w-3 h-3 border-2 border-white rounded-full absolute left-5"></span>
                <div class="text-center">
                  <p class="text-[13px] font-bold text-gray-700 ">Anna Fish</p>
                  <p class="text-[12px] text-gray-500">UI&UX designer</p>
                </div>
              </div>
              <!--fourth picture and write up-->
              <div class="flex items-center flex-col relative"><img
                class="bg-white w-[40px] h-[40px] rounded-full"
                src="./images/profile.jpg" alt="">
                <span class="bg-orange-300 w-3 h-3 border-2 border-white rounded-full absolute left-5"></span>
                <div class="text-center">
                  <p class="text-[13px] font-bold text-gray-700">Kelvin Less</p>
                  <p class="text-[12px] text-gray-500">UI&UX designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--your team ends-->
        <!--courses and webiners-->
        <div class="bg-white w-[440px] h-[120px] rounded-2xl p-2">
          <!--team and show all-->
          <div class="flex justify-between pt-3 p-2">
            <div class=" text-gray-900 text-[15px] font-bold ">courses and Webiners</div>
            <button class="bg-white text-center text-gray-500 text-[13px] cursor-pointer
                                         rounded-2xl hover:bg-gray-400 hover:text-white w-[60px] h-[20px]">Show all</button>
          </div>
          <!--ends team and show all-->

          <!--the two div seperated with flex in courses and webiners-->
          <div class="flex justify-around">
            <div>
              <div class="bg-gray-300 w-[170px] h-[60px] rounded-2xl">
                <p class="text-[11px] font-bold text-gray-700 pt-1 p-1 pl-3 ">Webiner Automation<br>
                  Of Basic Processors</p>
                <!--2nd paragraphy-->
                <div class="flex space-x-1 items-center ">
                  <div class=" pl-3  space-x-2 flex">
                    <div class="bg-white w-4 h-4 rounded-full "></div>
                    <div class="text-gray-800 text-[10px]">25th May 11:00-12:00</div>
                  </div>
                </div>
              </div>
            </div>
            <!--ends the first div-->








    <!--ends the second div container-->

          </div>
        </div>
      </div>
    </div>
  `,
})





export class NixenComponents{
  title:string= 'nixen-sections';
}
