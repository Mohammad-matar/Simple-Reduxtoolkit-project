import React from 'react'
import { useDispatch } from 'react-redux'
import { removeReservation } from '../features/reservationSlice';
import { addCustomer } from '../features/CustomerSlice';
import { v4 as uuid } from 'uuid';

interface ReservationCardTypes {
  name: string;
  index: number
}

//now we have to get the state from the props
export default function ReservationCard({ name, index }: ReservationCardTypes) {
  const dispatch = useDispatch()
  return (
    <div onClick={() => {
      dispatch(removeReservation(index))
      dispatch(addCustomer({
        id: uuid(),
        name,
        food: []
      }))
    }} className="reservation-card-container"> {name}</div>
  )
}
