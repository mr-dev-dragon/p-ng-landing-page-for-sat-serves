import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: "app-products-details",
    templateUrl: "./products-details.component.html",
    styleUrls: ["./products-details.component.scss"],
    standalone: true,
    imports: [CommonModule],
})
export class ProductsDetailsComponent  {
    constructor() {}

    ngOnInit(): void { }
}