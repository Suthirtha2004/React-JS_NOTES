import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Skills } from "./Pages/Skills";
import { AppLayout } from "./Components/Layout/AppLayout";
import { ErrorPage } from "./Pages/ErrorPage";
import { getApiData } from "./api/apiData";
import { SkillsDetails } from "./Components/Ui/SkillsDetails";
import { getSkillsData } from "./api/skillsData";
import { Contact, ContactDetails } from "./Pages/Contact";
const App = () => {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <AppLayout />,
      errorElement : <ErrorPage/>,
      children : [
        {
          path : '/',
          element : <Home/>,
        },
        {
          path : "/about",
          element : <About/>
        },
        {
          path : "/skills",
          element : <Skills />,
          loader : getApiData,
        },
        {
          path : "/skills/:skillID",
          element : <SkillsDetails/>,
          loader : getSkillsData,
        },
        {
          path : "/contact",
          element : <Contact/>,
          action : ContactDetails,

        },
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