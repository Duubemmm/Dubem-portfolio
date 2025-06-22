// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import {
//   FaPhone,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaFacebook,
//   FaTwitter,
//   FaLinkedin,
//   FaInstagram,
// } from 'react-icons/fa';

// const Contact = () => {
//   const { ref, inView } = useInView({
//     threshold: 0.3,
//     triggerOnce: true,
//   });

//   return (
//     <div id="contact" className="bg-gradient-to-b from-gray-900 to-purple-900">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
//         {/* Header Section */}
//         <motion.div 
//           ref={ref}
//           initial={{ opacity: 0, y: -50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Let's Build Your <span className="bg-gradient-to-r from-amber-400 to-pink-500 bg-clip-text text-transparent">Dream Project</span>
//           </h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={inView ? { opacity: 1 } : {}}
//             transition={{ delay: 0.3 }}
//             className="text-xl text-amber-200 max-w-2xl mx-auto"
//           >
//             Get in touch and let's create something amazing together
//           </motion.p>
//           <motion.div 
//             initial={{ width: 0 }}
//             animate={inView ? { width: "100px" } : {}}
//             transition={{ delay: 0.5, duration: 0.6 }}
//             className="h-1 bg-gradient-to-r from-amber-400 to-pink-500 mx-auto rounded-full mt-6"
//           />
//         </motion.div>

//         {/* Contact Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="space-y-8"
//           >
//             {/* <motion.div 
//               whileHover={{ x: 5 }}
//               className="flex items-start space-x-6 p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm"
//             >
//               <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-4 rounded-full flex-shrink-0">
//                 <FaPhone className="text-white text-xl"/>
//               </div>
//               <div>
//                 <p className="text-lg font-medium text-amber-300 mb-1">Call Me</p>
//                 <p className="text-gray-300">+1 (234) 567-8900</p>
//               </div>
//             </motion.div> */}

//             <motion.div 
//               whileHover={{ x: 5 }}
//               transition={{ delay: 0.1 }}
//               className="flex items-start space-x-6 p-6 backdrop-blur-sm"
//             >
//               <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-4 rounded-full flex-shrink-0">
//                 <FaEnvelope className="text-white text-xl"/>
//               </div>
//               <div>
//                 <p className="text-lg font-medium text-amber-300 mb-1">Email</p>
//                 <p className="text-gray-300">chidubemm.okoli@gmail.com</p>
//               </div>
//             </motion.div>

//             <motion.div 
//               whileHover={{ x: 5 }}
//               transition={{ delay: 0.2 }}
//               className="flex items-start space-x-6 p-6 backdrop-blur-sm"
//             >
//               <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-4 rounded-full flex-shrink-0">
//                 <FaMapMarkerAlt className="text-white text-xl"/>
//               </div>
//               <div>
//                 <p className="text-lg font-medium text-amber-300 mb-1">Location</p>
//                 <p className="text-gray-300">Abuja, Nigeria</p>
//               </div>
//             </motion.div>

//             {/* Social Links */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={inView ? { opacity: 1 } : {}}
//               transition={{ delay: 0.8 }}
//               className="pt-8"
//             >
//               <h4 className="text-xl font-medium text-white mb-4">Connect With Me</h4>
//               <div className="flex space-x-6">
//                 {[
//                   // { icon: <FaFacebook className="w-6 h-6"/>, color: "bg-blue-600" },
//                   // { icon: <FaTwitter className="w-6 h-6"/>, color: "bg-sky-500" },
//                   { icon: <FaLinkedin className="w-6 h-6"/>, color: "bg-blue-700" },
//                   // { icon: <FaInstagram className="w-6 h-6"/>, color: "bg-gradient-to-r from-purple-600 to-pink-600" }
//                 ].map((social, index) => (
//                   <motion.a
//                     key={index}
//                     whileHover={{ y: -5, scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     href="https://www.linkedin.com/posts/activity-7293192510850392065-v0KG?utm_source=share&utm_medium=member_desktop"
//                     className={`${social.color} text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all`}
//                   >
//                     {social.icon}
//                   </motion.a>
//                 ))}
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.form
//             initial={{ opacity: 0, x: 50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="space-y-6"
//           >
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               <div>
//                 <label htmlFor="name" className="block text-amber-200 mb-2">Full Name</label>
//                 <input 
//                   id="name"
//                   type="text" 
//                   placeholder="John Doe"
//                   className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-gray-500 transition-all"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-amber-200 mb-2">Email Address</label>
//                 <input 
//                   id="email"
//                   type="email" 
//                   placeholder="john@example.com"
//                   className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-gray-500 transition-all"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               <div>
//                 <label htmlFor="phone" className="block text-amber-200 mb-2">Phone Number</label>
//                 <input 
//                   id="phone"
//                   type="tel" 
//                   placeholder="+1 (234) 567-8900"
//                   className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-gray-500 transition-all"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="budget" className="block text-amber-200 mb-2">Project Budget</label>
//                 <input
//                   id="budget"
//                   type="text"
//                   className="w-full px-6 py-3  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-gray-500 transition-all"
//                 />
//                   {/* <option value="">Select budget range</option>
//                   <option value="1k-5k">$1k - $5k</option>
//                   <option value="5k-10k">$5k - $10k</option>
//                   <option value="10k-25k">$10k - $25k</option>
//                   <option value="25k+">$25k+</option> */}
//               </div>
//             </div>

//             <div>
//               <label htmlFor="message" className="block text-amber-200 mb-2">Your Message</label>
//               <textarea 
//                 id="message"
//                 rows={5}
//                 placeholder="Tell me about your project..."
//                 className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-gray-500 transition-all"
//               />
//             </div>

//             <motion.button
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//               type="submit"
//               className="w-full bg-gradient-to-r from-amber-500 to-pink-600 text-white font-medium py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
//             >
//               Send Message
//             </motion.button>
//           </motion.form>
//         </div>
//       </div>

//       {/* Footer */}
//       <motion.footer
//         initial={{ opacity: 0 }}
//         animate={inView ? { opacity: 1 } : {}}
//         transition={{ delay: 1 }}
//         className="bg-gray-900/50 border-t border-gray-800 py-8"
//       >
//         <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-gray-400 mb-4 md:mb-0">
//             © {new Date().getFullYear()} Dubem. All rights reserved.
//           </p>
//           <div className="flex space-x-6">
//             <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
//               <FaFacebook className="w-5 h-5"/>
//             </a>
//             <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
//               <FaTwitter className="w-5 h-5"/>
//             </a>
//             <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
//               <FaLinkedin className="w-5 h-5"/>
//             </a>
//             <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
//               <FaInstagram className="w-5 h-5"/>
//             </a>
//           </div>
//         </div>
//       </motion.footer>
//     </div>
//   );
// };

// export default Contact;