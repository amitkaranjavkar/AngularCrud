import { Component } from '@angular/core'
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})

export class AppComponent {
  isLoggedIn: boolean = false;

  constructor(private _router: Router) {
    _router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.isLoggedIn = localStorage.getItem('access_token') != undefined ? true : false;
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator
        // Present error to user
        console.log(event.error);
      }
    });
  }

  Logout() {
    localStorage.removeItem('access_token');
    this.isLoggedIn = localStorage.getItem('access_token') != undefined ? true : false;
    this._router.navigate(['login']);
  }
}

