
import Button from 'pages/button';
import Home from 'pages/home';
import Footer from 'pages/footer';
import Header from 'pages/header';
import Copy from 'pages/copy';
import Load from 'pages/load';
const routes = [
    { path: '/', component: Home, exact: true },
    { path: '/button', component: Button },
    { path: '/footer', component: Footer },
    { path: '/header', component: Header },
    { path: '/load', component: Load }
];
export default routes;
