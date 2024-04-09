import { Navigate } from "react-router-dom";
import { accountService } from "../_services/account.service";


export default function AuthAdminGuard({ children }) {
  if (!accountService.isLogged()) {
    return <Navigate to="/adminlogin" />;
  }
  return children;
}

export function AuthGuard({ children }) {
  if (!accountService.isLogged()) {
    return <Navigate to="/login" />;
  }
  return children;
}
