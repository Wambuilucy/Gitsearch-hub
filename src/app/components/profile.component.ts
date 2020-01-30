import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { User } from '../user';
/*import { profile } from 'console';*/

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: User;
  repos: any;
  username: string;

  constructor( private profileService: ProfileService) {
    this.username = "Wambuilucy";
  }

  findProfile() {
    this.profileService.updateName(this.username);
    this.profileService.getUsers()
    this.profile = this.profileService.user;
    console.log(this.profile + "now")


    this.profileService.getRepos().then(repos=>{
      this.repos = repos
    })
  }

  ngOnInit() {
    this.profileService.getUsers()
    this.profile = this.profileService.user;
    console.log(this.profile + "now")


    this.profileService.getRepos().then(repos=>{
      this.repos = repos
    })

  }
}

