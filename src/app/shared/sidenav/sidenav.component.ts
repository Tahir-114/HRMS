import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
//Sidebar toggle show hide function
status = false;
addToggle()
{
  this.status = !this.status;       
}
}
