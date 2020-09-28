import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {  Menu } from "semantic-ui-react";
import LoginModal from "../LoginModal";
import RegistrationModal from "../RegistrationModal";

export default () => {
    const user = useSelector(state => state.user);

    return (
        <Menu>
            <Menu.Item name="catalog">
                <Link to="/">Catalog</Link>
            </Menu.Item>
            {user.userType === "A" &&
            <Menu.Item name="admin-panel">
                <Link to="admin-panel">Admin panel</Link>
            </Menu.Item>}
            <Menu.Menu position='right'>
                <Menu.Item name="login">
                    <LoginModal />
                </Menu.Item>
                {!user.isLoggedIn && 
                <Menu.Item name="registration">
                    <RegistrationModal />
                </Menu.Item>}
            </Menu.Menu>
        </Menu>
    );
}