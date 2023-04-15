import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PreloaderComponent } from './components/preloader/preloader.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';




@NgModule({
    declarations: [PreloaderComponent, NavbarComponent, FooterComponent],
    imports: [CommonModule],
    exports: [PreloaderComponent, NavbarComponent, FooterComponent],
})
export class SharedModule {}
