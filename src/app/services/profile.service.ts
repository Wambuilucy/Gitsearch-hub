import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from  '../user';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  user: User
  repos:any;
  username = 'Wambuilucy';
  searchname = "tetris";

  constructor(private http: HttpClient) { 
    this.user = new User('',0,'');
    this.http = http;
    
  }

  getUsers(){
    interface ApiResponse{
      login:string;
      id:number;
      avatar_url:string;
    }
    let  promise = new Promise((resolve, reject)=>{
      return this.http.get<ApiResponse>('https://api.github.com/users/' + this.username).toPromise().then(response=>{
        this.user.login = response.login
        this.user.id = response.id
        this.user.avatar_url = response.avatar_url
        console.log(response)

        resolve(response)
      },
      error=>{
        // this.user.name = "Cannot find name"
        // this.user.login = "Cannot find login information" 
        // this.user.repos = 0


        reject(error)

      })
    })
    return promise
  }
  getRepos(){

    let promise = new Promise((resolve, reject)=>{
      return this.http.get("https://api.github.com/users/"+this.username+"/repos").toPromise().then(reply=>{
        reply
        resolve(reply)
      },
      error=>{
        reject(error)
      })
    })
    return promise
  }

  searchRepos(){
    let promise = new Promise((resolve, reject)=>{
      return this.http.get("https://api.github.com/search/repositories?q="+this.searchname+"").toPromise().then(replies=>{
        resolve(replies)
      },
      error =>{
        reject(error)
      })
    })
    return promise
  }

  
  updateName(userName:string){
    this.username=userName;
  }

  updateRepoSearchName(Searchname:string){
    this.searchname = Searchname;
  }
}
