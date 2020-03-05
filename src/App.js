import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate";
import { routesHome } from "./routes";
/* import { routesAdmin } from "./routes"; */

const showMenusHome = routes => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => (
      <HomeTemplate
        path={item.path}
        exact={item.exact}
        Component={item.component}
        key={index}
      />
    ));
  }
};

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          {showMenusHome(routesHome)}
          {/*           {showMenusAdmin(routesAdmin)}
          <Route path="/admin" exact={true} component={Admin} />
          <Route path="" exact={false} component={PageNotFound} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
