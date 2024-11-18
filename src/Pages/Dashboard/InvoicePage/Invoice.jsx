import { Helmet } from "react-helmet-async";
import Sidebar from "../DashboardPage/Sidebar";
import Logo from "../../../Components/Logo/Logo";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";


const Invoice = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
   

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    const totalPrice = payments.reduce((total, item) => total + item.price, 0);

    return (
        <div className="mt-20">
            <Helmet>
                <title>My Account - Moice Jewelry</title>
            </Helmet>
            <h1 className="text-2xl font-medium">MY ACCOUNT</h1>
            <div className="flex mt-8 gap-10">
                <Sidebar></Sidebar>

                <div className="mx-auto border w-[70%] p-4">
                    <div className="flex justify-between">
                        <Logo></Logo>
                        <h1 className="bg-[--secondary-color] text-white h-8 py-1 px-2">INVOICE</h1>
                    </div>
                    <div className="mt-10 flex justify-between">
                        <div>
                            <h1 className="font-medium">Billed To:</h1>
                            <h1>{user.displayName}</h1>
                            <h1>{user.email}</h1>
                        </div>
                        <div>
                            <p>Invoice No. <span className="font-sans text-sm">323</span></p>
                            <p>Date: <span className="font-sans text-sm">{moment(new Date()).format("DD/MM/YYYY")}</span></p>
                        </div>
                    </div>
                    <hr className="mt-5" />
                    <div className="mt-6">
                        <h1 className="font-medium">Purchase Info.</h1>
                        <div className="overflow-x-auto mt-2">
                            <table className="w-full">
                                <thead className="bg-[--secondary-color]">
                                    <tr>
                                        <th className=" px-6 py-4 text-start">
                                            Product
                                        </th>
                                        <th className="px-1 py-4 text-start">Transaction Id</th>
                                        <th className="px-6 py-4 text-start">Date</th>
                                        <th className="px-4 py-4 text-start">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        payments.map(payment => <tr key={payment._id} className="border ">
                                            <th className="px-6 py-4 text-start text-xs">
                                                {payment.productName}
                                            </th>
                                            <th className="px-1 py-4 text-start font-sans text-xs">{payment.transactionId}</th>
                                            <th className="px-6 py-4 text-start font-sans text-xs">
                                                {payment.date}
                                            </th>
                                            <th className="px-4 py-4 text-start font-sans text-xs">
                                                ${payment.price}
                                            </th>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                            <p className="text-end font-semibold px-6 py-2">Total: <span className="font-sans text-[--secondary-color] font-bold">${totalPrice}</span></p>
                        </div>
                        <div className="mt-5">
                            <p className="text-[--secondary-color] font-bold">Thanks for your Purchase!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Invoice;