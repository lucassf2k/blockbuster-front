import { SideBar } from '../../components/SideBar';
import { Item } from '../../components/Item';
import { Wrapper } from '../../components/Wrapper';

import { ASSETS } from '../../assets';

import './styles.css';

export function MyList() {
  return (
    <Wrapper>
      <SideBar />

      <section className="collection-details">
        <h2>Minha Lista</h2>
        <div className="collection-items">
          <Item
            name="House of The Dragon"
            ageGroup={16}
            duration="2h56m"
            imageURL={ASSETS.houseOfTheDragonImg}
            rating="8.5"
            releaseYear="2022"
          />
        </div>
      </section>
    </Wrapper>
  );
}
