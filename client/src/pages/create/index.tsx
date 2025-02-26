import { FC } from "react";
import Form from "../../components/form";
import { ShoeData } from "../../types";
import { useNavigate } from "react-router-dom";
import { useShose } from "../../hooks/useShoes";

const Create: FC = () => {
  const navigate = useNavigate();
  const { create } = useShose();

  const handleAction = (data: ShoeData) => {
    create.mutate(data);
    navigate("/admin");
  };

  return (
    <div className="max-w-[1000px] mx-auto">
      <h1 className="text-2xl md:text-3xl font-semibold mb-5">Ürün Ekle</h1>

      <Form handleAction={handleAction} />
    </div>
  );
};

export default Create;
