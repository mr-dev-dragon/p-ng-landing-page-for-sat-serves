import { CommonModule } from "@angular/common";
import { Component,  } from "@angular/core";

@Component({
    selector: "app-privacy-policy",
    templateUrl: "./privacy-policy.component.html",
    styleUrls: ["./privacy-policy.component.scss"],
    standalone: true,
    imports: [CommonModule],
})
export class PrivacyPolicyComponent {
    constructor() {}

    ngOnInit(): void {}
}
