import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: "app-home-one",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
    standalone: true,
    imports: [CommonModule],
})
export class HomeComponent {
    constructor() {}
    ngOnInit(): void {}
}
