// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import "./Card.css";

// function Card({ item }) {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <motion.div
//       transition={{ layout: { duration: 1 } }}
//       layout
//       className="card-wrapper mb-5 bg-white "
//       onClick={() => setIsOpen(!isOpen)}
//     >
//       <img
//         layout="position"
//         className="object-contain  h-48 w-96"
//         src={item.image}
//         alt="Country"
//       />
//       <motion.div className="px-6 py-4">
//         <motion.div className="font-bold text-xl mb-2">{item.title}</motion.div>
//         <p className="text-gray-700 text-base">{item.category}</p>
//         {isOpen && (
//           <p className="text-gray-700 text-base">{item.description}</p>
//         )}
//       </motion.div>
//       <motion.div className="px-6 pt-4 animate-pulse">
//         <span className="span-style">{item.price} TL</span>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default Card;
