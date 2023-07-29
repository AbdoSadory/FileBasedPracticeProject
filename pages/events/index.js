import AllEvents from '@/components/events/allEvents/AllEvents'
import EventsSearch from '@/components/events/eventsSearch/EventsSearch'
import { getAllEvents } from '@/dummy-data'

const Events = () => {
  const events = getAllEvents()
  return (
    <main>
      <section>
        <EventsSearch />
      </section>
      {<AllEvents allEvents={events} />}
    </main>
  )
}

export default Events
