import { ASSETS } from "../../assets";

import "./styles.css";

import { Header } from "./Header";
import { PresentationCard } from "./PresentationCard";

export function Welcome() {
  return (
    <>
      <Header />

      <main className="section_main">
        <section className="section_main--presentation">
          <h1>Filmes, séries e muito mais. Tudo em um só lugar!</h1>

          <div className="section_main--screens">
            <div>
              <img
                src={ASSETS.screenMobileIcon}
                alt="Ícone quadrado com o celular no meio"
              />
              <img
                src={ASSETS.screenNotebookIcon}
                alt="Ícone quadrado com o notebook no meio"
              />
              <img
                src={ASSETS.screenTvIcon}
                alt="Ícone quadrado com o TV no meio"
              />
            </div>
            <p>
              Assista o que quiser, <br />
              aonde quiser.
            </p>
          </div>
        </section>

        <section className="section_main--slides">
          <div className="section_main--carts">
            <PresentationCard
              title="The Batman"
              infos="2h56m"
              description="Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população."
              imageUrl={ASSETS.theBatmanImg}
            />
            <PresentationCard
              title="The House of the Dragon"
              infos="1 Temp | 10 episódios"
              description="A história apresenta a guerra civil entre a Casa Targaryen. Um período de disputas de poder entre Rhaenyra e seu meio-irmão Aegon, quando ambos acreditavam ter direito sobre o trono de ferro."
              imageUrl={ASSETS.houseOfTheDragonImg}
            />
            <PresentationCard
              title="The Last of Us"
              infos="1 Temp | 9 episódios"
              description=" The Last of Us é uma série distópica da HBO baseada na franquia de jogos de videogame de mesmo nome criada por Neil Druckmann. O drama narra um futuro pandêmico que foi devastador para humanidade, deixando os seres humanos à beira da extinção. O vírus transforma pessoas em canibais e se espalha rapidamente com uma simples mordida."
              imageUrl={ASSETS.theLastOfUsImg}
            />
          </div>
        </section>
      </main>
    </>
  );
}
