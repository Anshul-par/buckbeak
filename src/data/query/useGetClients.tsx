import customAxios from "@/api";
import { useQuery } from "@tanstack/react-query";

const Q_KEY = ["clients"];

export const useGetClients = () => {
  const q = useQuery({
    queryKey: Q_KEY,
    queryFn: async () => {
      const res = await customAxios("/clients");
      return res.data;
    },
  });

  return q;
};
