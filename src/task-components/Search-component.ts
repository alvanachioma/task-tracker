import {Component} from '@angular/core';




@Component({
  selector: "search-section",
  imports: [

  ],
  template: `

    <div class="bg-gray-100 w-[300px] md:w-[400px] h-[35px] rounded-2xl cursor-pointer p-5 flex items-center">
      <input type="text" placeholder="search" class="outline-none w-[400px]">
    </div>
  `,
})

export class SearchComponents {
  title = 'search-section';
}
