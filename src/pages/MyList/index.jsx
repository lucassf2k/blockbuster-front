import { SideBar } from '../../components/SideBar';
import { Item } from '../../components/Item';
import { Wrapper } from '../../components/Wrapper';

import { ASSETS } from '../../assets';

import './styles.css';

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
];

export function MyList() {
  return (
    <Wrapper>
      <SideBar />

      <section className="collection-details">
        <h2>Minha Lista</h2>
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
    </Wrapper>
  );
}
