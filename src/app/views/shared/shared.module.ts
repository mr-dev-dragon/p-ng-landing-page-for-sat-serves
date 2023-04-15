import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PreloaderComponent } from './components/preloader/preloader.component';
import { FooterStyleOneComponent } from './components/footer-style-one/footer-style-one.component';
import { NavbarStyleOneComponent } from './components/navbar-style-one/navbar-style-one.component';




@NgModule({
    declarations: [
        PreloaderComponent,
        NavbarStyleOneComponent,
        FooterStyleOneComponent,
  
    ],
    imports: [CommonModule,],
    exports: [
        PreloaderComponent,
        NavbarStyleOneComponent,
        FooterStyleOneComponent,
 
    ],
})
export class SharedModule {}
