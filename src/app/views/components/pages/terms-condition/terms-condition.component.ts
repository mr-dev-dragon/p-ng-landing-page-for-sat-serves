import { CommonModule } from "@angular/common";
import { Component,  } from "@angular/core";

@Component({
    selector: "app-terms-condition",
    templateUrl: "./terms-condition.component.html",
    styleUrls: ["./terms-condition.component.scss"],
    standalone: true,
    imports: [CommonModule],
})
export class TermsConditionComponent {
    constructor() {}
    ngOnInit(): void {}
}
