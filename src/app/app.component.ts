import { Component } from '@angular/core';
import {LogoComponents} from '../task-components/logo-section';






@Component({
  selector: 'app-root',
  imports: [
    LogoComponents,



  ],
  template: `
    <logo-sections/>


  `,
  styles:[],

})
export class AppComponent {
  title = 'tax-project';
}



