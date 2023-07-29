import Link from 'next/link'
import React, { useState } from 'react'
import styles from './styles.module.css'
import { useRouter } from 'next/router'
const EventsSearch = (props) => {
  const [year, setYear] = useState('2021')
  const [month, setMonth] = useState('1')
  const router = useRouter()
  const handleFilter = () => {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }
  return (
    <section className={`${styles.inputsContainer}`}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleFilter()
        }}
      >
        <div className={`${styles.inputContainer}`}>
          <label htmlFor="year">Year</label>
          <select
            defaultValue={year}
            onChange={(e) => setYear(e.target.value)}
            id="year"
          >
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={`${styles.inputContainer}`}>
          <label htmlFor="month">Month</label>
          <select
            defaultValue={month}
            onChange={(e) => setMonth(e.target.value)}
            id="month"
          >
            <option value="1">January</option>
            <option value="2">Febrary</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <button type="submit">Filter</button>
      </form>
    </section>
  )
}

export default EventsSearch
