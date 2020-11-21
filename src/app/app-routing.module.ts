import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AuthGuard } from './guards/Auth.guard';
import { ConfirmGuard } from './guards/confirm.guard';
import { HomeComponent } from './home/home.component';
import { ProfileResolver } from './resolver/profile.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'addProfile', component: AddProfileComponent, canActivate: [AuthGuard], canDeactivate: [ConfirmGuard] },
  { path: 'editProfile/:id', component: EditProfileComponent, resolve: { profile: ProfileResolver}, canDeactivate: [ConfirmGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
