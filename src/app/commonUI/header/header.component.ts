import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items!: any;

  // activeItem: MenuItem = this.items[0];
  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
      { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
      { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
      { label: 'Documentation', icon: 'pi pi-fw pi-file' },
      { label: 'Settings', icon: 'pi pi-fw pi-cog' }
    ];
  }

  onActiveItemChange(event: MenuItem) {
    // if (event) {
    //   this.activeItem = event;
    // }
  }

  activateLast() {
    // this.activeItem = (this.items as MenuItem[])[(this.items as MenuItem[]).length - 1];
  }
}
