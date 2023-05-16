import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

export function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@BLOCKBUSTER:token");
    const isAdmin = localStorage.getItem("@BLOCAKBUSTER:admin");

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    if (Boolean(isAdmin)) {
      setIsAdmin(true);
    }

    setIsLoading(false);
  }, []);

  async function handleLogin({ email, password }) {
    const splitedEmail = email.split("@");
    const isWordAdminInEmail = splitedEmail.includes("admin");

    console.log(splitedEmail);
    console.log(isWordAdminInEmail);
    if (isWordAdminInEmail) {
      setIsAdmin(true);
    }

    const { headers } = await api.post("/login", {
      email,
      senha: password,
    });

    const authorization = headers.authorization;

    const [, token] = authorization.split(" ");

    if (!token) return;

    localStorage.setItem("@BLOCKBUSTER:token", JSON.stringify(token));
    localStorage.setItem(
      "@BLOCKBUSTER:admin",
      JSON.stringify(isWordAdminInEmail)
    );
    api.defaults.headers.Authorization = `Bearer ${token}`;

    setAuthenticated(true);

    navigate("/home");
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem("@BLOCKBUSTER:token");
    localStorage.removeItem("@BLOCKBUSTER:admin");
    api.defaults.headers.Authorization = undefined;
    navigate("/signin");
  }

  return { isLoading, authenticated, isAdmin, handleLogin, handleLogout };
}
