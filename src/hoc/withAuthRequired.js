import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function withAuthRequired(Component) {
  return function ProtectedComponent() {
    const navigate = useNavigate();
    const connected = true; //useSelector((state) => state.AUTH.connected);
    useEffect(() => {
      if (connected === false) {
        navigate("/connexion");
      }
    });

    return connected && <Component />;
  };
}
