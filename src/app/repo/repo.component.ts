import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  repos:any;
  searchname:any;

  constructor(private profileService:ProfileService) {
    this.profileService = profileService;

   }

   searchRepos(){
     this.profileService.updateRepoSearchName(this.searchname);
     this.profileService.searchRepos().then(replies=>{
      this.repos = replies['items'];
      console.log(this.repos)
    });

   }

  

  ngOnInit() {
    this.profileService.searchRepos().then(replies=>{
      this.repos = replies['items'];
      console.log(this.repos)
    });
  }

}
