# THis food App built from chapter 01 to 07

### built for reviosn of concepts

- Create FoodStreet component
- Build Header, Body, Footer components in FoodStreet component
- Body >> search, button, Card component
- Create shimmer component
- route
  - npm i react-router-dom
  - crateBrowserRouter,config array, RouterProvider, Outlet
  - Link
  - useParams, useRouterErrors

## Steps

1. add README.md and .gitignore files
2. run git init to initialize folder with git
3. run npm init -y to install npm and package.json file
   - add script ---
   - "start": "parcel index.html", --- npm start
   - "build": "parcel build index.html", ---- npm run build >> gives dist and .parcel-cache folders.
4. run npm install -D parcel for installing parcel bundler. it create node_modules and package-lock.json files
5. run npm i react and npm i react-dom
6. create index.html file with div#root
7. create app.js, app.css files also and link all files.
8. import React and ReactDOM from "path"
9. Create a FoodStreet functional component in App.js file
10. create root using ReactDOM.createRoot()
11. root.render(<FoodStreet />);
12. Create RestaurantCard with config data. later will use API.
13. Put Card in Body component and pass data using props.
14. Create search bar and button in Body .
15. create search state , onChange event get value using e.target.value
16. onClick , take searchText and filter in allRestaurant
17. setState with filtered data and render
18. now use useEffect to call API

### react-router-dom

#### Static route

1. In App.js import createBrowserRouter
2. create AppRoute = createBrowserRouter([{},{}])
3. create {path:"/",element:<FoodStreet />} in AppRoute
4. import RouterProvider and pass in router={AppRoute} in root.render
5. create About , Contact page component
6. In Header.js use {Link} as anchor tag. <Link to="/about>About<Link/>
7. create children in AppRoute and make objects for About, Contact, Body
8. To make SPA or change only Body section and keep Header and Footer constact display use <Outlet />
9. children components go into Outlet component
10. Use {useRouteError} hook for getting error info and display them on page.

#### Dynamic route

### Path flows from : App.js >> Body.js >>> RestaurantMenu.js

1. get menu url from network after clicking restaurant
2. create path, element in App.js in children
3. mention path in App.js "/restaurant/:resId"
4. in Body.js put Link to RestaurantCard.js with "to" as path is App.js with id taking from useParams
5. In Body.js pass id to Link, which will pass to RestaurantMenu.js
6. Create RestaurantMenu.js
7. get data from url using useEffect and useParams
8. set State and retrun data
