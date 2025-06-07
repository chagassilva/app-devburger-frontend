import { useUser } from "../hooks/UserContext";
import { Navigate } from "react-router-dom";
import { Spinner } from "../components/Spinner";

export function ProtectedRoute({ children }) {
  const { userInfo, loading } = useUser();

  if (loading) {
  return <Spinner />;
}

  const isUserLoggedIn = !!userInfo && Object.keys(userInfo).length > 0;

  if (!isUserLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
