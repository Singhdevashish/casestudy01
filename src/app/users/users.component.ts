import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  formHeader = "Add User Info";
  id=null;
  name = "";
  age: number;
  image: string;
  showForm = false;
  users = null;
  choosePage:any;
  itemPerPage :number = 6;

  constructor(private service: UserService) {
   }

 /// FormPage Action

  ngOnInit(): void {

    this.getUser();

    let pageIndex = (this.choosePage - 1) * this.itemPerPage;
  }

  openForm(data=null) {
    this.clearForm();
    this.showForm = true;
    if(data) {
      this.name = data.name;
      this.age = data.age;
      this.image = data.image;
      this.id = data.id;
      this.formHeader = "Edit User Info";
    }
    else {
      this.id = null;
      this.formHeader = "Add User Info";
    }
  }

  closeForm(){
    this.showForm = false;
    this.clearForm();
  }
  
  clearForm() {
    this.name = null;
    this.age = null;
    this.image = null;
  }

  /// FormPage Action

  /// Pagination Action

  changePageSize(event: Event) {
    const newSize = (event.target as HTMLInputElement).value;
    this.itemPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageNumber():number[] {
    return Array(Math.ceil(this.users.length / this.itemPerPage))
      .fill(0).map((x , i) => i + 1); 
  }

  changePage(page : any) {
    this.choosePage = page;
    this.slicedItems();
  }

  slicedItems() {
    let pageIndex = (this.choosePage - 1) * this.itemPerPage;
    let endIndex = (this.choosePage - 1) * this.itemPerPage + this.itemPerPage;
    this.users = [];
    this.users = this.users.slice(pageIndex, endIndex);
  }

  /// Pagination Action

  //// Service with CRUD operatiion

  getUser() {
    this.service.fetchUser().subscribe(
      (data)=>{
        this.users = data;
      },
      (error)=>{
        console.log("error");
      }
    );
  }
 
  deleteUser(id) {
    this.service.deleteUser(id).subscribe(
      (response)=> {
        this.getUser();
      }
    );
  }

  saveUser(){
    
    this.showForm = false;

    let body = {
      name:this.name,
      age:this.age,
      image:this.image
    }

    if(this.id) {
      body['id'] = this.id;
      this.service.putUser(body,this.id).subscribe(
        (response)=>{
          this.getUser();
        }
      );
    }
    else{
      this.service.postUser(body).subscribe(
        (response)=>{
          this.getUser();
        }
      );
    }
  }

  //// Service with CRUD operatiion

  /// Image Upload

  selectFile(event) {
    if(event.target.files) {
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event: any) => {
        this.image = event.target.result
      }
    }
  }

  /// Image Upload

}
