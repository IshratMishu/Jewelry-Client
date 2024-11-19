import { Helmet } from "react-helmet-async";
import Sidebar from "../DashboardPage/Sidebar";
import Logo from "../../../Components/Logo/Logo";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { FaDownload } from "react-icons/fa";


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

    const handleDownloadPDF = () => {
        const invoiceElement = document.getElementById("invoice-content");
        html2canvas(invoiceElement).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4" , true);
            const imgWidth = 190;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
            pdf.save(`Invoice_${user.email}_${moment().format("YYYYMMDD")}.pdf`);
        });
    };


    return (
        <div className="mt-20">
            <Helmet>
                <title>My Account - Moice Jewelry</title>
            </Helmet>
            <h1 className="text-2xl font-medium">MY ACCOUNT</h1>
            <div className="flex mt-8 gap-10">
                <Sidebar></Sidebar>

                <div className="mx-auto border w-[70%] p-4 min-h-screen" id="invoice-content" >
                    <div className="flex justify-between items-center">
                        <Logo></Logo>
                        <h1 className="bg-[--secondary-color] text-white px-2 py-1">INVOICE</h1>
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
                        <h1 className="font-medium pb-2">Purchase Info.</h1>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-[--primary-color]">
                                    <tr>
                                        <th className="px-6 py-2 text-start">
                                            Product
                                        </th>
                                        <th className="px-1 py-2 text-start">Transaction Id</th>
                                        <th className="px-6 py-2 text-start">Date</th>
                                        <th className="px-4 py-2 text-start">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        payments.map(payment => <tr key={payment._id} className="border ">
                                            <td className="px-6 py-4 text-start text-xs">
                                                {payment.productName}
                                            </td>
                                            <td className="px-1 py-4 text-start font-sans text-xs">{payment.transactionId}</td>
                                            <td className="px-6 py-4 text-start font-sans text-xs">
                                                {payment.date}
                                            </td>
                                            <td className="px-4 py-4 text-start font-sans text-xs">
                                                ${payment.price}
                                            </td>
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
            <div className="flex justify-end mt-5 pr-10">
                <button onClick={handleDownloadPDF} className="text-white bg-[--secondary-color] px-2 py-1 flex items-center gap-2">Download Invoice as PDF<FaDownload /></button>
            </div>
        </div>
    );
};

export default Invoice;