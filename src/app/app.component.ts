import { Component } from '@angular/core';
import {SearchComponent} from '../task-components/welcome-date-section';



@Component({
  selector: 'app-root',
  imports: [SearchComponent,




  ],
  template: `

    <div class="flex justify-center items-center md:p-8">
      <!-- Container div -->
      <div class="bg-slate-200 w-screen md:min-w-[80vw] h-screen md:min-h-[600px] rounded-2xl">
        <!-- Content area -->
        <div class="flex flex-wrap justify-start items-start pt-10 px-6">
          <Search-sec />

        </div>
      </div>
    </div>












  `,
  styles:[],

})
export class AppComponent {
  title = 'tax-project';
}



