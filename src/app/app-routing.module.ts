import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { AboutComponent } from './components/pages/about/about.component';
import { TeamComponent } from './components/pages/team/team.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { CategoryComponent } from './components/pages/category/category.component';
import { ShopComponent } from './components/pages/shop/shop.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { ProductsDetailsComponent } from './components/pages/products-details/products-details.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { LoginRegisterComponent } from './components/pages/login-register/login-register.component';
import { TermsConditionComponent } from './components/pages/terms-condition/terms-condition.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { ListingComponent } from './components/pages/listing/listing.component';
import { ListingDetailsComponent } from './components/pages/listing-details/listing-details.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { ContactComponent } from './components/pages/contact/contact.component';

const routes: Routes = [
    {path: '', component: HomeOneComponent},
    {path: 'home-two', component: HomeTwoComponent},
    {path: 'home-three', component: HomeThreeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'team', component: TeamComponent},
    {path: 'pricing', component: PricingComponent},
    {path: 'category', component: CategoryComponent},
    {path: 'shop', component: ShopComponent},
    {path: 'cart', component: CartComponent},
    {path: 'checkout', component: CheckoutComponent},
    {path: 'products-details', component: ProductsDetailsComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'testimonials', component: TestimonialsComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'login-register', component: LoginRegisterComponent},
    {path: 'terms-condition', component: TermsConditionComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'coming-soon', component: ComingSoonComponent},
    {path: 'listing', component: ListingComponent},
    {path: 'listing-details', component: ListingDetailsComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
    {path: 'contact', component: ContactComponent},
    // Here add new pages component

    {path: '**', component: ErrorComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule {}