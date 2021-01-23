import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PostPageComponent } from './post-page/post-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: ':id/:userId', component: PostPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
