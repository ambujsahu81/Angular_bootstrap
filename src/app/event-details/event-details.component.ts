import { Component } from '@angular/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {
 GuestArray = [
  { name: 'Lisa Alvin' , designation: 'Co-founder', company: 'Meetup'},
  { name: 'Jenny Pick' , designation: 'CEO', company: 'Zack'},
  { name: 'Peter Scott' , designation: 'CEO', company: 'Scott Inc'},
 ]
}
