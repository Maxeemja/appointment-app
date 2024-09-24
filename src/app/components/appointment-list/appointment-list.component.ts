import { Component } from '@angular/core';
import { Appointment } from '../../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.scss',
})
export class AppointmentListComponent {
  appointment: Appointment = {
    id: 1,
    title: 'Buy a bread',
    date: new Date(),
  };
}
