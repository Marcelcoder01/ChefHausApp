import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  drawerCollapsed: boolean = false;
  currentRoute: string | null = null;

  constructor(private cdr: ChangeDetectorRef, private router: Router){
    this.router.events.subscribe(() => {
      this.cdr.detectChanges();
    });
  }

  ngOnInit(): void {

  }

  collapseDrawerAction(collapse?: boolean){
    this.drawerCollapsed = !this.drawerCollapsed
  }

  changeRoute(moduleName: string): void {
    switch (moduleName) {
      case 'home':
        this.router.navigateByUrl('/dashboard/home');
        break;
      case 'calendar':
        this.router.navigateByUrl('/dashboard/calendar');
        break;
      case 'graphs':
        this.router.navigateByUrl('/dashboard/graphs');
        break;
      default:
        console.error(`Unknown module: ${moduleName}`);
        break;
    }
  }
}
