import { Link } from 'react-router-dom';

import { ASSETS } from '../../assets';

import './styles.css';

export function NotFound() {
	return (
		<main className="container-not-found">
			<h1>
				<p>
					<strong>Page</strong>
          not Found
				</p>
			</h1>

			<div className="not-found--footer">
				<span>Volte para tela inical</span>
				<Link to="/">
					<img src={ASSETS.logoIcon} alt="Logomarca 'blockbuster'" />
				</Link>
			</div>

		</main>
	);
}
