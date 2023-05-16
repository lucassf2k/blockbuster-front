import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Context } from "../Context/AuthContext";

import { Welcome } from "../pages/Welcome";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { NotFound } from "../pages/NotFound";
import { MyList } from "../pages/MyList";
import { Cart } from "../pages/Cart";
import { Home } from "../pages/Home";

import { AuthProvider } from "../Context/AuthContext";

function PrivateRoute({ children }) {
  const { isLoading, authenticated } = useContext(Context);

  if (isLoading) {
    <h1>Loading...</h1>;
  }

  if (!authenticated) {
    return <Navigate to="/signin" replace />;
  }

  return children;
}

export function Router() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/mylist"
            element={
              <PrivateRoute>
                <MyList />
              </PrivateRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />
          <Route path="/home" element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
