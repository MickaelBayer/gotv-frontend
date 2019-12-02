import { RouteProps, Redirect, Route } from "react-router";
import React from 'react';
import { IUser } from "../models/user.model";

export interface ProtectedRouteProps extends RouteProps {
  isAuthenticated: boolean;
  isAllowed: boolean;
  restrictedPath: string;
  authenticationPath: string;
  user: IUser;
}

type Props = ProtectedRouteProps & { expectedRole: number }

export const ProtectedRoute: React.FunctionComponent<Props> = (props) => {
  let redirectPath = '';

  if (!props.isAuthenticated || props.expectedRole !== props.user.usr_role.id) {
    redirectPath = props.authenticationPath;
  }
  if (props.isAuthenticated && !props.isAllowed) {
    redirectPath = props.restrictedPath;
  }

  if (redirectPath) {
    const renderComponent = () => <Redirect to={{ pathname: redirectPath }} />;
    return <Route {...props} component={renderComponent} render={undefined} />;
  } else {
    return <Route {...props} />;
  }
}

export default ProtectedRoute;