import { Component, OnInit } from '@angular/core';
declare var $:any;

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: 'dashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' },
];
@Component({
  selector: 'app-sidebar-cmp',
  templateUrl: './sidebar-cmp.component.html',
  styleUrls: ['./sidebar-cmp.component.scss']
})
export class SidebarCmpComponent implements OnInit {
  public menuItems: any[];

  constructor(){}

   ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
}
isNotMobileMenu(){
    if($(window).width() > 991){
        return false;
    }
    return true;
}
}
