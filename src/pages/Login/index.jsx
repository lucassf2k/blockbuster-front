import logoImg from '../../assets/logo.svg';

import './styles.css';

export function Login() {
	return (
		<section className="section_login">
			<h2 className="section_login--logo">
				<img src={logoImg} alt="Logo escriot Block Buster" />
			</h2>

			<main className="section_form">
				<h3>Acesse</h3>
				<fieldset className="section_form--field">
					<label htmlFor="#">E-mail</label>
					<input type="email" placeholder="Seu e-mail" />
				</fieldset>
				<fieldset className="section_form--field">
					<label htmlFor="#">Senha</label>
					<input type="password" placeholder="Sua senha" />
				</fieldset>
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
