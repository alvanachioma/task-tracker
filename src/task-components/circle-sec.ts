import {Component, input} from '@angular/core';


@Component({
  selector: "circle-section",
  imports: [],
  template: `
    <a href="" class="{{bgColor()}} {{iconColor()}} relative flex justify-center items-center
      w-[35px] h-[35px] rounded-full hover:outline-2
          hover:outline-blue-600">
      @if(showBadge()){
        <span class="bg-blue-500 p-2 rounded-full
       absolute -top-[0px] -right-[2px] text-[9px]  text-white flex justify-center items-center">
          {{(badgeValue() <= 99 ? badgeValue() :  '99+' )}}
        </span>
      }

      <i class="{{iconClass()}}"></i></a>
  `,
})

export class CircleComponent {
  title = 'circle-section  ';
  bgColor = input("bg-white");
  iconClass = input("lab la-app-store");
  iconColor = input("text-blue-700");
  showBadge=input(false);
  badgeValue=input(0);
  badgeBgColor=input("bg-blue-600");
  badgeColor=input("text-white");

}
















