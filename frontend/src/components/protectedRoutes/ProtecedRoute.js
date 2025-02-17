import { Navigate ,Outlet} from "react-router-dom";
import { useSelector } from "react-redux";
import { useState,useEffect, useContext, } from "react";
import useAuth from "../../hooks/api/use-auth";
import { useQueryClient } from "@tanstack/react-query";
import AuthContext from "../../context/auth-provider";

const ProtectedRoute = ({ element , requiredRole }) => {
    const queryClient = useQueryClient();

    const { data } = useContext(AuthContext);

    const cachedUsers = queryClient.getQueryData(["authUser"]);
    const storedRole = localStorage.getItem("role");

    console.log(`query from data`,storedRole)

    // const token = useSelector((state) => state);
    // const userRole = cachedUsers.role;

    console.log('final', requiredRole)
    // console.log('userRole', userRole)


    // const { auth } = useAuth();

    // console.log('joke',auth)
    // const location = useLocation();

    // return (
    //     auth?.roles?.find(role => allowedRoles?.includes(role))
    //         ? <Outlet />
    //         : auth?.user
    //             ? <Navigate to="/not-authorized" />
    //             : <Navigate to="/dashboard"  />
    // );
//      const { isAuthenticated } = useSelector((state) => state.auth);
//   const user = useSelector((state) => state)
//   const [isReady, setIsReady] = useState(false); // To track if the state is ready

//   useEffect(() => {
//     if (isAuthenticated !== null) {
//       setIsReady(true); // Only proceed after the auth state is available
//     }
//   }, [isAuthenticated]);

//   console.log('Working FINE')

//   if (!isReady) {
//     return null; // Render nothing until the state is ready
//   }


//   console.log('userrrr Role', user)

//   // If the user is not authenticated, redirect to the login page
//   if (!isAuthenticated) {
//     return <Navigate to="/dashboard" />;
//   }

  // If the user is authenticated but does not have the required role, redirect to home
  if (storedRole && storedRole !== requiredRole) {
    return <Navigate to="/" />;
  }

            
  // If the user is authenticated and meets the role requirement, render the component
     return element;
};

export default ProtectedRoute;
