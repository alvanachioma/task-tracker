import {Component} from '@angular/core';
import {LogoComponents} from './logo-section';
import {SideNavComponent} from './side-nav-section';






@Component({
  selector: "tracker-sections",
  imports: [
    LogoComponents, SideNavComponent,

  ],
  template: `

    <logo-sections/>
    <side-nav-sections />






  `,
})
export class TrackComponents{
  title:string= 'tracker-sections';
}
