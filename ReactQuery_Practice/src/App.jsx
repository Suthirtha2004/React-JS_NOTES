import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { MainLayout } from "./Components/Layout/MainLayout"
import { Home } from "./Pages/Home"
import { FetchOld } from "./Pages/FetchOld"
import { FetchRQ } from "./Pages/FetchRQ"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { FetchInd } from "./Pages/FetchInd"

//Create a router
const router = createBrowserRouter([
  {
    path : "/",
    element : <MainLayout/>,
    children :[
      {
          path : "/",
          element : <Home/>
      },
      {
        path : "/trad",
        element : <FetchOld/>
      },
      {
        path : "/rq",
        element : <FetchRQ/>
      },{
        path : "/rq/:id",
        element : <FetchInd/>
      },
  ],
  },
])

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
};

export default App
