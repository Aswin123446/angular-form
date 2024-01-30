import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent  implements OnInit {
 
  userForm!: FormGroup;
 

  ngOnInit() :void{
    this.userForm = new FormGroup({
       'email': new FormControl(null,Validators.required),
       'password': new FormControl('pas'),
      'firstname': new FormControl('',Validators.required),
      


    }

  )}
  
  Submit(){

    console.log(this.userForm.value)
         }
}



    
 

