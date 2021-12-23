import axios from "axios";

const CartItem = ({ item, removeItem }) => {
  const updateQuantity = (type, item) => {
    let itemIncrease = {
      id: item.id,
      quantity: item.quantity,
      idShoe: item.idShoe,
    };

    if (type === "decrease") {
      itemIncrease.quantity--;
    } else {
      itemIncrease.quantity++;
    }
    if (item.quantity === 1 && type === "decrease") {
      removeItem(item.id);
    } else {
      axios
        .put(
          `https://json-server-0.herokuapp.com/api/cart/${itemIncrease.id}`,
          itemIncrease
        )
        .then((res) => {});
    }
  };

  return (
    <div className="cart-item">
      <div className="cart-item-left">
        <div
          className="cart-item-image"
          style={{ backgroundColor: "rgb(253, 88, 74)" }}
        >
          <div className="cart-item-image-block">
            <img src={item.image} />
          </div>
        </div>
      </div>
      <div className="cart-item-right">
        <div className="cart-item-name">{item.name}</div>
        <div className="cart-item-price">
          ${(item.price * item.quantity).toFixed(2)}
        </div>
        <div className="cart-item-actions">
          <div className="cart-item-count">
            <div
              className="cart-item-count-button"
              onClick={() => updateQuantity("decrease", item)}
            >
              -
            </div>
            <div className="cart-item-count-number">{item.quantity}</div>
            <div
              className="cart-item-count-button"
              onClick={() => updateQuantity("increase", item)}
            >
              +
            </div>
          </div>
          <div className="cart-item-remove" onClick={() => removeItem(item.id)}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALISURBVHic7Zs9bxNBEIYfgyUKAhhQUhDRICEBCh0fgkhBNIT8gPwZ6Gig5y8QCUhH5AqE3EZJgQRKEDSpKEAQkTMdcijGRvi8Z+/e3eze4X2kKe40t/Pu+LRfN4bIdNNQbLsJ3ATOFWznC7AJ/C6syCMngC3gsCTb7LdZGx5SXucH9kBD6BGNRoGrNWlTLQEa7R5VaFMtAbXBZwLWkVnHxtZ9iZr6N6Bp6TcHXAOOW/qfz7i36un5X8A28NXSfywrQJfypzVtS4D7ZSRgpwKdyWsfJnXOZincxf7VrxoJcHKcg80g2ClFShg6ZTQyD2xQr3GgC7yi+EYs8t+TZ329gKwJfiLzbRU4Cywh/fmuGegpw/PssmYwS5aAfURTD3ikFegKo4PNe61gDrxjWFMPuGj7sMte4JLh3mWH57VYSF03cDg7cEmAabxQ2aM7UkjX1O8GfSRgHmgjM8YO4wfOFWC379umYguZVcyrrkm0U/4JMGvwm2N0tblh0b5Jk+222csbcCd1PYOsI9KYzhvuqij6Bx8JMO0kZyz91HehcRAMLSA0MQGhBYQmJiC0gNDEBIQWEJqYgNACQhMTEFpAaGICQgsITUxAaAGhiQnwEMP0+axr6af+6c1HAjqp6wQpo02zxWhi3moIykveU+FBfUGCfEq7N8Z3GSlrSbD/vl/oVNiFvAnQpvLH4pUmJsDBN2tEDlnHn1UBZppljLgkYC/j/i2HNspmMeP+nkawY8ABowPOa41gFjSQaTKt5wDRqsKaIeAh8Bjd/x+laQBPMrQ80wy8iJSgmAK/QWpzW4rxW8gndNMvPyiPua0YH4DnGcGrYGuK/f7LGeBjgM5Nsl3gtGK/h7gAfFbukIt96mvySgt4WVB4UesBL4BTyn0dy42+iEGxog/bR8ai60XFlzl1NZFiyllknNDgB/ANKbaq1V9pI1XlD82w8ru3YIVHAAAAAElFTkSuQmCC"
              className="cart-item-remove-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
