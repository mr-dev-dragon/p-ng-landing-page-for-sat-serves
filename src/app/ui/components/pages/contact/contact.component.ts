import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: "app-contact",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.scss"],
    standalone: true,
    imports: [CommonModule],
})
export class ContactComponent {
    constructor() {}

    ngOnInit(): void {}
}
