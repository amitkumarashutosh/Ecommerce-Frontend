import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Protected = ({ children }) => {
  const { currentUser } = useSelector((state) => state.auth);
  console.log("protected route");
  if (!currentUser) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

export default Protected;
