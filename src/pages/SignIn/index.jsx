import { useState, useContext } from "react";

import { ASSETS } from "../../assets";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import "./styles.css";

import { api } from "../../services/api";

import { Context } from "../../Context/AuthContext";

export function SignIn() {
  const { authenticated, handleLogin } = useContext(Context);

  console.log("Login", authenticated);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      alert("Campus obrigatórios");
      return;
    }

    if (!email.includes("@")) {
      alert("E-mail inválido");
      return;
    }

    if (password.length < 6) {
      alert("Senha deve ter no miníno 6 caracteres");
      return;
    }

    handleLogin({ email, password });
  };

  return (
    <section className="section_login">
      <h2 className="section_login--logo">
        <img src={ASSETS.logoIcon} alt="Logo escriot Block Buster" />
      </h2>

      <form className="section_form">
        <h3>Acesse</h3>
        <Input
          id="email"
          label="E-mail"
          type="email"
          placeholder="alan-turing@exemple.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          id="password"
          label="Senha"
          type="password"
          placeholder="**********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span>Esqueci minha senha</span>

        <Button title="Entrar" type="submit" onClick={handleSignIn} />

        <p className="section_form-footer">
          Não possui conta?
          <a href="#">
            <strong>Clique aqui!</strong>
          </a>
        </p>
      </form>
    </section>
  );
}
