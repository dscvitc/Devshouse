// "use client"
// import React , { useState } from "react";
// import "../styles/footer.css";
// import ticket from "../images/devshouseticket 1.svg";
// import backdrop from "../images/backdrop.svg";
// import ticket2 from '../images/devshouseticket\ 2.svg';
// import green from '../images/green.svg';
// import blue from '../images/blue.svg';
// import discord_ from '../images/discord.svg';
// import github_ from '../images/github.svg';
// import instalogo from '../images/insta.svg';
// import fblogo from '../images/fb.svg';
// import xlogo from '../images/x.svg';
// import lilogo from '../images/link.svg';
// import li_hover from '../images/li_b.svg';
// import instag_hover from '../images/ins_b.svg';
// import fb_hover from '../images/f_b.svg';
// const Footer: React.FC = () => {
//   const [blue_hover , setBlue] = useState(0);
//   const [green_hover , setGreen] = useState(0);
//   const [linkedin_hover , setLi] = useState(0);
//   const [facebook_hover,setFb] = useState(0);
//   const [insta_hover,setIns]=useState(0);
//   const linkedin = () => {
//     setBlue(1);
//     setLi(1);
//   };
//   const linkedin_out = () => {
//     setBlue(0);
//     setLi(0);
//   };

//   const facebook = () => {
//     setBlue(1);
//     setFb(1);
//   };
//   const facebook_out = () => {
//     setBlue(0);
//     setFb(0);
//   };

//   const instagram = () => {
//     setGreen(1);
//     setIns(1);
//   };
//   const instagram_out = () => {
//     setGreen(0);
//     setIns(0);
//   };
//   return (
//     <>
//     <img src={fb_hover.src} style = {{opacity:facebook_hover}}className="fb_hover"/>
//     <img src={instag_hover.src} style={{opacity:insta_hover}} className="instagram_hover"/>
//       <div className="foo">
//         <img src={ticket.src} alt="Ticket" className="ticket1" />
//         <img src={ticket2.src} alt="Ticket" className="ticket2" />
//         <img src={backdrop.src} className="backdrop" />
//         <img src={green.src} className="green_"  style={{opacity:green_hover}}/>
//         <img src={blue.src} className="blue_" style={{opacity:blue_hover}}/>
//         <img src={li_hover.src} className="li_hover" style={{opacity:linkedin_hover}} />
//         <div className="text">
//           <ul>
//             <li className="header">QuickLinks</li>
//             <li>About</li>
//             <li>Theme</li>
//             <li>Timeline</li>
//             <li>Team</li>
//             <li>Sponsors</li>
//             <li>FAQs</li>
//             <li>Contact Us</li>
//           </ul>
//         </div>
//         <div className="joinus">
//             <ul>
//                 <li className="header">Join Us</li>
//                 <li className="github" onMouseEnter={() => setGreen(1)} onMouseLeave={() => setGreen(0)}><img src={github_.src} style={{paddingRight:"8px"}} className="git"/>Github</li>
//                 <li className="discord" onMouseEnter = {() => setBlue(1)} onMouseLeave = {()=>setBlue(0)}><img src={discord_.src} style={{paddingRight:"8px"}} className="dis"/>Discord</li>
//             </ul>
//         </div>
//         <p className="header1">Follow Us</p>
//         <div className="followus">
//           <p className="light">Connect.Learn.Grow</p>
//           <div>
//             <ul className="logo">
//               <li><img src={instalogo.src} style={{paddingRight:"10px"}} className="h1" onMouseEnter={instagram} onMouseLeave={instagram_out} /></li>
//               <li><img src={fblogo.src} style={{paddingRight:"10px"}} className="h2" onMouseEnter={facebook} onMouseLeave={facebook_out} /></li>
//               <li><img src={xlogo.src} style={{paddingRight:"10px"}} className="h3"/></li>
//               <li><img src={lilogo.src} onMouseEnter={linkedin} onMouseLeave={linkedin_out} className="linked1"style={{paddingRight:"10px"}}/></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;
