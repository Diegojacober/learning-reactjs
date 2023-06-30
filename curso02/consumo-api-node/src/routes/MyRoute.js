import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MyRoute({ component: Component, isClosed, ...rest }) {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    if (isClosed && !isLoggedIn) {
        return (
            <Redirect
                to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
            />
        );
    }

    return <Route {...rest} component={Component}/>;
};

