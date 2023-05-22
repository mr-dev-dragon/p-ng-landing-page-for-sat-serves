import { CommonModule } from "@angular/common";
import { Component} from "@angular/core";

@Component({
    selector: "app-listing",
    templateUrl: "./listing.component.html",
    styleUrls: ["./listing.component.scss"],
    standalone: true,
    imports: [CommonModule],
})
export class ListingComponent {
    constructor() {}

    ngOnInit(): void {}
}
