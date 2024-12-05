import { Navbar, Typography, IconButton, Button, Input, Drawer } from "@material-tailwind/react";
import { IoMdArrowDropright } from "react-icons/io";
import { useState } from "react";
import SideBar from "../SideBar/SideBar";
import { MdMenuOpen } from "react-icons/md";
import { TiMessageTyping } from "react-icons/ti";
export function Header() {
   const [openTop, setOpenTop] = useState(false);
   const [openRight, setOpenRight] = useState(false);
   //
   const openDrawerTop = () => setOpenTop(true);
   const closeDrawerTop = () => setOpenTop(false);
   const openDrawerRight = () => setOpenRight(true);
   const closeDrawerRight = () => setOpenRight(false);
   //
   return (
      <Navbar
         variant="gradient"
         color="blue-gray"
         className="mx-auto block md:hidden  rounded-t-none rounded-b-[45px]   max-w-screen-xl from-[#0A0A0A] bg-gradient-to-t to-[rgb(255,235,59)]/65 px-10 py-3"
      >
         <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
            <div className=" flex  relative">
               <MdMenuOpen onClick={openDrawerRight} className=" " style={{ fontSize: 25 }} />
               <Typography as="a" href="#" className="  my-[1px] cursor-pointer danaMedium text-2xl py-1">
                  سایر مهارت ها
               </Typography>
            </div>

            <div>
               {/* <Button onClick={openDrawerTop}> */}
               <TiMessageTyping onClick={openDrawerTop} className=" " style={{ fontSize: 30 }} />
               {/* </Button> */}
            </div>
            <div className=" flex">
               <IoMdArrowDropright style={{ fontSize: 25 }} className=" my-auto" />
               <Typography as="a" href="#" variant="h6" className="  ml-2 cursor-pointer mt-2 danaMedium text-2xl">
                  ارتباط با من
               </Typography>
            </div>
            {/* // */}
            <Drawer placement="top" open={openTop} onClose={closeDrawerTop} className="p-4 h-max">
               {openTop ? <SideBar contactSide={true} /> : ""}
            </Drawer>
            <Drawer placement="right" open={openRight} onClose={closeDrawerRight} className="p-4 h-max">
               {openRight ? <SideBar skilsSide={true} /> : ""}
            </Drawer>
         </div>
      </Navbar>
   );
}
