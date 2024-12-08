import { useMutation } from "react-query";
import { getServerData } from "../services/appServices";

export function useSignup() {
    const {
      mutate: getData,
      isLoading
    } = useMutation({ mutationFn: () => getServerData() });
    return { getData, isLoading };
  }