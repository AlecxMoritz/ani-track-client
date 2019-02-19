import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { MessageBoardComponent } from './message-board/message-board.component';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './UI/navbar/navbar.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReviewComponent } from './reviews/review/review.component';
import { MessageComponent } from './message-board/message/message.component';
import { PostMessageComponent } from './message-board/post-message/post-message.component';
import { TokenAuthInterceptor } from './interceptors/token-auth.interceptor';
import { PostReviewComponent } from './reviews/post-review/post-review.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    ReviewsComponent,
    MessageBoardComponent,
    AdminComponent,
    NavbarComponent,
    SignUpComponent,
    LoginComponent,
    ReviewComponent,
    MessageComponent,
    PostMessageComponent,
    PostReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ 
    HttpClient,
    {
      provide: HTTP_INTERCEPTORS, useClass: TokenAuthInterceptor, multi: true
    }
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
