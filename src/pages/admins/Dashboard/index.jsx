import { useEffect, useState } from "react";

import { SideBar } from "../../../components/SideBar";
import { Wrapper } from "../../../components/Wrapper";
import { Item } from "../../../components/Item";

import "../../MyList/styles.css";

import { api } from "../../../services/api";
import { AddItemButton } from "../../../components/admins/AddItemButton";
import { ItemRegisterModal } from "../../../components/admins/ItemRegisterModal";

export function Dashboard() {
  const [data, setData] = useState([]);
  const [isOpenItemModal, setIsOpenItemModal] = useState(false);

  function handleOpenModal() {
    setIsOpenItemModal(true);
  }

  function handleCloseModal() {
    setIsOpenItemModal(false);
  }

  async function loadData() {
    const [responseMovies, responseSeries] = await Promise.all([
      api.get("/movies"),
      api.get("/series"),
    ]);

    setData([...responseMovies.data, ...responseSeries.data]);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Wrapper>
      <SideBar isAdmin />

      <ItemRegisterModal isOpen={isOpenItemModal} onClose={handleCloseModal} />

      <section className="collection-details">
        <h2>Acervo</h2>
        <div className="collection-items">
          <>
            {data.map((item) => (
              <Item
                key={item.uuid}
                name={item.title}
                ageGroup={item.advisoryRating}
                duration={item.duration}
                season={item.season}
                amountEpsodes={item.amountEpsodes}
                imageURL={item.imageUrl}
                rating={10}
                releaseYear={item.releaseDate}
                isSerie={item.duration ? false : true}
              />
            ))}

            <AddItemButton onClick={handleOpenModal} />
          </>
        </div>
      </section>
    </Wrapper>
  );
}
