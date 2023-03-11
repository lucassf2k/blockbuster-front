import { ASSETS } from '../../assets';

import './styles.css';

export function Welcome() {
	return (
		<>
			<header className="header_welcome">
				<h2>
					<img src={ASSETS.logoIcon} alt="Logo escriot Block Buster" />
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

			<main className="section_main">
				<section className="section_main--presentation">
					<h1>
            Filmes, séries e muito
            mais. Tudo em um só
            lugar!
					</h1>

					<div className="section_main--screens">
						<div>
							<img src={ASSETS.screenMobileIcon} alt="Ícone quadrado com o celular no meio" />
							<img src={ASSETS.screenNotebookIcon} alt="Ícone quadrado com o notebook no meio" />
							<img src={ASSETS.screenTvIcon} alt="Ícone quadrado com o TV no meio" />
						</div>
						<p>
              Assista o que quiser, <br />
              aonde quiser.
						</p>
					</div>
				</section>

				<section className="section_main--slides">
					<div className="section_main--carts">
						<div className="section_main--cart">
							<p>TEMPORADA 1 | 10 EPISÓDIOS</p>
							<h3>The Last of Us</h3>
							<p>
                The Last of Us é uma série distópica da HBO baseada na franquia de jogos de videogame de mesmo nome criada por Neil Druckmann. O drama narra um futuro pandêmico que foi devastador para humanidade, deixando os seres humanos à beira da extinção. O vírus transforma pessoas em canibais e se espalha rapidamente com uma simples mordida.
							</p>
						</div>

						<div className="section_main--cart">
							<p>TEMPORADA 1 | 10 EPISÓDIOS</p>
							<h3>House of the Dragon</h3>
							<p>
                Os apoiadores de Aegon Targaryen entram em conflito com os adeptos de sua meia-irmã, Rhaenyra, pelo trono de Viserys I, seu falecido pai, iniciando uma guerra civil cerca de 200 anos antes dos eventos retratados em "Game of Thrones".
							</p>
						</div>

						<div className="section_main--cart">
							<p></p>
							<h3>Avatar</h3>
							<p>
                Os apoiadores de Aegon Targaryen entram em conflito com os adeptos de sua meia-irmã, Rhaenyra, pelo trono de Viserys I, seu falecido pai, iniciando uma guerra civil cerca de 200 anos antes dos eventos retratados em "Game of Thrones".
							</p>
						</div>

					</div>
				</section>
			</main>
		</>
	);
}
