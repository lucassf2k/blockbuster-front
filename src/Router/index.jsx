import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Welcome } from "../pages/Welcome";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { NotFound } from "../pages/NotFound";
import { MyList } from "../pages/MyList";
import { Cart } from "../pages/Cart";
import { Home } from "../pages/Home";
import { Minhaconta } from "../pages/Minhaconta";

import { Dashboard } from "../pages/admins/Dashboard";

import { Loading } from "../components/Loading";

import { AuthProvider, Context } from "../Context/AuthContext";

function PrivateRoute({ children }) {
  const { isLoading, authenticated } = useContext(Context);

  if (isLoading) {
    return <Loading />;
  }

  if (!authenticated) {
    return <Navigate to="/signin" replace />;
  }

  return children;
}

function AdminRoute({ children }) {
  const { isLoading, isAdmin, authenticated } = useContext(Context);

  console.log("Router", isAdmin);

  if (isLoading) {
    return <Loading />;
  }

  console.log({ isAdmin, authenticated });

  if (!isAdmin && authenticated) {
    return <Navigate to="/home" replace />;
  }

  if (!isAdmin && !authenticated) {
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
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/account"
            element={
              <PrivateRoute>
                <Minhaconta />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              <AdminRoute>
                <Dashboard />
              </AdminRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
