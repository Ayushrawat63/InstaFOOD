Step1: npm init;
step2: npm install -D parcel
step3: npx parcel index.html;   <!-- This step is used to produce development build product -->
<!-- step3 can be change to npm run start or npm start by changing the package.json file  --> 
step4: npx build index.html;    <!-- This step is used to produce  producation build product -->

step5: npm i react
step6: npm i react-dom



 applayout
  - header
     -logo
     -links
  - body
     -search bar
     -resturant menu
       -resturant cards
  - footer
     -copyrights
     -licence
     -address





There a two ways to export int react 
1: export defalut  component
   import component form path

2: named export (it is used for when we want to export multiple components form a single file)
   export const component1
   export const component2
     or
    export  {component1,component2}

    import {component1} from path
     or
     import {component1,component2} for path


# React Router
  step 1 : import {createBrowserRouter} form React-router-dom;
     createBrowserRouter is used to create config for the browser i.e path for different page.
    

   step 2: import {createBrowserRouter,RouterProvider} from react-router-dom;
     RouterProvider is component provided by react-router-dom 

     

# Redux

npm @reduxjs/toolkit and react-redux
build store using configureStore
connect store and page using Provider
create slice  using createSlice
dispatch action using useDispatch
reducer function logic
selector  using useSelector

# testing by Devloper

-> install @testing-library/react
->install jest
->install some bable dependencies
->config bable
->config parcel to use the new babel config
->npx jest --init
->install jsdom
->install @babel/preset-react - to use jsx in testing
->configure the babel file to add above  configuration.
