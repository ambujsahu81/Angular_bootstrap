import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.css']
})
export class EventRegistrationComponent {

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
      let formData = JSON.stringify(this.registrationForm.value, null, 4)
      alert(`Successfully registered. \n\n ${formData} `);
      return;
    }
    this.registrationForm.markAllAsTouched();
  }
  
}
