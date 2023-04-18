import { ASSETS } from '../../assets';
import { Input } from '../../components/Input';

import './styles.css';

export function Login() {
	return (
		<section className="section_login">
			<h2 className="section_login--logo">
				<img src={ASSETS.logoIcon} alt="Logo escriot Block Buster" />
			</h2>

			<main className="section_form">
				<h3>Acesse</h3>
        <Input
          id="email"
          label="E-mail"
          type="email"
          placeholder="alan-turing@exemple.com"
        />
				<Input
          id="password"
          label="Senha"
          type="password"
          placeholder="**********"
        />
				<span>Esqueci minha senha</span>

				<button type="button">
          Entrar
				</button>

				<p className="section_form-footer">
          Não possui conta?
					<a href="#">
						<strong>Clique aqui!</strong>
					</a>
				</p>
			</main>
		</section>
	);
}
