import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home"
import Playlist from "../pages/Playlist";
import Error from "../pages/Error";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
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