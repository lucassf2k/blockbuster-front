import { Wrapper } from '../../components/Wrapper';
import { SideBar } from '../../components/SideBar';
import { Item } from './Item';

import './styles.css';

import { ASSETS } from '../../assets';
import { Payment } from './Payment';

export function Cart() {
  return (
    <Wrapper>
      <SideBar />
      <section className="cart-details">
        <main className="content-details">
          <section className="acquired-items">
            <h4>Carrinho</h4>

            <div className="items">
              <Item
                imageURL={ASSETS.houseOfTheDragonImg}
                name="House of The Dragon"
                type="aluguel"
                price="9.90"
                isRent
              />
              <Item
                imageURL={ASSETS.theBatmanImg}
                name="The Batman"
                type="compra"
                price="15"
              />
            </div>
          </section>
          <Payment />
        </main>
      </section>
    </Wrapper>
  );
}
