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

// Access the dark theme
// // export makes it available to dashboard layout so that if a user logs out and logs in again,
// // the dark theme will be saved
// export const checkDefaultTheme = () => {
//   const isDarkTheme = localStorage.getItem('darkTheme') === 'true'; // get the dark theme from local storage
//   document.body.classList.toggle('dark-theme', isDarkTheme);
//   return isDarkTheme;
// };

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true'; // get the dark theme from local storage
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
};

const isDarkThemeEnabled = checkDefaultTheme();

// checkDefaultTheme(); // Call the function to set the dark theme
// // not use const isDarkThemeEnabled = checkDefaultTheme();
// // won't pass the variable to the DashboardLayout component

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
        element: <DashboardLayout isDarkThemeEnabled={isDarkThemeEnabled} />,
        children: [
          {
            index: true,
            element: <AddJob />,
          },
          {
            // The paths should be relative to the parent route (dashboard),
            // so they should not start with a /
            path: 'stats',
            element: <Stats />,
          },
          {
            path: 'all-jobs',
            element: <AllJobs />,
          },
          {
            path: 'profile',
            element: <Profile />,
          },
          {
            path: 'admin',
            element: <Admin />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
