import { useEffect, useState } from "react";

import { SideBar } from "../../../components/SideBar";
import { Wrapper } from "../../../components/Wrapper";
import { Item } from "../../../components/Item";

import "../../MyList/styles.css";

import { api } from "../../../services/api";
import { AddItemButton } from "../../../components/admins/AddItemButton";
import { ItemRegisterModal } from "../../../components/admins/ItemRegisterModal";
import { DeleteOrUpdateItemModal } from "../../../components/admins/DeleteOrUpdateItemModal";

export function Dashboard() {
  const [data, setData] = useState([]);
  const [isOpenItemModal, setIsOpenItemModal] = useState(false);
  const [isOpenDeleteOrUpdateModal, setIsOpenDeleteOrUpdateModal] =
    useState(false);
  const [itemId, setItemId] = useState("");
  const [isSerieState, setIsSerieState] = useState(false);

  async function loadData() {
    try {
      const [responseMovies, responseSeries] = await Promise.all([
        api.get("/movies"),
        api.get("/series"),
      ]);

      setData([...responseMovies.data, ...responseSeries.data]);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  function handleOpenModal() {
    setIsOpenItemModal(true);
  }

  function handleCloseModal() {
    setIsOpenItemModal(false);
  }

  function handleToggleDeleteOrUpdateModal(isSerie, uuid = "") {
    return () => {
      setIsOpenDeleteOrUpdateModal((prevState) => !prevState);
      setItemId(uuid);
      setIsSerieState(isSerie);
    };
  }

  return (
    <Wrapper>
      <SideBar isAdmin />

      <ItemRegisterModal isOpen={isOpenItemModal} onClose={handleCloseModal} />
      <DeleteOrUpdateItemModal
        isOpen={isOpenDeleteOrUpdateModal}
        itemId={itemId}
        isSerie={isSerieState}
        onClose={handleToggleDeleteOrUpdateModal}
      />

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
                season={"?"}
                amountEpsodes={item.amountEpsodes}
                imageURL={item.imageUrl}
                rating={10}
                releaseYear={item.releaseDate}
                isSerie={item.duration ? false : true}
                onFunction={handleToggleDeleteOrUpdateModal(
                  item.duration ? false : true,
                  item.uuid
                )}
              />
            ))}

            <AddItemButton onClick={handleOpenModal} />
          </>
        </div>
      </section>
    </Wrapper>
  );
}
