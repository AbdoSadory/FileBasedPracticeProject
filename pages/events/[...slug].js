import EventItem from '@/components/home/eventItem/EventItem'
import { getFilteredEvents } from '@/dummy-data'
import { useRouter } from 'next/router'
import React from 'react'

const FilteredEvents = () => {
  const router = useRouter()
  const dataFilter = router.query.slug
  if (!dataFilter) {
    return <p>loading .........</p>
  }
  if (
    isNaN(+dataFilter[0]) ||
    isNaN(+dataFilter[1]) ||
    +dataFilter[1] > 12 ||
    +dataFilter[1] < 1
  ) {
    return <p>Error .........</p>
  }
  const filteredEvents = getFilteredEvents({
    year: +dataFilter[0],
    month: +dataFilter[1],
  })
  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No Events Found for the chosen filter</p>
  }
  return (
    <section>
      {filteredEvents.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </section>
  )
}

export default FilteredEvents
