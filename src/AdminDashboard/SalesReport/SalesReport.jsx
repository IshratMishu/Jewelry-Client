import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const SalesReport = () => {
    const axiosSecure = useAxiosSecure();
    const { data: payments = [] } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments`)
            return res.data;
        }
    })

    return (
        <div>
              <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-[--primary-color]">
                                <th className="w-[50px] px-6 py-2 text-start">
                                </th>
                                <th className="px-1 py-2 text-start">Product Name</th>
                                <th className="px-6 py-2 text-start">Seller Email</th>
                                <th className="px-6 py-2 text-start">Buyer Email</th>
                                <th className="px-6 py-2 text-start">Total</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map((payment, index) => <tr key={payment._id} className=" border ">
                                    <td className="px-6 py-4 text-start text-sm">
                                        {index + 1}
                                    </td>
                                    <td className="px-1 py-4 text-start font-sans text-sm">{payment.productName[0]} × {payment.productName.length} </td>
                                    <td className="px-6 py-4 text-start text-sm">
                                        {payment.sellerEmail[0]}
                                    </td>
                                    <td className="px-6 py-4 text-start text-sm ">
                                       {payment.email}
                                    </td>
                                    <td className="px-6 py-4 text-start text-sm font-sans">
                                      $ {payment.price}
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
        </div>
    );
};

export default SalesReport;