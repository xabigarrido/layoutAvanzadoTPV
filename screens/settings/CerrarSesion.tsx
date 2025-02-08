import { useEffect } from "react";
import { useAuth } from "../../Context/AuthContext";
export default CerrarSesion = () => {
  const { cerrarSesion } = useAuth();
  useEffect(() => {
    cerrarSesion();
  });
  return null;
};
