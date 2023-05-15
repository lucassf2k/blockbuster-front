import { SideBar } from "../../components/SideBar";
import { Item } from "../../components/Item";
import { Wrapper } from "../../components/Wrapper";

import { ASSETS } from "../../assets";

import "./styles.css";

const items = [
  {
    id: Math.random(),
    name: "Death Metal",
    ageGroup: 16,
    duration: "1h 56m",
    imageURL: "http://localhost:8080/api/images/3744970.jpg",
    rating: "8.5",
    releaseYear: "2022",
    isSerie: false,
  },
  {
    id: Math.random(),
    name: "The Batman",
    ageGroup: 16,
    duration: "2h 56m",
    imageURL: ASSETS.theBatmanImg,
    rating: "8.5",
    releaseYear: "2022",
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
