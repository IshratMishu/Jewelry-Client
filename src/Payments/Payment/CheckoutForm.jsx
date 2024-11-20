import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import moment from 'moment';

const CheckoutForm = () => {
    const [cart, refetch] = useCart();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const navigate = useNavigate();
    const totalPrice = cart.reduce((total, item) => total + Number(item.price), 0);

 

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });


        if (error) {
            console.log('[error]', error);
            setError(error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('');
        }


        //confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'Unknown',
                    name: user?.displayName || 'Unknown'
                }
            }
        });

        if (confirmError) {
            console.log('confirm error');
        } else {
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id);

                //save the payment in the database
                const payment = {
                    email: user.email,
                    sellerEmail: cart.map(item => item.sellerEmail),
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: moment().format("DD/MM/YYYY HH:mm:ss"), //try moment js for utc time convert
                    cartIds: cart.map(item => item._id),
                    productName: cart.map(item => item.name),
                    jewelryItemIds: cart.map(item => item.jewelryId),
                    status: 'pending'
                };
                const res = axiosSecure.post('/payments', payment);
                refetch();
                if (res.data?.paymentResult?.insertedId) {
                    toast.success('Payment Success!');
                }
                navigate('/my-account/paymentHistory');
            }
        }

    }

    return (
        <div>
       <Helmet>
                <title>Checkout - Moice Jewelry</title>
            </Helmet>
            <h1 className="text-2xl font-medium">CHECKOUT</h1>
            <div className="flex mt-8 gap-10">
                <div className="bg-[--primary-color] px-10 py-8 w-1/2">
                    <h1 className="font-semibold pb-5">Billing Details</h1>
                    <form className="space-y-5">
                        <div className="flex gap-10">
                            <div className="space-y-2">
                                <label className="text-sm">Name</label>
                                <input className="flex h-10 w-full border border-black px-3 focus:outline-none bg-[--third-color]" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm">Address</label>
                                <input className="flex h-10 w-full border border-black px-3 focus:outline-none bg-[--third-color]" />
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className="space-y-2">
                                <label className="text-sm">City</label>
                                <input className="flex h-10 w-full border border-black px-3 focus:outline-none bg-[--third-color]" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm">Country</label>
                                <input className="flex h-10 w-full border border-black px-3 focus:outline-none bg-[--third-color]" />
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className="space-y-2">
                                <label className="text-sm">Phone Number</label>
                                <input className="flex h-10 w-full border border-black px-3 focus:outline-none bg-[--third-color]" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm">Email</label>
                                <input className="flex h-10 w-full border border-black px-3 focus:outline-none bg-[--third-color]" defaultValue={user?.email} />
                            </div>
                        </div>
                    </form>
                </div>

                <div className="w-1/2">
                    <div>
                        <h1 className="font-semibold pb-3">Order Summery</h1>
                        <div>
                            <div className="flex justify-between">
                                <p className="font-medium text-sm">Product</p>
                                <p className="font-medium text-sm">Price</p>
                            </div>
                            {
                                cart.map(item => <div key={item._id} className="flex justify-between pt-2 text-sm">
                                    <p>{item.name}</p>
                                    <p className="font-sans">${item.price}</p>
                                </div>)
                            }
                        </div>
                        <hr className="mt-2 mb-2" />
                        <h2 className="flex justify-between pb-2">Total: <span className="font-sans">${totalPrice}</span></h2>
                    </div>
                    <div className="mt-8">
                        <h1 className="font-semibold pb-3">Card Details</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="border p-2">
                                <CardElement
                                    options={{
                                        style: {
                                            base: {
                                                fontSize: '16px',
                                                color: '#424770',
                                                '::placeholder': {
                                                    color: '#aab7c4',
                                                },
                                            },
                                            invalid: {
                                                color: '#9e2146',
                                            },
                                        },
                                    }}
                                />
                            </div>

                            <button type="submit" className="border border-[var(--secondary-color)] md:px-8 px-4 py-2 hover:bg-[var(--secondary-color)] hover:text-white bg-transparent text-[var(--secondary-color)] w-full mt-10" disabled={!stripe || !clientSecret}>PLACE ORDER</button>
                            <p className="text-red-700">{error}</p>
                            {transactionId && <p className="text-green-700">Your Transaction Id: {transactionId}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutForm;