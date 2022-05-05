import * as React from 'react';

import { Redirect, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
let navigate = useNavigate();


const ProtectedRoute = ({ path, component: Component, permission, render, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props: any) => {
          const hasAuth = true
        if (!hasAuth)
        {
            navigate('/user/login')
        }
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;