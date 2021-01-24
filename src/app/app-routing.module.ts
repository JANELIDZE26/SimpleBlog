import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: ':id/:userId', component: PostPageComponent },
  { path: ':userId', component: UserPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
