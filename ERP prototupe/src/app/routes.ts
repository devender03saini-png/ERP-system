import { createBrowserRouter } from 'react-router';
import { Root } from '@/app/Root';
import { Dashboard } from '@/app/pages/Dashboard';
import { Students } from '@/app/pages/Students';
import { Attendance } from '@/app/pages/Attendance';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Dashboard },
      { path: 'students', Component: Students },
      { path: 'attendance', Component: Attendance },
    ],
  },
]);
