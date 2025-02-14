import { useQuery } from "@tanstack/react-query";
import {getCurrentUserQueryFn} from "../../lib/api";

const useAuth = () => {
  const query = useQuery({
    queryKey: ["authUser"],
    queryFn: getCurrentUserQueryFn,
    staleTime: 0,
    retry: 2,
    // onSuccess: (data) => {
    //     dispatch(setToken(data.accessToken)); // Store token in Redux
    // },
    // onError: () => {
    //     dispatch(logout()); // Clear token on error
    // },
  });
  return query;
};

export default useAuth;