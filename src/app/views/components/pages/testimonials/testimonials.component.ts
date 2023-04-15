import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-testimonials",
    templateUrl: "./testimonials.component.html",
    styleUrls: ["./testimonials.component.scss"],
    standalone: true,
    imports: [CommonModule],
})
export class TestimonialsComponent {
    constructor() {}

    ngOnInit(): void {}
}
