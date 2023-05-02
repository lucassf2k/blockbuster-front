export function Method() {
  return (
    <div className="payment-details">
      <h4>
        Método de pagamento
      </h4>
      <fieldset>
        <div className="payment-item">
          <input type="checkbox" />
          <p>Pix</p>
        </div>
        <div className="payment-item">
          <input type="checkbox" />
          <p>Cartão de crédito</p>
        </div>
        <div className="payment-item">
          <input type="checkbox" />
          <p>Boleto</p>
        </div>
      </fieldset>
    </div>
  );
}
