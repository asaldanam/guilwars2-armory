import React, { lazy, Suspense } from "react";
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from "react-router-dom";

const VList = lazy(() => import("views/VList"));
const VDetail = lazy(() => import("views/VDetail"));

const Router = withRouter(({ location, history }: RouteComponentProps) => {
  return (
    <React.Fragment>
      <Suspense fallback={<div></div>}>
        <Switch location={location}>
          <Route path={"/users/:id"} component={VDetail} />
          <Route exact path={"/users"} component={VList} />
          <Redirect from={"/"} to={"/users"} exact />
          <Redirect to="/404" />
        </Switch>
      </Suspense>
    </React.Fragment>
  );
});

export default Router;