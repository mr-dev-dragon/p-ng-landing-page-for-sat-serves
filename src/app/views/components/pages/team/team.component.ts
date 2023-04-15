import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: "app-team",
    templateUrl: "./team.component.html",
    styleUrls: ["./team.component.scss"],
    standalone: true,
    imports: [CommonModule],
})
export class TeamComponent {
    constructor() {}

    ngOnInit(): void {}
}
