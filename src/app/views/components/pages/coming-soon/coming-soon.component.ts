import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-coming-soon",
    templateUrl: "./coming-soon.component.html",
    styleUrls: ["./coming-soon.component.scss"],
    standalone: true,
    imports: [CommonModule],
})
export class ComingSoonComponent {
    constructor() {}

    ngOnInit(): void {}
}
