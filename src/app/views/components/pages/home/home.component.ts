import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { NastyCardComponent } from "../../elements/nasty-card/nasty-card.component";
import { CounterAreaComponent } from "../../elements/counter-area/counter-area.component";

@Component({
    selector: "app-home-one",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
    standalone: true,
    imports: [CommonModule, TestimonialsComponent,NastyCardComponent,CounterAreaComponent],
})
export class HomeComponent {
    constructor() {}
    ngOnInit(): void {}

    var: string = "div.npm";
}
