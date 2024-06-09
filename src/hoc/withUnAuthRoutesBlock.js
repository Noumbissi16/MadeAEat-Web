import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function withUnAuthRoutesBlock(Component) {
  return function UnProtectedComponent() {
    const navigate = useNavigate();
    const connected = useSelector((state) => state.AUTH.connected);
    useEffect(() => {
      if (connected === true) {
        navigate("/");
      }
    });

    return <Component />;
  };
}
