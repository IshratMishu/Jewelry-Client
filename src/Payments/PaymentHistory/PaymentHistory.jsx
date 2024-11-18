import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Sidebar from "../../Pages/Dashboard/DashboardPage/Sidebar";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })

    return (
        <div className="mt-20">
            <Helmet>
                <title>My Account - Moice Jewelry</title>
            </Helmet>
            <h1 className="text-2xl font-medium">MY ACCOUNT</h1>
            <div className="flex mt-8 gap-10">
                <Sidebar></Sidebar>
                <div className="pl-10">
                    <h2 className="text-xl font-sans pb-4">Total Payments: {payments.length}</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="w-[50px] px-6 py-4 text-start">
                                    </th>
                                    <th className="px-4 py-4 text-start">Price</th>
                                    <th className="px-1 py-4 text-start">Transaction Id</th>
                                    <th className="px-6 py-4 text-start">Status</th>
                                    <th className="px-6 py-4 text-start">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    payments.map((payment, index) => <tr key={payment._id} className=" border ">
                                        <th className="px-6 py-4 text-start">
                                            {index + 1}
                                        </th>
                                        <th className="px-4 py-4 text-start font-sans">
                                            ${payment.price}
                                        </th>
                                        <th className="px-1 py-4 text-start font-sans">{payment.transactionId}</th>
                                        <th className="px-6 py-4 text-start">
                                            {payment.status}
                                        </th>
                                        <th className="px-6 py-4 text-start font-sans">
                                            {payment.date}
                                        </th>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;