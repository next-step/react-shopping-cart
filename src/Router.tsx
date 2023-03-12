import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import { ROUTE } from "./constants/route";
import List from "./routes/List";
import Detail from "./routes/Detail";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTE.HOME} exact>
          <Redirect to={ROUTE.PRODUCTS} />
        </Route>
        <Route path={ROUTE.PRODUCTS} exact>
          <Layout>
            <List></List>
          </Layout>
        </Route>
        <Route path={`${ROUTE.PRODUCTS}/:id`}>
          <Layout>
            <Detail></Detail>
          </Layout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
