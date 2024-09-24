import { Component } from '@angular/core';
import { Appointment } from '../../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.scss',
})
export class AppointmentListComponent {
  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();

  appointments: Appointment[] = [
    {
      id: 1,
      title: 'Buy a bread',
      date: new Date(),
    },
  ];

  addItem() {
    if (this.newAppointmentTitle && this.newAppointmentDate) {
      const newItem: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate,
      };

      this.appointments.push(newItem);

      this.newAppointmentDate = new Date();
      this.newAppointmentTitle = '';
    }
  }

  deleteAppointment(idx: number) {
    this.appointments = this.appointments.filter((_, index) => index !== idx);
  }
}
