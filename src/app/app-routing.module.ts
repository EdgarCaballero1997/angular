import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BooksComponent } from './pages/books/books.component';
import { CardComponent } from './pages/card/card.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "register", component: RegisterComponent},
  {path: "profile", component: ProfileComponent},
  {path: "books", component: BooksComponent},
  {path: "card", component: CardComponent},
  {path: "updatebook", component: UpdateBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}