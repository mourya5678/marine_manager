import { Route, Routes } from "react-router";
import { AllRoutes, pageRoutes } from "./routes/PageRoutes";
import PrivateRoute from "./layout/PrivateRoute";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <div>
      <Routes>
        {
          AllRoutes?.map((item) => {
            return (
              <Route
                path={item.path}
                exact
                element={<PrivateRoute>{item?.element}</PrivateRoute>}
              />
            )
          })
        }
        <Route path={pageRoutes.login} exact element={<Login />} />
        <Route path={pageRoutes.signup} exact element={<SignUp />} />
        <Route path={pageRoutes.forgot_password} exact element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;