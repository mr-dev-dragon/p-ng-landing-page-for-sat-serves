import { CommonModule } from "@angular/common";
import { Component,  } from "@angular/core";

@Component({
    selector: "app-pricing",
    templateUrl: "./pricing.component.html",
    styleUrls: ["./pricing.component.scss"],
    standalone: true,
    imports: [CommonModule],
})
export class PricingComponent {
    constructor() {}

    ngOnInit(): void {}
}
