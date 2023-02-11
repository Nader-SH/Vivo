import Cart from '../components/cart/Cart';
import HeaderComponent from "../components/header/Header";

const CartPageView = () => {
    return (
        <div style={{
            background: 'rgba(165, 162, 153, 0.1)',
            height:'833px' // هبد 
        }}>
            <div>
                <HeaderComponent />
                <div className="contantCart" style={{
                    marginTop:'30px',
                    marginBottom:'30px'
                }}>
                    <Cart />
                </div>
            </div>
        </div>
    )
}

export default CartPageView;