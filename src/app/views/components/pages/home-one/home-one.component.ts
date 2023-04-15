import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: "app-home-one",
    templateUrl: "./home-one.component.html",
    styleUrls: ["./home-one.component.scss"],
    standalone: true,
    imports: [CommonModule],
})
export class HomeOneComponent {
    constructor() {}
    ngOnInit(): void {}
}
