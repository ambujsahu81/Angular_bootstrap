import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-confetti-page',
  templateUrl: './confetti-page.component.html',
  styleUrls: ['./confetti-page.component.css']
})
export class ConfettiPageComponent {
  @Input() msg:string ='';
  message:string='';
  formData: any;
        
  constructor() { } 
  
  ngOnInit() {
    this.message = this.msg.split('\n\n')[0]
    this.formData = JSON.parse(this.msg.split('\n\n')[1]);
    console.log(this.formData);
  }
}
