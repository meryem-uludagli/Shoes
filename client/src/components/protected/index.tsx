import { FC } from "react";
import useUser from "../../hooks/useUser";
import Layout from "../layout";
import { Navigate } from "react-router-dom";
import Loader from "../loader";

interface Prop {
  allowedRole?: "user" | "admin";
}

const Protected: FC<Prop> = ({ allowedRole }) => {
  const { user, isLoading, isAuthenticated } = useUser();

  if (!isAuthenticated) return <Navigate to="/login" />;

  if (isAuthenticated && !allowedRole)
    return (
      <div>
        <Layout />
      </div>
    );

  if (isLoading) return <Loader />;

  if (user?.role === allowedRole)
    return (
      <div>
        <Layout />
      </div>
    );

  return <Navigate to="/" />;
};

export default Protected;
