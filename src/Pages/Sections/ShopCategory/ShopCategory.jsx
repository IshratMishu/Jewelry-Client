// import { useEffect, useState } from "react";
// import ShopByCategories from "../ShopByCategories/ShopByCategories";


// const ShopCategory = () => {
//     const [categoryShopping, setCategoryShopping] = useState([]);

//     useEffect(() => {
//         fetch(`http://localhost:5000/jewelries`)
//             .then(res => res.json())
//             .then(data => setCategoryShopping(data))
//     }, [])

//     return (
//         <div>
//             {
//                 categoryShopping.map(one => <ShopByCategories key={one._id} one={one}></ShopByCategories>
//                 )
//             }
//         </div>
//     );
// };

// export default ShopCategory;