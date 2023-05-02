import { Method } from "./Method";

export function Payment() {
  return (
    <section className="container-payment">
      <Method />
      <div className="payment">
        <h4>Resumo</h4>
        <p>TOTAL <strong>R$ 269,96</strong></p>
        <button type="button">
          Finalizar
        </button>
      </div>
    </section>
  );
}
