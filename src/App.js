import { Route, Routes } from "react-router";
import { AllRoutes, pageRoutes } from "./routes/PageRoutes";
import PrivateRoute from "./layout/PrivateRoute";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import './App.css';
import PageNotFound from "./layout/PageNotFound";
import { useEffect, useState } from "react";
import { onMessageListener, requestForToken } from "./auth/Firebase";
import { useDispatch } from "react-redux";
import { saveFcmToken } from "./redux/reducers/authReducer";
import Home from "./pages/Home";

function App() {
  // const [fcmToken, setFcmToken] = useState(null);
  // const dispatch = useDispatch();
  // const [notification, setNotification] = useState(null);

  // useEffect(() => {
  //   // Register service worker
  //   if ("serviceWorker" in navigator) {
  //     navigator?.serviceWorker?.register(`${process.env.PUBLIC_URL}/firebase-messaging-sw.js`)
  //       .then((registration) => {
  //         console.log(
  //           "Service Worker registered with scope:",
  //           registration?.scope
  //         );
  //       })
  //       .catch((error) => {
  //         console.error("Service Worker registration failed:", error);
  //       });
  //   }
  //   requestForToken(setFcmToken);
  //   if (fcmToken) dispatch(saveFcmToken(fcmToken));
  // }, []);

  // useEffect(() => {
  //   // Listen for foreground messages
  //   onMessageListener()
  //     .then((payload) => {
  //       setNotification(payload);
  //       console.log("Received foreground message:", payload);
  //     })
  //     .catch((error) =>
  //       console.error("Error receiving foreground message: ", error)
  //     );
  // }, []);

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
        <Route path={pageRoutes.login} exact element={<Home />} />
        <Route path={pageRoutes.signup} exact element={<SignUp />} />
        <Route path={pageRoutes.forgot_password} exact element={<ForgotPassword />} />
        <Route path={pageRoutes.page_not_found} exact element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;