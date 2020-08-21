import React from 'react'
import "./SideBar.css"
import { Link, withRouter } from "react-router-dom";
import { HomeRounded, StorefrontRounded, CategoryRounded, PersonRounded, NotificationsRounded, LocalMallRounded, StoreRounded } from "@material-ui/icons";

const currentTab = (history, path) => {
    if (history.location.pathname === path) {
        return "sidebar-item sidebar-item-active"
    } else {
        return "sidebar-item"
    }
}

const SideBar = ({history}) => {
    return (
        <ul className="sidebar">
            <li >
                <Link to="/dashboard" className={currentTab(history, "/dashboard")}>
                    <HomeRounded />&nbsp; Home
                </Link>
            </li>
            <li>
                <Link to="/products" className={currentTab(history, "/products")}>
                    <StorefrontRounded />&nbsp; Products
                </Link>
            </li>
            <li >
                <Link to="/categories" className={currentTab(history, "/categories")}>
                    <CategoryRounded />&nbsp; Categories
                </Link>
            </li>
            <li >
                <Link to="/orders" className={currentTab(history, "/orders")}>
                    <LocalMallRounded />&nbsp; Orders
                </Link>
            </li>
            <li >
                <Link to="/notification" className={currentTab(history, "/notification")}>
                    <NotificationsRounded />&nbsp; Notification
                </Link>
            </li>
            <li >
                <Link to="/store" className={currentTab(history, "/store")}>
                    <StoreRounded />&nbsp; Store
                </Link>
            </li>
            <li >
                <Link to="/users" className={currentTab(history, "/users")}>
                    <PersonRounded />&nbsp; Users
                </Link>
            </li>
        </ul>
    )
}

export default withRouter(SideBar)
