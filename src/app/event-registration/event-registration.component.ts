import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.css']
})
export class EventRegistrationComponent {
  shwFirstNameError = false;
  shwEmailError = false;
  registrationForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    email: ['', Validators.email],
    jobTitle: [''],
    companyName: [''],
    companySize: [''],
    message: [''],
    futureEmails: false
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.shwEmailError = false;
      this.shwFirstNameError = false;
      let formData = JSON.stringify(this.registrationForm.value, null, 4)
      let message = `Hello ${this.registrationForm.value.firstName}, Thankyou, registration is successfully completed \n\n ${formData} `;
      alert(message);
    } 
    if ( this.registrationForm.controls.firstName.invalid) {
      this.shwFirstNameError = true;
    } else {
      this.shwFirstNameError = false;
    }

    if ( this.registrationForm.controls.email.invalid ) {
      this.shwEmailError = true; 
    } 

    if ( !this.registrationForm.controls.email.value ) {
      this.shwEmailError = true; 
    }  
    
    if ( !this.registrationForm.controls.email.invalid && !!this.registrationForm.controls.email.value ) {
      this.shwEmailError = false; 
    }
    
  }
}
