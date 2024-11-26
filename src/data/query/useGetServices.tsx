import customAxios from "@/api";
import { useQuery } from "@tanstack/react-query";

const Q_KEY = ["our-services"];

export const useGetServices = () => {
  const q = useQuery({
    queryKey: Q_KEY,
    queryFn: async () => {
      const res = await customAxios("/services/sub");
      const rawData = res.data.data;
      return rawData.reduce((acc: any, curr: any) => {
        const key = curr.service.name;
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(curr);
        return acc;
      }, {});
    },
  });

  return q;
};
