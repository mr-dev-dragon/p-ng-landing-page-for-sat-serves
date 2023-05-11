
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],


})
export class NavbarComponent {

    constructor(private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
  }


url:string='/'

 async routerLink(goto: string) {
          this.url=goto
          this.router.navigate([`/${goto}`]);

}




}
