import { CommonModule } from "@angular/common";
import { Component} from "@angular/core";

@Component({
    selector: "app-category",
    templateUrl: "./category.component.html",
    styleUrls: ["./category.component.scss"],
    standalone: true,
    imports: [CommonModule],
})
export class CategoryComponent {

    constructor() {}
    ngOnInit(): void {}
}
