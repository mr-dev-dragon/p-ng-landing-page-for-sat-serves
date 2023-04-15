import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: "app-error",
    templateUrl: "./error.component.html",
    styleUrls: ["./error.component.scss"],
    standalone: true,
    imports: [CommonModule],
})
export class ErrorComponent {
    constructor() {}

    ngOnInit(): void {}
}
