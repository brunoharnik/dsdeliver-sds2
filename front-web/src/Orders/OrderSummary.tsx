import { formatPrice } from "./helpers";

type Props = {
    amount: number;
    totalPrice: number;
    onSubmit: () => void;
}

function OrderSummary( { amount, totalPrice, onSubmit} : Props) {
    return (
        <div className="order-summary-container">
            <div className="order-summary-content">
                <div>
                    <span className="amount-selected-container">
                        <strong className="amount-selected">{amount}</strong>
                    Pedidos selecionados
                    </span>
                    <span className="order-summary-total">
                        <strong className="amount-selected">{formatPrice(totalPrice)}</strong>
                    valor total
                    </span>
                </div>
                <button onClick={onSubmit} className="order-summary-make-order">
                    Finalizar pedido
                </button>
            </div>
        </div>
    )
}

export default OrderSummary;