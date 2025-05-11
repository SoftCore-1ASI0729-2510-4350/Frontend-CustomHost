import {Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import {SidebarComponent} from './public/components/sidebar/sidebar.component';
@Component({
  selector: 'app-root',
  imports: [SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'CustomHost';
  constructor(
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route.snapshot.data['title'] || 'CustomHost';
        })
      )
      .subscribe((title: string) => {
        this.titleService.setTitle(title);
      });
  }
}
