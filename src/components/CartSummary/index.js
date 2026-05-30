// Write your code here
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {val => {
      const {cartList} = val

      let sumofPrice = 0

      cartList.forEach(eachProd => {
        sumofPrice += eachProd.price * eachProd.quantity
      })

      return (
        <div className="summaryCart">
          <h1>
            Order Total:<span className="spanText">{sumofPrice}</span>
          </h1>
          <p>{cartList.length} items in cart</p>
          <button type="button" className="summarybutton">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
