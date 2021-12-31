import { useQuery } from "react-query";
import { queryKeys } from "../../../services/apiUrls";
import { getUser } from "../../../services/auth";

function useUser() {
  const result = useQuery(queryKeys.user, getUser);

  return {
    user: result.data?.data,
    isAuthenticated: !!result.data?.data,
    ...result,
  };
}

export default useUser;
