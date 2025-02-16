import { useQuery,useQueryClient } from "@tanstack/react-query";
import {getCurrentUserQueryFn} from "../../lib/api";
import { useEffect } from "react";

const useAuth = () => {
  const queryClient = useQueryClient();
  
  console.log("QueryClient:", queryClient);
  const query = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      console.log("Fetching current user..."); // Debugging: Check when this runs
      return await getCurrentUserQueryFn();
    },
    
    staleTime: 0,
    retry: 2,
    // onSuccess: (data) => {
    //   queryClient.setQueryData(["authUser"], data); // Force store data
    //   console.log("Data stored manually:", data);
    // },
    // // onSuccess: (data) => {
    // //     dispatch(setToken(data.accessToken)); // Store token in Redux
    // // },
    // onError: (error) => {
    //   console.error("Error fetching user:", error); // Debugging: Check for errors
    // },
  });


  // useEffect(() => {
  //   if (query.data) console.log("🟢 Data updated:", query.data);
  //   if (query.error) console.log("🔴 Error:", query.error);
  // }, [query.data, query.error]);
  return query;
};

export default useAuth;