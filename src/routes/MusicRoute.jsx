import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home"
import Playlist from "../pages/Playlist";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/playlist',
        element: <Playlist />
    }
])

export default Router;