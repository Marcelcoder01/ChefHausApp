import { SidenavItem } from './../../interfaces/dashboard.interfaces';
import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sublevel-menu',
  standalone: false,
  template: `
    <ul *ngIf="!collapsed && data.items && data.items.length > 0"
    [@submenu]="expanded ? {value: 'visible',
      params: {transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)', height: '*'}} : ''"
    class="sublevel-nav">
      <li *ngFor="let item of data.items" class="sublevel-nav-item">
          <a class="sublevel-nav-link"
          [routerLink]="[item.routeLink]"
          routerLinkActive="active-sublevel"
          [routerLinkActiveOptions]="{exact: true}"
          >
          <mat-icon *ngIf="item.icon" class="sublevel-link-icon" style="font-size: 1rem">{{  item.icon }}</mat-icon>
          <mat-icon *ngIf="!item.icon" class="sublevel-link-icon" style="margin-left: 0.2rem">radio_button_unchecked</mat-icon>
          <span class="sublevel-link-text" *ngIf="!collapsed">
            {{ item.label }}
          </span>
        </a>
      </li>
    </ul>
  `,
  styleUrls: ['./sidebar.component.scss'],
  animations:[
    trigger('submenu', [
      state('hidden', style({
        height: '0',
        overflow: 'hidden'
      })),
      state('visible', style({
        height: '*'
      })),
      transition('visible <=> hidden', [style({overflow: 'hidden'}),
        animate('{{transitionParams}}')]),
      transition('void => *', animate(0))
    ])
  ]
})
export class SublevelMenuComponent implements OnInit {

  @Input() data: SidenavItem ={
    routeLink: '',
    icon: '',
    label: '',
    items: []
  }
  @Input() collapsed = false;
  @Input() animatig: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean = false;
  @Output() navigateToSubModule = new EventEmitter<string>();

  constructor(){}

  ngOnInit(): void {

  }

  handleClick(item: SidenavItem){
    if(item.routeLink){
      this.navigateToSubModule.emit(item.routeLink)
    }
    if(!this.multiple){
      if(this.data.items && this.data.items.length > 0){
        for(let modelItem of this.data.items){
          if(item !== modelItem && modelItem.expanded){
            modelItem.expanded = false
          }
        }
      }
    }
    item.expanded = !item.expanded
  }

}
