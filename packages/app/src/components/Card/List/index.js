import React from 'react';
import {
  MdEvent,
  MdEventSeat,
  MdEventAvailable,
  MdEventBusy,
} from 'react-icons/md';
import { Container } from './styles';
import { appointmentStatus } from '~/constants';

export default function List({ time, ...props }) {
  return (
    <Container {...props}>
      <img
        src={
          (time.appointment && time.appointment.user.avatar.url) ||
          'https://api.adorable.io/avatars/50/abott@adorable.png'
        }
        alt="Avatar"
      />

      <span>{time.appointment && time.appointment.user.name}</span>
      <div>
        <strong>{time.time}</strong>
        <div>
          <span>
            {time.appointment ? (
              appointmentStatus[time.appointment.status] === 'Reservado' ? (
                <MdEventSeat />
              ) : appointmentStatus[time.appointment.status] ===
                'Confirmado' ? (
                <MdEventAvailable />
              ) : (
                <MdEventBusy />
              )
            ) : (
              <MdEvent />
            )}
          </span>

          <span>
            {time.appointment
              ? appointmentStatus[time.appointment.status]
              : 'Disponível'}
          </span>
        </div>
      </div>
    </Container>
  );
}
