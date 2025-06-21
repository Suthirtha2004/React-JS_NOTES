import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { AppLayout } from "./Components/Layout/AppLayout";

const App = () => {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <AppLayout />,
      children : [
        {
          path : '/',
          element : <Home/>,
        },
        {
          path : "/about",
          element : <About/>
        }
      ]

    }
  ]
    
  );
  return <RouterProvider router={router} />;
};

// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Home />
//     },
//     {
//       path: "/About",
//       element: <About />
//     },
//   ]);
//   return <RouterProvider router={router} />;

// createRoutesFromElements(
//         <Route>
//           <Route path="/" element={<Home/>}/>
//           <Route path="/about" element={<About/>}/>
//         </Route>
//     ) Old method using React Helper function

export default App;