import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";


@Component({
    selector: "app-checkout",
    templateUrl: "./checkout.component.html",
    styleUrls: ["./checkout.component.scss"],
    standalone: true,
    imports: [CommonModule,RouterModule],
})
export class CheckoutComponent {
    constructor() {}

    ngOnInit(): void {}
}
