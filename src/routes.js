import React from 'react';

const Register = React.lazy(() => import('./views/pages/register/Register'));
const ForgotPassword = React.lazy(() => import('./views/pages/forgot-password/ForgotPassword'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

const routes = [
    { path: '/register', name: 'Register', component: Register },
    { path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword },
    { path: '/dashboard/:page', name: 'Dashboard', component: Dashboard },
];

export default routes;