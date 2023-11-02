import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NormalImageComponent } from './components/normal-image/normal-image.component';
import { AdvancedImageComponent } from './components/advanced-image/advanced-image.component';
import { AdvancedImageLoopComponent } from './components/advanced-image-loop/advanced-image-loop.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'normal-image', component: NormalImageComponent },
  { path: 'advanced-image', component: AdvancedImageComponent },
  { path: 'advanced-image-loop', component: AdvancedImageLoopComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
