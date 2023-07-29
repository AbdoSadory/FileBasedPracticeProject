import { getEventById } from '@/dummy-data'
import { useRouter } from 'next/router'
import React from 'react'
import styles from './styles.module.css'
const EventDetails = () => {
  const router = useRouter()
  const eventID = router.query.eventId
  const event = getEventById(eventID)
  return (
    <main className={`${styles.eventMainContainer}`}>
      <img
        className={`${styles.eventImage}`}
        src={`/${event?.image}`}
        alt={event?.title}
      />
      <h1 className={`${styles.eventTitle}`}>{event?.title}</h1>
      <ul className={`${styles.eventDetails}`}>
        <li>{event?.description}</li>
        <li>
          {new Date(event?.date).toLocaleString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </li>
        <li>{event?.location}</li>
      </ul>
    </main>
  )
}

export default EventDetails
