import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  HomeLayout,
  Landing,
  DashboardLayout,
  Register,
  Login,
  Error,
  Stats,
  AllJobs,
  AddJob,
  EditJob,
  Profile,
  Admin,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
      },
    ],
  },
  // {
  //   path: '/error',
  //   element: <Error />,
  // },
  // {
  //   path: '/stats',
  //   element: <Stats />,
  // },
  // {
  //   path: '/all-jobs',
  //   element: <AllJobs />,
  // },
  // {
  //   path: '/add-job',
  //   element: <AddJob />,
  // },
  // {
  //   path: '/edit-job',
  //   element: <EditJob />,
  // },
  // {
  //   path: '/profile',
  //   element: <Profile />,
  // },
  // {
  //   path: '/admin',
  //   element: <Admin />,
  // },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
