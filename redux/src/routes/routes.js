import MainPage from "../Pages/MainPage"
import CreatePage from "../Pages/CreatePage"

const router = [
    {
        element: <MainPage/>,
        path : "/"
    },
    {
        element: <CreatePage/>,
        path : "/create"
    }
]

export default router