import { Tabs } from "../../components/Tabs";
import Button from "../../components/elements/Button";
import { useSelector } from "react-redux";
import { cartProducts } from "../../stores/cart/cartSlice";
import useTabSwitch from "../../hooks/useTabSwitch";
import { ProductsSummary } from "../../components/ProductsSummary";
import { StripeWrapper } from "../../components/PaymentForm";

const Cart = () => {
    const cart = useSelector(cartProducts);
    const tabs= ['Summary', 'Payment'];
 const [currentTab, handleTabSwitch] = useTabSwitch(tabs, 'Summary');
 //console.log(cart);
    if (!cart || cart.length === 0) {
        return (
            <div className="bg-white h-full text-black flex justify-center p-4">
                <h1>Your Cart is empty</h1>
            </div>
        )
    }

    return(
      <div className="bg-white h-screen text-black mx-auto mt-2 border border-gray-200 p-4 md:w-2/3 rounded-lg shadow-md sm:p-6 lg:p-8">
                <Tabs list={tabs} onTabSwitch={handleTabSwitch} activeTab={currentTab} />
                <div className={`tabs ${currentTab !== 'Summary' ? 'hidden' : ''}`}>
                    <ProductsSummary />
                    <div className="flex justify-end p-2">
                        <Button variant="dark" className="flex items-center" onClick={()=>handleTabSwitch('Payment')}><span className="mr-1">Next</span></Button>
                    </div>
                </div>

                <div className={`tabs ${currentTab !== 'Payment' ? 'hidden' : ''}`}>
                  <StripeWrapper />
                </div>
            </div>

    )
}
export default Cart;
