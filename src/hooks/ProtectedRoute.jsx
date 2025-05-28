import { useUser } from "../hooks/UserContext";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }) {

  const { userInfo, loading } = useUser();

  if (loading) {
    return <p>Carregando...</p>; // ou um spinner bacana
  }

  //const isUserLoggedIn = userInfo && userInfo.token;
  const isUserLoggedIn = userInfo && Object.keys(userInfo).length > 0;
  

  

  if (!isUserLoggedIn) {
    return <Navigate to="/login" replace />;
  }

 
  return children;
}
