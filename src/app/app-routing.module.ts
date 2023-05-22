import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsComponent } from './ui/views.component';

const routes: Routes = [
    {
        path: "",
        component: ViewsComponent,
        children: [
                     {
                        path: "",
                        loadChildren:() =>import("./ui/views.module").then((m) => m.ViewsModule),
                        data: {},
                    },
                  ]
    },
];
@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
