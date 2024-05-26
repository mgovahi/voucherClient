import React, { useEffect, useState } from "react";
import { useAuth, hasAuthParams } from "react-oidc-context";
import authConfig from "app/configs/oidc";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "app/store/userSlice";
const AuthGuard = (props) => {
  const auth = useAuth();
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);
  const [callUserToken, { data, isLoading, isFetching }] =
    useGetUserTokenMutation();
  useEffect(() => {
    if (
      !hasAuthParams() &&
      !auth.isAuthenticated &&
      !auth.activeNavigator &&
      !auth.isLoading
    ) {
      auth.signinRedirect();
    }
    auth.events.addAccessTokenExpiring(() => {
      //auth.signinSilent();
      auth.signinRedirect();
    });
  }, [
    auth.isAuthenticated,
    auth.activeNavigator,
    auth.isLoading,
    auth.signinRedirect,
    auth.events,
    auth.signinSilent,
    dispatch,
  ]);

  if (auth.activeNavigator || auth.isLoading) {
    return (
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100vh",
          left: 0,
          right: 0,
          top: 0,
          margin: "auto",
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          direction: "rtl",
          color: "#eee",
        }}
      >
        لطفا منتظر بمانید...
      </div>
    );
  }

  if (auth.isAuthenticated) {
    // if (!userData.data && !data && !isLoading) {
    //   callUserToken();
    // }
    // if (!userData.data && data) {
    //   dispatch(setUser({ data: data.result }));
    // }

    if (auth.user && !userData.data) {
      dispatch(setUser({ data: { ...auth.user } }));
    }
    return <>{props.children}</>;
  }

  return <></>;
};

export default AuthGuard;
