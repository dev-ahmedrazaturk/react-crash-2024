import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import JobDetail from '../Components/JobDetail';

const JobPage = ({deleteJob}) => {

  const { id } = useParams();

  return  <JobDetail id={id} deleteJob={deleteJob} />
}

const jobLoader = async({params}) => {

  const response = await fetch(`/api/jobs/${params.id}`);
  const data = await response.json();
  return data;
}

export {JobPage as default, jobLoader}
