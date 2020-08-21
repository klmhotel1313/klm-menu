import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import SearchComponent from './Components/SearchComponent.js';
import MainComponent from './Components/MainComponent.js';
import Cart from './Components/Cart.jsx';




const routes = [
{
    path: "/",
    exact: true,
    main: () => <MainComponent/>
},
{
  path: "/klm-menu",
  exact: true,
  main: () => <MainComponent/>
},
{
  path: "/search",
  exact: true,
  main: () => <SearchComponent/>
},
{
  path: "/cart",
  exact: true,
  main: () => <Cart/>
}
];
const routing=routes.map((route,index)=>{
  return <Route key={index} exact={route.exact} path={route.path}>{route.path==="/"?<Redirect to="/klm-menu"/>:route.main}</Route>})

    function Routes(){
      return(
        <div>
          <Switch>
            {routing}
          </Switch>
        </div>
      )
    }

    export default Routes;
