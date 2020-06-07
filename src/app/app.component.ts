import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    @ViewChild ('f')  signUpForm: NgForm
    defaultQuestion = 'teacher';
    answer = ""
    genders = ['male', 'female']
    user = {
      username: '',
      email: '',
      secretQuestion: '',
      answer: '',
      gender: '',
    }
    submitted:boolean = false; 

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signUpForm.form.patchValue({ userData: 
      { username: suggestedName}
    })
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    console.log(this.signUpForm)
    this.user.username=this.signUpForm.value.userData.username
    this.user.email=this.signUpForm.value.userData.email
    this.user.secretQuestion=this.signUpForm.value.secret
    this.user.gender=this.signUpForm.value.gender

    this.signUpForm.reset({
      userData: {
        username: 'Username',
        email: 'Email'
      },
      gender: 'male'
    });

  }
}
