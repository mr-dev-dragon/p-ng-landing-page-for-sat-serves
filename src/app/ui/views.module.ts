import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ViewsRoutingModule } from "./views-routing.module";
import { ViewsComponent } from "./views.component";
import { SharedModule } from "./shared/shared.module";


@NgModule({
    declarations: [
        ViewsComponent,
    ],
    imports: [CommonModule , SharedModule, ViewsRoutingModule,],
})
export class ViewsModule {}
