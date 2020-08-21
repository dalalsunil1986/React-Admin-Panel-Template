import React from 'react'
import { BrowserRouter, Switch,Route } from "react-router-dom";

// routes
import SignInPage from "../auth/SignInPage"
import Dashboard from "../pages/Dashboard"
import Products from "../pages/Products"
import Categories from "../pages/Categories"
import Orders from "../pages/Orders"
import Notification from "../pages/Notification"
import Store from "../pages/Store"
import Users from "../pages/Users"

// error routes
import Forbidden403 from "../pages/errors/Forbidden403"
import NotFound404 from "../pages/errors/NotFound404"
import UnAuthorized401 from "../pages/errors/UnAuthorized401"

// routes

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={SignInPage} exact />
                <Route path="/signin" component={SignInPage} exact />
                <Route path="/dashboard" component={Dashboard} exact />
                <Route path="/products" component={Products} exact />
                <Route path="/categories" component={Categories} exact />
                <Route path="/orders" component={Orders} exact />
                <Route path="/notification" component={Notification} exact />
                <Route path="/store" component={Store} exact />
                <Route path="/users" component={Users} exact />

                <Route path="/forbidden" component={Forbidden403} exact />
                <Route path="/notfound" component={NotFound404} exact />
                <Route path="/unauthorized" component={UnAuthorized401} exact />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
