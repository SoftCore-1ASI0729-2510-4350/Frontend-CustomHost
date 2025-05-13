import {Component, OnInit} from '@angular/core';
import {
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
} from '@angular/material/sidenav';
import {MatListItem, MatNavList} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatLine} from '@angular/material/core';
import {NgForOf, NgIf} from '@angular/common';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from '../header/header.component';
import {TranslatePipe} from '@ngx-translate/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  imports: [
    MatNavList,
    MatIcon,
    RouterOutlet,
    MatListItem,
    RouterLink,
    MatDrawerContent,
    MatDrawerContainer,
    MatDrawer,
    HeaderComponent,
    TranslatePipe,
    CommonModule,
    RouterLinkActive
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements  OnInit{

  role='guest';


  routes = [
    { name: 'sidebar-items.home', path: '/home', icon: 'home', type: 'both' },
    { name: 'sidebar-items.profile', path: '/profiles/profile', icon: 'person', type: 'both' },
    { name: 'sidebar-items.book', path: '/crm/book', icon: 'book', type: 'guest' },
    { name: 'sidebar-items.my-bookings', path: '/crm/my-bookings', icon: 'event', type: 'guest' },
    { name: 'sidebar-items.iot-devices', path: '/guest-experience/iot-devices', icon: 'devices', type: 'staff' },
    { name: 'sidebar-items.customer-service', path: '/crm/customer-service', icon: 'headset_mic', type: 'guest' },
  ];
  constructor(private router: Router) {}
  isActive(path: string): boolean {
    return this.router.url === path;
  }
  ngOnInit() {
    // Initialize any data or perform any setup tasks here
    console.log('Sidebar component initialized');
  }

}
