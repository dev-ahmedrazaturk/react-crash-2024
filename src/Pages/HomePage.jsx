import React from 'react'
import Hero from "../Components/Hero";
import HomeCards from '../Components/HomeCards';
import JobListings from '../Components/JobListings';
import ViewAllJobs from '../Components/ViewAllJobs';

const HomePage = () => {
  return (
    <>
        <Hero  title="Testing React Application" subTitle="Testing Job posting react application"/>
        <HomeCards />
        <JobListings isHome = {true} />
        <ViewAllJobs />
    </>
  )
}

export default HomePage
