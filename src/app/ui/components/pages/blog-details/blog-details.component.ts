import { CommonModule } from "@angular/common";
import { Component} from "@angular/core";

@Component({
    selector: "app-blog-details",
    templateUrl: "./blog-details.component.html",
    styleUrls: ["./blog-details.component.scss"],
    standalone: true,
    imports: [CommonModule],
})
export class BlogDetailsComponent {
    constructor() {}

    ngOnInit(): void {}
}
