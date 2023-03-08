import logoImg from '../../assets/logo.svg';

import './styles.css';

export function Welcome() {
	return (
		<header className="header_welcome">
			<h2>
				<img src={logoImg} alt="Logo escriot Block Buster" />
			</h2>
			<div className="header_login--actions">
				<button className="button_secundary">
          Entrar
				</button>
				<button className="button_primary">
          Criar conta
				</button>
			</div>
		</header>
	);
}
