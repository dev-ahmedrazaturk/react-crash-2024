import React from 'react'
import JobListings from '../Components/JobListings'

const JobsPage = () => {
  return (
    <section className='bg-blue-50 px-4 py-6'>
      <JobListings isHome={false} ></JobListings>
    </section>
  )
}

export default JobsPage