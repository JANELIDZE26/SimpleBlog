import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PostComponent } from './main-page/post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { PostPageComponent } from './post-page/post-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { UserPageComponent } from './user-page/user-page.component';
import { SharedModule } from './shared/shared.module';
import { ShortenTitlePipe } from './main-page/post/shortenTitle.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PostComponent,
    PostPageComponent,
    UserPageComponent,
    ShortenTitlePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
