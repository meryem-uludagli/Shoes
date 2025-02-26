import { FC } from "react";
import { useParams } from "react-router-dom";
useShose;
import Loader from "../../components/loader";
import Error from "../../components/error";
import Head from "../../components/detail-page/head";
import Color from "../../components/detail-page/color";
import Size from "../../components/detail-page/size";
import Foot from "../../components/detail-page/foot";
import Images from "../../components/detail-page/images";
import { useShose } from "../../hooks/useShoes";

const Detail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { shoe } = useShose();
  const shoeQuery = shoe(id!);

  if (shoeQuery.isLoading) return <Loader />;
  if (shoeQuery.isError)
    return (
      <Error message={shoeQuery.error.message} refetch={shoeQuery.refetch} />
    );

  return (
    <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-4">
      <div className="xl:col-span-2">
        <Images item={shoeQuery.data!} />
      </div>

      <div className="flex flex-col gap-8">
        <Head item={shoeQuery.data!} />
        <Color item={shoeQuery.data!} />
        <Size item={shoeQuery.data!} />
        <Foot item={shoeQuery.data!} />
      </div>
    </div>
  );
};

export default Detail;
