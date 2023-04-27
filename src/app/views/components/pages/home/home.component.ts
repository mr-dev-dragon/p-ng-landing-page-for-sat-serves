import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { TestimonialsComponent } from "../testimonials/testimonials.component";

@Component({
    selector: "app-home-one",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
    standalone: true,
    imports: [CommonModule, TestimonialsComponent],
})
export class HomeComponent {
    constructor() {}
    ngOnInit(): void {}

    var: string = "div.npm";
}
