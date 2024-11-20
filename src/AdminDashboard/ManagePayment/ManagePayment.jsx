import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const ManagePayment = () => {
   
    const axiosSecure = useAxiosSecure();
    const { data: payments = [], refetch } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments`)
            return res.data;
        }
    })


    const handleApprove = payment => {
        axiosSecure.patch(`/payments/approve/${payment._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-center",
                        title: `Payment marked as Paid`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    };


    return (
        <div>
            <div className="">
                <h2 className="text-xl font-sans pb-4 text-end">Total Payments: {payments.length}</h2>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-[--primary-color]">
                                <th className="w-[50px] px-6 py-2 text-start">
                                </th>
                                <th className="px-1 py-2 text-start">Transaction Id</th>
                                <th className="px-6 py-2 text-start">Date</th>
                                <th className="px-6 py-2 text-start">Status</th>
                                <th className="px-6 py-2 text-start">Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map((payment, index) => <tr key={payment._id} className=" border ">
                                    <td className="px-6 py-4 text-start text-sm">
                                        {index + 1}
                                    </td>
                                    <td className="px-1 py-4 text-start font-sans text-sm">{payment.transactionId}</td>
                                    <td className="px-6 py-4 text-start font-sans text-sm">
                                        {payment.date}
                                    </td>
                                    <td className="px-6 py-4 text-start text-sm ">
                                        <span
                                            className={` py-1 ${payment.status === 'paid' ? 'bg-[--primary-color] text-black font-semibold px-5' : 'bg-[--secondary-color] text-white px-2'}`}>{payment.status}</span>
                                    </td>
                                    <td className="px-6 py-4 text-start text-sm ">
                                        <span onClick={() => handleApprove(payment)} className="bg-[--secondary-color] px-2 py-1 text-white cursor-pointer">Accept Payment</span>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManagePayment;