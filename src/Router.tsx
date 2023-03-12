import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import { ROUTE } from "./constants/route";
import List from "./routes/List";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTE.HOME} exact>
          <Redirect to={ROUTE.LIST} />
        </Route>
        <Route path={ROUTE.LIST}>
          <Layout>
            <List></List>
          </Layout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
