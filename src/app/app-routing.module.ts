import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EverythingComponent } from './everything/everything.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';

const routes: Routes = [
  {path: 'everything', component: EverythingComponent},
  {path: '', redirectTo:'everything', pathMatch: 'full'},
  {path: 'men', component: MenComponent},
  {path: 'women', component: WomenComponent},
  {path: 'accessories', component: AccessoriesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'product/:id', component: ProductDescriptionComponent},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
