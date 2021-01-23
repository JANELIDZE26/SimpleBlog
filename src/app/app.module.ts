import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PostComponent } from './main-page/post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { PostPageComponent } from './post-page/post-page.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';

@NgModule({
  declarations: [AppComponent, MainPageComponent, PostComponent, PostPageComponent, SpinnerComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
