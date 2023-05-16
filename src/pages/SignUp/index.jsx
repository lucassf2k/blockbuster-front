import { useState } from "react";
import { api } from "../../services/api";

import "./styles.css";
import { ASSETS } from "../../assets";
import { RegisterInput } from "../../components/RegisterInput";

import { useNavigate } from "react-router-dom";

export function SignUp() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();

    if(!email || !password){
      alert("Campos obrigatórios")
      return;
    }

    if(!email.includes("@")){
      alert("E-mail inválido")
      return;
    }

    if(password.length < 6){
      alert("Senha deve ter no minímo 6 caracteres")
      return;
    }

    const nascimento = `${day}/${month}/${year}`;

    await api.post("user", {
      nome,
      email,
      senha: password,
      nascimento
    })

    navigate("/signin");
  }

  return(
    <div className="body-like">
      <div className="main-register">
        
        <div className="left-register">
          <img src={ASSETS.logoIcon} alt="logo" />
        </div>
          
        <div className="right-register">
          <div className="card-register">
            <h3>Registrar</h3>
            <RegisterInput
              id="nome"
              label="Nome Completo"
              type="text"
              placeholder="Insira seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <div id="birthday">
              <RegisterInput
                id="day"
                label="Dia"
                type="text"
                placeholder="DD"
                value={day}
                onChange={(e) => setDay(e.target.value)}
              />
              <RegisterInput
                id="month"
                label="Mês"
                type="text"
                placeholder="MM"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              />
              <RegisterInput
                id="year"
                label="Ano"
                type="text"
                placeholder="YYYY"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
            <RegisterInput
              id="email"
              label="E-mail"
              type="email"
              placeholder="example@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <RegisterInput
              id="password"
              label="Senha"
              type="password"
              placeholder="*******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button class="btn-register gray" type="submit" onClick={handleSignUp}>Criar Conta</button>
          </div>
        </div>

      </div>
    </div>
  );
}
