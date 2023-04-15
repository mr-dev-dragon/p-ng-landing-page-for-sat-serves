import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: "app-checkout",
    templateUrl: "./checkout.component.html",
    styleUrls: ["./checkout.component.scss"],
    standalone: true,
    imports: [CommonModule],
})
export class CheckoutComponent {
    constructor() {}

    ngOnInit(): void {}
}
