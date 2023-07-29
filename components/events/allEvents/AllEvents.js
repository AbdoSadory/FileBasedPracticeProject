import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css'
import EventItem from '@/components/home/eventItem/EventItem'
const AllEvents = ({ allEvents }) => {
  return (
    <div>
      <ul className={`${styles.eventListContainer}`}>
        {allEvents.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
      </ul>
    </div>
  )
}

export default AllEvents
