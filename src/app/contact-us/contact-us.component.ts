import { HttpClient } from '@angular/common/http';
import {Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
 
})
export class ContactUsComponent implements OnInit {

   name: string;
   email: string;
   message: string;
  
    ngOnInit(): void {
      
    }

    constructor() { 
   
    }
    submitForm(){
      const post = `My name is ${this.name}. My email is ${this.email}. My Comment is ${this.message}`;

      alert(post);
    }
    
}
