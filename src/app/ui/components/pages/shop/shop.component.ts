import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: "app-shop",
    templateUrl: "./shop.component.html",
    styleUrls: ["./shop.component.scss"],
    standalone: true,
    imports: [CommonModule],
})
export class ShopComponent  {
    constructor() {}

    ngOnInit(): void {}
}
