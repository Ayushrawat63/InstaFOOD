import React, { StrictMode, Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/FunctionalComponents/Header";
import BodyContent from "./Components/FunctionalComponents/BodyContent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUs from "./Components/FunctionalComponents/ContactUs";
import Error from "./Components/FunctionalComponents/Error";
import RestaurantMenu from "./Components/FunctionalComponents/RestaurantMenu";
import useOnlineStatus from "./Hooks/useOnlineStatus";
import UserContext from "./common/UserContext";
import {Provider}  from "react-redux";
import appStore from "./Redux/appStore";
import Cart from "./Components/FunctionalComponents/Cart";
import Footer from "./Components/FunctionalComponents/Footer";
import DishSection from "./Components/FunctionalComponents/DishSection";

// lazy loading, chunking , dynamic import ,Dynamic loading, code splitting , on demand loading
const Grocery = lazy(() => import("./Components/FunctionalComponents/Grocery"));
const About = lazy(() => import("./Components/ClassComponents/About"));

const AppLayout = () => {
  const [name,setName]=useState();

  // Api call
  useEffect(()=>{
    const data={
      val:"Ayush rawat"
    }
    setName(data.val)
  },[])

  const onlineStatus = useOnlineStatus();
  return !onlineStatus ? (
    <h1>Looks like your internet is off!!</h1>
  ) : (
    <>
    <Provider store={appStore}>
      <UserContext.Provider value={{userName:name,setName}}>
      <Header />
      <Outlet />
      <Footer/>
      </UserContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <BodyContent/> ,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/dishSection/:dishId",
        element: <DishSection />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            {" "}
            <Grocery />{" "}
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
