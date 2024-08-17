import App from './App';
import Two from './components/Two';
import One from './components/One';
import { createBrowserRouter } from "react-router-dom";
import Blog from './pages/Blog';

export const childRoutes = [
    {
        path: "blog/",
        element: <Blog />
    },
    {
        path: "two/",
        element: <Two />
    },
    {
        path: "one/",
        element: <One />
    },
    {
        path: "one/",
        element: <One />
    }
];

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: childRoutes
    },
]);