import { useNavigate } from 'react-router-dom';
import useOrders from '../../hooks/useOrders';
import { useEffect } from 'react';

const OrderSuccessful = () => {
    const navigate = useNavigate();
    const { userOrders } = useOrders();
    
    // Assuming userOrders is an array and you want the last order
    const orderId = userOrders.length > 0 ? userOrders[userOrders.length - 1]._id : 'N/A';

    const handleTrackOrder = () => {
        navigate('/dashboard/overview');
    };

    const handleBackHome = () => {
        navigate('/');
    };
    useEffect(()=>{
        window.scrollTo(0, 0)
    })

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <h1 className="md:text-3xl font-bold text-[#01684B]">Order Placed Successfully!</h1>
            <p className="mt-4 md:text-lg text-gray-700">Your order ID is 
                <span className="font-semibold"> {orderId}</span>.
            </p>

            <div className="mt-8 space-x-4">
                <button 
                    onClick={handleTrackOrder} 
                    className="px-4 py-2 text-white bg-[#01684B] transition duration-200"
                >
                    Track Order
                </button>
                <button 
                    onClick={handleBackHome} 
                    className="px-4 py-2 text-white bg-[#01684B] transition duration-200"
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default OrderSuccessful;
