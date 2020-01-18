import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientid = '469b9f611b8dc6b7204d';
  private clientsecret =  '19366be1c273bf4a336355df2c125d8572e36f9c';

  constructor(private http: HttpClient) {
    console.log('service is now ready!');
    this.username = 'Mburiah';
   }

   getProfileInfo() {
    return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid +
     '&client_secret=' + this.clientsecret);
    }

  getProfilerepos() {
      return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid +
       '&client_secret=' + this.clientsecret);
      }

  updateProfile(username: string) {
     this.username = username;
  }
}
