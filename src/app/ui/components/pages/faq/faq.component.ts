import { CommonModule } from "@angular/common";
import { Component,  } from "@angular/core";

@Component({
    selector: "app-faq",
    templateUrl: "./faq.component.html",
    styleUrls: ["./faq.component.scss"],
    standalone: true,
    imports: [CommonModule],
})
export class FaqComponent {
    constructor() {}

    ngOnInit(): void {}
}
