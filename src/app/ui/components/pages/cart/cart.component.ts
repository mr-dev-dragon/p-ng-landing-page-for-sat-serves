import { CommonModule } from "@angular/common";
import { Component} from "@angular/core";

@Component({
    selector: "app-cart",
    templateUrl: "./cart.component.html",
    styleUrls: ["./cart.component.scss"],
    standalone: true,
    imports: [CommonModule],
})
export class CartComponent {
    constructor() {}

    ngOnInit(): void {}
}
