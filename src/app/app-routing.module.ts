import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AuthComponent } from './auth/auth.component';
import { MessageBoardComponent } from './message-board/message-board.component';
import { AdminComponent } from './admin/admin.component';
import { TokenService } from './services/token.service';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reviews', component: ReviewsComponent, canActivate: [ AuthGuard ] },
  { path: 'auth', component: AuthComponent },
  { path: 'board', component: MessageBoardComponent, canActivate: [ AuthGuard ] },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
