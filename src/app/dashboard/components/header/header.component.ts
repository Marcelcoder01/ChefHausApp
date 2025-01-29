import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  searchTerm: string = '';

  onSearch(): void {
    console.log('Search term:', this.searchTerm);

  }
}
