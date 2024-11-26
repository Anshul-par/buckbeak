import customAxios from "@/api";
import { useQuery } from "@tanstack/react-query";

const Q_KEY = ["products"];

export const useGetProducts = () => {
  const q = useQuery({
    queryKey: Q_KEY,
    queryFn: async () => {
      const res = await customAxios("/products");
      return res.data;
    },
  });

  return q;
};
