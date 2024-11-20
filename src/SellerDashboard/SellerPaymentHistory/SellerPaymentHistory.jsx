import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";


const SellerPaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/seller/${user.email}`);
            return res.data;
        },
    });

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="bg-[--primary-color]">
                            <th className="w-[50px] px-6 py-2 text-start">
                            </th>
                            <th className="px-4 py-2 text-start">Buyer Email</th>
                            <th className="px-4 py-2 text-start">Price</th>
                            <th className="px-1 py-2 text-start">Transaction Id</th>
                            <th className="px-6 py-2 text-start">Status</th>
                            <th className="px-6 py-2 text-start">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payment, index) => <tr key={payment._id} className=" border ">
                                <td className="px-6 py-4 text-start text-sm">
                                    {index + 1}
                                </td>
                                <td className="px-4 py-4 text-start font-sans text-sm">
                                    {payment.email}
                                </td>
                                <td className="px-4 py-4 text-start font-sans text-sm">
                                    ${payment.price}
                                </td>
                                <td className="px-1 py-4 text-start font-sans text-sm">{payment.transactionId}</td>

                                <td className="px-4 py-4 text-start text-sm">
                                    <span
                                        className={` py-1 ${payment.status === 'paid' ? 'bg-[--primary-color] text-black font-semibold px-5' : 'bg-[--secondary-color] text-white px-2'}`}>{payment.status}</span>
                                </td>
                                <td className="px-6 py-4 text-start font-sans text-sm">
                                    {payment.date}
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SellerPaymentHistory;