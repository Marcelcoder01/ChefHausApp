import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { SidenavItem } from '../../interfaces/dashboard.interfaces';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  animations:[
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('350ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('350ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate(
          '1000ms ease-in-out',
          keyframes([
            style({ transform: 'rotate(0deg)', offset: 0 }),
            style({ transform: 'rotate(720deg)', offset: 1 })
          ])
        )
      ])
    ])
  ]
})

export class SidebarComponent implements OnInit{
  collapsed: boolean = false;
  screenWidth = 0;
  navData = navbarData;
  multiple: boolean = false;
  @Output() collapseParentDrawer = new EventEmitter<boolean>();
  @Output() navigateToModule = new EventEmitter<string>();
  constructor(){}

  ngOnInit(): void {


  }

  toggleCollapse(){
    this.collapsed = !this.collapsed;
    this.collapseParentDrawer.emit(this.collapsed)
  }



  handleClick(item: SidenavItem){
    if(item.routeLink){
      this.navigateToModule.emit(item.routeLink)
    }
    if(!this.multiple){
      for(let modelItem of this.navData){
        if(item !== modelItem && modelItem.expanded){
          modelItem.expanded = false;
        }
      }
    }
    item.expanded = !item.expanded;
  }

  loadSubModule(moduleName:string){
    this.navigateToModule.emit(moduleName)
  }
}
