import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import HomePage from './Pages/HomePage';
import JobsPage from './Pages/JobsPage';
import JobPage, { jobLoader } from './Pages/JobPage';
import NotFoundPage from './Pages/NotFoundPage';
import AddJobPage from './Pages/AddJobPage';
import EditJobPage from './Pages/EditJobPage';

const App = () => {

  // Add new job
  const addJob = async (newJob) => {

    const response = await fetch('/api/jobs',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });

    return;
  }

  // update the job
  const updateJob = async(updateJob) => {

    const response = await fetch(`/api/jobs/${updateJob.id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateJob)
    });

    return;
  } 

  // Delete job
  const deleteJob = async(id) => {
    
    const response = await fetch(`/api/jobs/${id}`,{
      method: 'DELETE'
    });

    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return  <RouterProvider router={router} />;
};

export default App
