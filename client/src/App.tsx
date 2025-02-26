import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Main from "./pages/main";
import Detail from "./pages/deatil";
import Dashboard from "./pages/dashboard";
import Protected from "./components/protected";
import Create from "./pages/create";
import Edit from "./pages/edit";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Protected />}>
          <Route index element={<Main />} />
          <Route path="/shoe/:id" element={<Detail />} />
        </Route>

        <Route path="admin" element={<Protected allowedRole="admin" />}>
          <Route index element={<Dashboard />} />
          <Route path="create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
