import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseurl = "http://localhost:3000/users";

  constructor(private http: HttpClient) { }

  fetchUser() {
    return this.http.get(this.baseurl);
  }

  deleteUser(id) {
    return this.http.delete(this.baseurl+"/"+id);
  }

  postUser(body) {
    return this.http.post(this.baseurl, body);
  }

  putUser(body,id) {
    return this.http.put(this.baseurl+"/"+id, body);
  }

}
