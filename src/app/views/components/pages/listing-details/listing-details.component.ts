import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: "app-listing-details",
    templateUrl: "./listing-details.component.html",
    styleUrls: ["./listing-details.component.scss"],
    standalone: true,
    imports: [CommonModule],
})
export class ListingDetailsComponent {
    constructor() {}

    ngOnInit(): void {}
}
