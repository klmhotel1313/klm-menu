import React from 'react';
import {Switch,Route} from 'react-router-dom';
import SearchComponent from './Components/SearchComponent.js';
import MainComponent from './Components/MainComponent.js';



const routes = [
{
    path: "/klm-menu/",
    exact: true,
    main: () => <MainComponent/>
},
{
  path: "/search",
  exact: true,
  main: () => <SearchComponent/>
}
];
const routing=routes.map((route,index)=>{
  return <Route key={index} exact={route.exact} path={route.path} component={route.main}></Route>})

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
