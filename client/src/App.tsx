import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Main from "./pages/main";
import Register from "./pages/register";
import Layout from "./components/layout";
import useUser from "./hooks/useUser";
import Detail from "./pages/deatil";
import Dashboard from "./pages/dashboard";

const Protected = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useUser();

  return isAuthenticated ? <> {children}</> : <Navigate to="/login" />;
};
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/"
          element={
            <Protected>
              <Layout />
            </Protected>
          }
        >
          <Route index element={<Main />} />
          <Route path="/shoe/:id" element={<Detail />} />
          <Route path="/admin" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
