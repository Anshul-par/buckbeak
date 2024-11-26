import { Loading } from "@/components/ui/loading";
import { useGetProducts } from "@/data/query/useGetProducts";
import { Productcard } from "./Productcard";

export const Productlist = () => {
  const { data, isLoading, isError, error } = useGetProducts();

  if (isLoading)
    return (
      <div className="h-[500px] flex justify-center items-center">
        <Loading />
      </div>
    );

  if (isError) return <div>{JSON.stringify(error)}</div>;

  return (
    <div className="container">
      {data.data.map((product: any, i: number) => (
        <Productcard key={product.id} product={product} index={i} />
      ))}
    </div>
  );
};
