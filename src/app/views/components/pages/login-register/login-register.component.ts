import { CommonModule } from '@angular/common';
import { Component,  } from '@angular/core';

@Component({
    selector: "app-login-register",
    templateUrl: "./login-register.component.html",
    styleUrls: ["./login-register.component.scss"],
    standalone: true,
    imports: [CommonModule],
})
export class LoginRegisterComponent {
    constructor() {}
    ngOnInit(): void {}
}
