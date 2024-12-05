import { IoLogoCss3, IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { FaBootstrap, FaLocationDot, FaReact } from "react-icons/fa6";
import { SiStatuspage } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TfiHtml5 } from "react-icons/tfi";
import { FaJsSquare } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
//
const conectionBox = [
   { id: 1, text: "gamyd564@gmail.com", icon: <IoMdMail style={{ fontSize: 20 }} /> },
   { id: 2, text: "09231230752", icon: <FaPhone style={{ fontSize: 20 }} /> },
   // { id: 3, text: "http://localhost:5173/", icon: <BsGlobe style={{ fontSize: 32 }} /> },
   { id: 3, text: "استان مرکزی , خمین", icon: <FaLocationDot style={{ fontSize: 20 }} /> },
   { id: 4, text: "1385/02/03", icon: <SiStatuspage style={{ fontSize: 20 }} /> },
];
const softSkilsBox = [
   { id: 1, name: " مسیولیت پذیری", score: 5 },
   { id: 2, name: "کار تیمی", score: 5 },
   { id: 3, name: "انعطاف پذیری", score: 5 },
   { id: 4, name: "رقابت جویی", score: 3 },
   { id: 5, name: "همدلی", score: 5 },
   { id: 6, name: "آموزش دادن", score: 3 },
   { id: 7, name: "روابط عمومی", score: 5 },
   { id: 8, name: "مهارت حل مساله", score: 4 },
   { id: 9, name: "تفکر کارآفرینی", score: 4 },
];

const OtherSkilsBox = [
   { id: 1, name: "axios", value: 90 },
   { id: 2, name: "responsive design", value: 90 },
   { id: 3, name: "mui & material tailwind", value: 90 },
   { id: 4, name: "git & github", value: 60 },
   { id: 5, name: "React Hooks", value: 90 },
   { id: 6, name: "restFull Api", value: 85 },
];
const MainSkilsBox = [
   {
      id: 1,
      name: "html",
      icon: (
         <div className=" p-[7.1px]">
            <TfiHtml5 className=" text-[#ff8400] !size-[65px] " />
         </div>
      ),
      color: "bg-[#ff8400]/5",
      value: 90,
   },
   {
      id: 2,
      name: "css",
      icon: (
         <div className=" p-[5px]">
            <IoLogoCss3 className=" text-blue-500 !size-[70px] " />
         </div>
      ),
      color: "bg-blue-500/5",
      value: 80,
   },

   { id: 4, name: "ts", icon: <BiLogoTypescript className=" text-[#4d29ff] !size-32 " />, color: "bg-[#4d29ff]/5", value: 85 },
   {
      id: 3,
      name: "js",
      icon: (
         <div className=" p-[6px]">
            <FaJsSquare className=" text-[#fff129] !size-[68px] " />
         </div>
      ),
      color: "bg-[#fff129]/5",
      value: 85,
   },
   { id: 5, name: "react", icon: <FaReact className=" text-[#2966ff] !size-32 " />, color: "bg-[#2966ff]/5", value: 90 },
   { id: 6, name: "tailwind", icon: <RiTailwindCssFill className=" text-[rgb(38,168,186)] !size-32 " />, color: "bg-[rgb(38,168,186)]/5", value: 90 },
   { id: 7, name: "bootstrap", icon: <FaBootstrap className=" text-[#9802de] !size-32 " />, color: "bg-[#9802de]/5", value: 85 },
];
export { conectionBox, softSkilsBox, OtherSkilsBox, MainSkilsBox };
