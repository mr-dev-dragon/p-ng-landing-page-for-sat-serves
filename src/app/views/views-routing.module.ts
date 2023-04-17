




import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
    { path: "",                loadComponent:() => import('./components/pages/home/home.component')                         .then((m) =>m .HomeComponent)},
    { path: "about",           loadComponent:() => import('./components/pages/about/about.component')                       .then((m) =>m .AboutComponent)},
    { path: "team",            loadComponent:() => import('./components/pages/team/team.component')                         .then((m) =>m .TeamComponent)},
    { path: "pricing",         loadComponent:() => import('./components/pages/pricing/pricing.component')                   .then((m) =>m .PricingComponent)},
    { path: "category",        loadComponent:() => import('./components/pages/category/category.component')                 .then((m) =>m .CategoryComponent)},
    { path: "shop",            loadComponent:() => import('./components/pages/shop/shop.component')                         .then((m) =>m .ShopComponent)},
    { path: "cart",            loadComponent:() => import('./components/pages/cart/cart.component')                         .then((m) =>m .CartComponent)},
    { path: "checkout",        loadComponent:() => import('./components/pages/checkout/checkout.component')                 .then((m) =>m .CheckoutComponent)},
    { path: "products-details",loadComponent:() => import('./components/pages/products-details/products-details.component') .then((m) =>m .ProductsDetailsComponent)},
    { path: "faq",             loadComponent:() => import('./components/pages/faq/faq.component')                           .then((m) =>m .FaqComponent)},
    { path: "testimonials",    loadComponent:() => import('./components/pages/testimonials/testimonials.component')         .then((m) =>m .TestimonialsComponent)},
    { path: "error",           loadComponent:() => import('./components/pages/error/error.component')                       .then((m) =>m .ErrorComponent)},
    { path: "login-register",  loadComponent:() => import('./components/pages/login-register/login-register.component')     .then((m) =>m .LoginRegisterComponent)},
    { path: "terms-condition", loadComponent:() => import('./components/pages/terms-condition/terms-condition.component')   .then((m) =>m .TermsConditionComponent)},
    { path: "privacy-policy",  loadComponent:() => import('./components/pages/privacy-policy/privacy-policy.component')     .then((m) =>m .PrivacyPolicyComponent)},
    { path: "listing",         loadComponent:() => import('./components/pages/listing/listing.component')                   .then((m) =>m .ListingComponent)},
    { path: "coming-soon",     loadComponent:() => import('./components/pages/coming-soon/coming-soon.component')           .then((m) =>m .ComingSoonComponent)},
    { path: "listing-details", loadComponent:() => import('./components/pages/listing-details/listing-details.component')   .then((m) =>m .ListingDetailsComponent)},
    { path: "blog",            loadComponent:() => import('./components/pages/blog/blog.component')                         .then((m) =>m .BlogComponent)},
    { path: "blog-details",    loadComponent:() => import('./components/pages/blog-details/blog-details.component')         .then((m) =>m .BlogDetailsComponent)},
    { path: "contact",         loadComponent:() => import('./components/pages/contact/contact.component')                   .then((m) =>m .ContactComponent)},
    { path: "**",              loadComponent:() => import('./components/pages/error/error.component')                       .then((m) =>m .ErrorComponent)},
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ViewsRoutingModule {}
