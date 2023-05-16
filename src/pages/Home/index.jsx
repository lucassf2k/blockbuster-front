import "./styles.css";

import { Link } from "react-router-dom";

import { SideBar } from "../../components/SideBar";
import { Wrapper } from "../../components/Wrapper";
import { Item } from "../../components/Item";

import { ASSETS } from "../../assets";

export function Home(){
    return(
        <Wrapper>
            <SideBar/>
            <section className="discover">
                <div className="search">

                    <div className="nav-bar">
                        <div className="nav-links">
                            <a href="">Filmes</a>
                            <a href="">Séries</a>
                            <a href="">Animes</a>
                        </div>
                        <div className="search-bar">
                            <input type="text" placeholder="Pesquisar"/>
                        </div>
                    </div>

                </div>

                <div className="genders">
                    <section className="collection-details">
                        <h3>Ação</h3>
                        <div className="collection-items">
                        {items.map((item) => (
                            <Item
                            key={item.id}
                            name={item.name}
                            ageGroup={item.ageGroup}
                            duration={item.duration}
                            season={item.season}
                            amountEpsodes={item.amountEpsodes}
                            imageURL={item.imageURL}
                            rating={item.rating}
                            releaseYear={item.releaseYear}
                            isSerie={item.isSerie}
                            />
                        ))}
                        </div>
                        <h3>Cómedia</h3>
                        <div className="collection-items">
                            {items.map((item) => (
                                <Item
                                key={item.id}
                                name={item.name}
                                ageGroup={item.ageGroup}
                                duration={item.duration}
                                season={item.season}
                                amountEpsodes={item.amountEpsodes}
                                imageURL={item.imageURL}
                                rating={item.rating}
                                releaseYear={item.releaseYear}
                                isSerie={item.isSerie}
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </section>
        </Wrapper>
    );
}

const items = [
    {
      id: Math.random(),
      name: 'House of The Dragon',
      ageGroup: 16,
      season: '1',
      amountEpsodes: 10,
      imageURL: ASSETS.houseOfTheDragonImg,
      rating: '8.5',
      releaseYear: '2022',
      isSerie: true,
    },
    {
      id: Math.random(),
      name: 'The Batman',
      ageGroup: 16,
      duration: '2h 56m',
      imageURL: ASSETS.theBatmanImg,
      rating: '8.5',
      releaseYear: '2022',
      isSerie: false,
    },
    {
        id: Math.random(),
        name: 'The Batman',
        ageGroup: 16,
        duration: '2h 56m',
        imageURL: ASSETS.theBatmanImg,
        rating: '8.5',
        releaseYear: '2022',
        isSerie: false,
      },
      {
        id: Math.random(),
        name: 'The Batman',
        ageGroup: 16,
        duration: '2h 56m',
        imageURL: ASSETS.theBatmanImg,
        rating: '8.5',
        releaseYear: '2022',
        isSerie: false,
      },
      {
        id: Math.random(),
        name: 'The Batman',
        ageGroup: 16,
        duration: '2h 56m',
        imageURL: ASSETS.theBatmanImg,
        rating: '8.5',
        releaseYear: '2022',
        isSerie: false,
      },
      {
        id: Math.random(),
        name: 'The Batman',
        ageGroup: 16,
        duration: '2h 56m',
        imageURL: ASSETS.theBatmanImg,
        rating: '8.5',
        releaseYear: '2022',
        isSerie: false,
      },
  ];