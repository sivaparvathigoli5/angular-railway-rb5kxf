import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) { }

  login() { }

  registration() { }

  editProfile(user) {
    // '/home/update'
    alert(JSON.stringify(user));
  }

  getProfile() {
    // '/home/profile/get'
    let user = {
      firstName: 'Elinas',
      lastName: 'Valieva',
      login: 'login@mail.ru',
      birthDay: '06.07.1995',
      sex: 'female'
    };
    return user;
  }
}