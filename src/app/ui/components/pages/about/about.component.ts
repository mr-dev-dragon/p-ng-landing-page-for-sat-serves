import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { CounterAreaComponent } from "../../elements/counter-area/counter-area.component";

@Component({
    selector: "app-about",
    templateUrl: "./about.component.html",
    styleUrls: ["./about.component.scss"],
    standalone: true,
    imports: [CommonModule,CounterAreaComponent],
})
export class AboutComponent {
    constructor() {}

    ngOnInit(): void {}
}
