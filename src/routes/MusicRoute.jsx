import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home"
import Playlist from "../pages/Playlist";
import Error from "../pages/Error";
import Songs from "../pages/Songs";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/songs',
        element: <Songs />
    },
    {
        path: '/playlist',
        element: <Playlist />
    },
    {
        path: '*',
        element: <Error />
    }
])

export default Router;