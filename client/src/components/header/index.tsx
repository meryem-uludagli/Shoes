import { FC } from "react";
import useUser from "../../hooks/useUser";
import useAuth from "../../hooks/useAuth";

const Header: FC = () => {
  const { user, isLoading, error } = useUser();
  const { logout } = useAuth();

  return (
    <div>
      Header
      <h1>{user?.firstName}</h1>
      <h1>{user?.lastName}</h1>
      <button onClick={() => logout.mutate()}>Cikis yap</button>
    </div>
  );
};

export default Header;
