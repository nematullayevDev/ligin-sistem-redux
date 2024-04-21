import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { Login } from "./page/Login";
import { Register } from "./page/Register";
import { ErorPage } from "./page/ErorPage";
import { Home } from "./page/Home";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const token = useSelector((state) => state.token.value);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!token && location.pathname != "/register") {
      navigate("/login");
    }
  }, [navigate, token]);

  function ProtectedRoute({
    children,
    isAuthenticated,
    redirectTo = "/login",
  }) {
    if (!isAuthenticated) {
      navigate(redirectTo);
    }
    return children;
  }

  return (
    <section className="min-h-screen dark:bg-black pt-2">
      <div>
        <Routes>
          {/* Public route */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="*" element={<ErorPage />} />
          {/* Protected route */}
          <Route
            path="/"
            element={
              <ProtectedRoute isAuthenticated={token ? true : false}>
                <Home></Home>
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </div>
    </section>
  );
}

export default App;
