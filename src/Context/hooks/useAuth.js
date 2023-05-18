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
    const isAdmin = localStorage.getItem("@BLOCKBUSTER:admin");

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

    if (isWordAdminInEmail) {
      setIsAdmin(true);
      localStorage.setItem(
        "@BLOCKBUSTER:admin",
        JSON.stringify(isWordAdminInEmail)
      );
    }

    try {
      const { headers } = await api.post("/login", {
        email,
        senha: password,
      });

      const authorization = headers.authorization;

      const [, token] = authorization.split(" ");

      if (!token) return;

      localStorage.setItem("@BLOCKBUSTER:token", JSON.stringify(token));
      localStorage.setItem("@BLOCKBUSTER:email", email);
      api.defaults.headers.Authorization = `Bearer ${token}`;

      setAuthenticated(true);

      navigate("/home");
    } catch (err) {
      alert("E-mail ou senha incorretas");
      console.log(err);
    }
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem("@BLOCKBUSTER:token");
    localStorage.removeItem("@BLOCKBUSTER:admin");
    localStorage.removeItem("@BLOCKBUSTER:email");
    api.defaults.headers.Authorization = undefined;
    navigate("/signin");
  }

  return { isLoading, authenticated, isAdmin, handleLogin, handleLogout };
}
