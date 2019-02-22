import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { MessageBoardComponent } from './message-board/message-board.component';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './UI/navbar/navbar.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { ReviewComponent } from './reviews/review/review.component';
import { MessageComponent } from './message-board/message/message.component';
import { PostMessageComponent } from './message-board/post-message/post-message.component';
import { PostReviewComponent } from './reviews/post-review/post-review.component';

import { TokenAuthInterceptor } from './interceptors/token-auth.interceptor';
import { AppMaterialModule } from './app-material/app-material.module';
import { ReviewIndexComponent } from './reviews/review-index/review-index.component';
import { MessageIndexComponent } from './message-board/message-index/message-index.component';
import { EditReviewComponent } from './reviews/edit-review/edit-review.component';
import { DeleteReviewComponent } from './reviews/delete-review/delete-review.component';
import { EditDialogComponent } from './reviews/edit-review/edit-dialog/edit-dialog.component';
import { DeleteConfirmDialogComponent } from './reviews/delete-review/delete-confirm-dialog/delete-confirm-dialog.component';

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
    PostReviewComponent,
    ReviewIndexComponent,
    MessageIndexComponent,
    EditReviewComponent,
    DeleteReviewComponent,
    EditDialogComponent,
    DeleteConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [ 
    HttpClient,
    {
      provide: HTTP_INTERCEPTORS, useClass: TokenAuthInterceptor, multi: true
    }
   ],

   entryComponents: [
    PostReviewComponent, PostMessageComponent, EditDialogComponent, DeleteConfirmDialogComponent
   ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
