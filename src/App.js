import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoute from "./page/public/PublicRoute";
import AdminRouter from "./page/admin/AdminRouter";
import AuthAdminGuard, { AuthGuard } from "./_helpers/AuthGuard";
import UserRouter from "./page/user/UserRouter";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<PublicRoute />} />
          <Route path="/*" element={<PublicRoute />} />
          <Route
            path="/admin/*"
            element={
              <AuthAdminGuard>
                <AdminRouter />
              </AuthAdminGuard>
            }
          />
          <Route path="/user/*" element={
            <AuthGuard>
              <UserRouter/>
            </AuthGuard>
          }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
