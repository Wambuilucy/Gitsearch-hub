import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile.component';
import { RepoComponent } from './repo/repo.component';


const routes: Routes = [
  {path: '', component:ProfileComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'repo', component:RepoComponent}
 

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class LucyRoutingModule { }
