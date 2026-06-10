// Write your code here
import {Component} from 'react'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import CartContext from '../../context/CartContext'
import './index.css'

class CartSummary extends Component {
  state = {cashStatus: false, buttonStatus: false}

  changePayement = () => {
    this.setState({cashStatus: true})
  }

  confirmOrder = () => {
    this.setState({buttonStatus: true})
  }

  render() {
    const {cashStatus, buttonStatus} = this.state
    return (
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
              <Popup
                modal
                trigger={
                  <button type="button" className="summarybutton">
                    Checkout
                  </button>
                }
                contentStyle={{width: '400px', height: '400px'}}
              >
                {buttonStatus ? (
                  <p>Your order has been placed successfully</p>
                ) : (
                  <div className="popupContainer">
                    <p>Payment Methods</p>
                    <div>
                      <input
                        className="paymentElement"
                        type="radio"
                        id="Card"
                        disabled
                        name="gender"
                      />
                      <label className="paymentLabel" htmlFor="Card">
                        Card
                      </label>
                    </div>
                    <div>
                      <input
                        className="paymentElement"
                        type="radio"
                        id="Net"
                        disabled
                        name="gender"
                      />
                      <label className="paymentLabel" htmlFor="Net">
                        Net Banking
                      </label>
                    </div>
                    <div>
                      <input
                        className="paymentElement"
                        type="radio"
                        id="UPI"
                        disabled
                        name="gender"
                      />
                      <label className="paymentLabel" htmlFor="UPI">
                        UPI
                      </label>
                    </div>
                    <div>
                      <input
                        className="paymentElement"
                        type="radio"
                        id="Wallet"
                        disabled
                        name="gender"
                      />
                      <label className="paymentLabel" htmlFor="Wallet">
                        Wallet
                      </label>
                    </div>
                    <div>
                      <input
                        className="paymentElement"
                        type="radio"
                        id="Cash"
                        name="gender"
                        onClick={this.changePayement}
                      />
                      <label className="paymentLabel" htmlFor="Cash">
                        Cash on Delivery
                      </label>
                    </div>
                    <p>Number of items: {cartList.length}</p>
                    <p>Totral Price: {sumofPrice}</p>
                    <button
                      className="summarybutton"
                      type="button"
                      onClick={this.confirmOrder}
                      disabled={cashStatus !== true}
                    >
                      Confirm Order
                    </button>
                  </div>
                )}
              </Popup>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default CartSummary
