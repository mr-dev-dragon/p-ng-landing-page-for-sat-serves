import { CommonModule } from "@angular/common";
import { Component, isStandalone, OnInit } from "@angular/core";

@Component({
    selector: "app-blog",
    templateUrl: "./blog.component.html",
    styleUrls: ["./blog.component.scss"],
    standalone: true,
    imports: [CommonModule],
})
export class BlogComponent {
    constructor() {}

    ngOnInit(): void {}
}
