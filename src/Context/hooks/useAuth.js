import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

export function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@BLOCKBUSTER:token");

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setIsLoading(false);
  }, []);

  async function handleLogin({ email, password }) {
    const {
      data: { token },
    } = await api.post("/singin", {
      email,
      password,
    });

    if (!token) return;

    localStorage.setItem("@BLOCKBUSTER:token", JSON.stringify(token));
    api.defaults.headers.Authorization = `Bearer ${token}`;

    setAuthenticated(true);

    navigate("/home");
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem("@BLOCKBUSTER:token");
    api.defaults.headers.Authorization = undefined;
    navigate("/singin");
  }

  return [isLoading, authenticated, handleLogin, handleLogout];
}
