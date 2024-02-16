import { FC } from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "@config/jwt";

interface IProtectedProps {
  element: FC;
}

const ProtectedRoute = (props: IProtectedProps) => {
  const token = getToken();
  return token ? <props.element /> : <Navigate to="/" />;
};

export default ProtectedRoute;
