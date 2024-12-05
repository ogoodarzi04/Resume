import React from "react";
import "./Home.css";
import SideBar from "../../Components/SideBar/SideBar";
import { Button } from "@material-tailwind/react";
import { IoArrowBack } from "react-icons/io5";
import { MainSkilsBox } from "../../datas";
import { Link } from "react-router-dom";
import { IoMdArrowUp } from "react-icons/io";
import { Header } from "../../Components/Header/Header";
import { FaDownload } from "react-icons/fa6";

export default function Home() {
   return (
      <>
         <Header />
         <div className="Home flex flex-col-reverse md:grid md:grid-cols-5 gap-x-12 md:px-14 px-5 py-9">
            <div className=" md:col-span-1 md:!mt-0 mt-24 hidden md:block">
               <SideBar />
            </div>
            <div className=" md:col-span-4 text-white danaMedium  ">
               <div className="  rounded-[17px] flex flex-col-reverse md:grid md:grid-cols-2 md:!px-32 px-11" style={{ border: "1px solid rgb(255,235,59)" }}>
                  <div className="interduction danaBold text-[36px] md:text-[60px]  col-span-1 md:py-36 py-20 mx-auto">
                     <div className=" mx-auto ">
                        <p className=" ">من امید گودرزی</p>
                        <span className=" text-[rgb(255,235,59)]">
                           برنامه نویس فرانت
                           <span className=" !text-white"> هستم</span>
                        </span>
                     </div>
                     <div className=" mt-8  space-y-[10px] text-2xl  md:!text-[17px] text-gray-400 ">
                        <i className=" danaMedium ">
                           برنامه نویس فرانت اند با تجربه بیش از ۴ سال در توسعه وب و طراحی رابط کاربری. مهارت‌های من شامل HTML، CSS، JavaScript و فریم‌ورک‌هایی مانند React است. توانایی حل مسائل پیچیده
                           و ایجاد تجربه کاربری بهینه از نقاط قوت من است. به تیم‌های چندرشته‌ای با اهتمام به کار تیمی و همکاری نزدیک با طراحان و توسعه‌دهندگان علاقه‌مندم. هدف من ایجاد وب‌سایت‌های
                           کاربرپسند و با کیفیت بالا است که نیازهای مشتریان را برآورده سازد.
                        </i>
                     </div>
                     <div className=" pt-14">
                        <Button className=" bg-[rgb(255,235,59)] danaDemiBold w-60 py-7">
                           <div className=" flex m-auto w-max gap-x-5 text-[#263238]">
                              <span className=" danaDemiBold text-[20px] my-auto ">این منم</span>
                              <IoArrowBack className=" !font-bold md:block hidden" style={{ fontSize: 20 }} />
                              <IoMdArrowUp className=" !font-bold block md:hidden" style={{ fontSize: 20 }} />
                           </div>
                        </Button>
                     </div>
                  </div>
                  <div className="my-image relative col-span-1 ">
                     <div className="">
                        <img className=" mt-24 mx-auto md:-scale-x-[1]" src="/images/undraw_join_re_w1lh.svg" alt="" />
                     </div>
                  </div>
               </div>
               <div className="MainSkils mt-28">
                  <div className="SkillBoxes mt-12 grid md:grid-cols-7 gap-y-6 ">
                     {MainSkilsBox.map((item) => (
                        <div class="box">
                           <div class="percent">
                              <svg>
                                 <circle className={item.name} cx="70" cy="70" r="70"></circle>
                                 <circle className={item.name} cx="70" cy="70" r="70"></circle>
                              </svg>
                              <div class="num  rounded-full ">
                                 <h2 className={` ${item.color} rounded-full p-[15px] `}>{item.icon}</h2>
                              </div>
                           </div>
                           <h2 class="text">{item.value}%</h2>
                        </div>
                     ))}
                  </div>
               </div>

               <div className=" my-works  mt-36">
                  <div className=" ">
                     <p className=" mx-auto w-max danaBold md:text-6xl text-5xl">نمونه کار های من</p>
                     <div className=" mt-7 text-gray-400 md:px-96">
                        <i className=" text-2xl  md:!text-[17px]">
                           {" "}
                           این نمونه کارهایی که مشاهده میکنید حاصل 2 سال آموزش ,تلاش و کسب تجربه به صورت خودآموز بوده که تقریبا زمان زیادی ازم گرفته شد برای لانچ کردن این پروژه ها و سختی های زیادی
                           برام به دنبال داشت اما طی همین چند پروژه تجربه های زیادی کسب کردم و چالش های زیادی رو پشت سر گذروندم.{" "}
                        </i>
                     </div>
                  </div>
                  <div className=" my-works grid md:grid-cols-3 mt-5 gap-14">
                     <div>
                        <Link to={"https://learnimoo.vercel.app/"}>
                           <div className="w-full min-h-[300px] bg-cover cursor-pointer hoverBox resome1"></div>
                        </Link>
                        <p className=" float-left text-4xl mt-[19px]">react + tailwind</p>
                     </div>
                     <div>
                        <Link to={"https://learnimoo.liara.run/p-admin/"}>
                           <div className="w-full min-h-[300px] bg-cover cursor-pointer hoverBox resome2"></div>
                        </Link>
                        <p className=" float-left text-4xl mt-[19px]">react + tailwind</p>
                     </div>
                     <div>
                        <Link to={"https://bonmano-custom.netlify.app/"}>
                           <div className="w-full min-h-[300px] bg-cover cursor-pointer hoverBox resome3"></div>
                        </Link>
                        <p className=" float-left text-4xl mt-[19px]">react + tailwind</p>
                     </div>
                     <div>
                        <Link to={"https://wodmart-shop.vercel.app/"}>
                           <div className="w-full min-h-[300px] bg-cover cursor-pointer hoverBox resome4"></div>
                        </Link>
                        <p className=" float-left text-4xl mt-[19px]">js + tailwind</p>
                     </div>
                  </div>
               </div>
               <div className=" pb-24 pt-14 block md:hidden">
                  <Button className=" bg-[rgb(255,235,59)] danaDemiBold w-full py-7">
                     <div className=" flex m-auto w-max gap-x-5">
                        <span className=" danaDemiBold text-[20px] my-auto text-[#263238]">دانلود رزومه کاری من</span>
                        <FaDownload className=" text-[#263238]" style={{ fontSize: 25 }} />
                     </div>
                  </Button>
               </div>
            </div>
         </div>
      </>
   );
}
