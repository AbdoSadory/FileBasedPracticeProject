import Link from 'next/link'
import React from 'react'
import EventItem from '../eventItem/EventItem'
import styles from './styles.module.css'
const FeaturedEvents = ({ featuredEvents }) => {
  return (
    <div>
      <ul className={`${styles.eventListContainer}`}>
        {featuredEvents.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
      </ul>
    </div>
  )
}

export default FeaturedEvents
