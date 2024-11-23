import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { GrLanguage } from "react-icons/gr";
import { BiLogoTelegram } from "react-icons/bi";
import { conectionBox, OtherSkilsBox, softSkilsBox } from "../../datas";
import { Button, Progress } from "@material-tailwind/react";
import { PiSelectionForeground } from "react-icons/pi";
import { FaDownload } from "react-icons/fa6";
export default function SideBar(props) {
   return (
      <>
         {props.contactSide ? (
            <div className=" grid grid-cols-2 rounded-[17px] p-4 my-3.5" style={{ border: "1px solid rgb(255,235,59)" }}>
               <div className=" my-auto space-y-3.5 ">
                  {conectionBox.map((item) => (
                     <div className="conection-box px-4 py-3 flex gap-x-4 text-[rgb(255,235,59)] bg-[rgb(255,235,59)]/5 rounded-lg">
                        <span className=" my-auto">{item.icon}</span>
                        <span className=" text-[12px] my-auto danaMedium ">{item.text}</span>
                     </div>
                  ))}
               </div>
               <div className=" my-auto">
                  <div className=" bg-[rgb(255,235,59)] rounded-full size-[130px] mx-auto relative overflow-hidden ">
                     <img src="/images/photo15056327974-removebg-preview.png" alt="profile" className=" mx-auto scale-[0.6]  absolute inset-0 m-auto " />
                  </div>
                  <div className="  text-[20px]">
                     <div className=" title-profile mx-auto w-max ">امید گودرزی</div>
                     <div className=" job-profile mx-auto w-max text-gray-400">توسعه دهنده وب</div>
                  </div>
                  <div className=" flex gap-x-3   mx-auto w-max text-[#263238]">
                     <div className=" rounded-full  cursor-pointer p-2 bg-[rgb(255,235,59)]">
                        <BiLogoTelegram style={{ fontSize: 12 }} />
                     </div>
                     <div className=" rounded-full  cursor-pointer p-2 bg-[rgb(255,235,59)]">
                        <GrLanguage style={{ fontSize: 12 }} />
                     </div>
                     <div className=" rounded-full  cursor-pointer p-2 bg-[rgb(255,235,59)]">
                        <RiTwitterXFill style={{ fontSize: 12 }} />
                     </div>
                     <div className=" rounded-full  cursor-pointer p-2 bg-[rgb(255,235,59)]">
                        <FaLinkedinIn style={{ fontSize: 12 }} />
                     </div>
                     <div className=" rounded-full  cursor-pointer p-2 bg-[rgb(255,235,59)]">
                        <GrFacebookOption style={{ fontSize: 12 }} />
                     </div>
                  </div>
               </div>
            </div>
         ) : props.skilsSide ? (
            <div className=" mx-8">
               <div className="Languages  space-y-[10px]  pt-4">
                  <p className=" danaMedium text-4xl font-bold mb-[42px]">زبان ها</p>
                  <ul className="list-item">
                     <li className=" danaMedium  flex gap-x-20  ">
                        <div className=" w-full my-auto flex relative">
                           <span className=" absolute bottom-5 left-0 text-gray-400">70%</span>
                           <span className="text-[18px] text-gray-400 bottom-5 absolute ">انگلیسی</span>
                           <Progress value={70} size="lg" color="amber" />
                        </div>
                     </li>
                  </ul>
               </div>
               <div className="OtherSkils  py-14">
                  <div className="   space-y-[10px] ">
                     <p className=" danaMedium text-4xl font-bold mb-[42px]">سایر مهارت ها</p>
                     <ul className="list-item  space-y-20">
                        {OtherSkilsBox.map((item) => (
                           <li className=" danaMedium flex">
                              <div className=" w-full my-auto flex relative">
                                 <span className=" absolute bottom-5 left-0 text-gray-400">{item.value}%</span>
                                 <span className="text-[18px] text-gray-400 bottom-5 absolute ">{item.name}</span>
                                 <Progress value={item.value} size="md" color="amber" />
                              </div>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
               <div className="SoftSkils  space-y-[10px] py-14 relative" style={{ borderTop: "1px solid rgb(255, 235, 59)", borderBottom: "1px solid rgb(255, 235, 59)" }}>
                  <div className=" absolute inset-0 m-auto top-56 opacity-45">
                     <img src="/images/istockphoto-1470714068-612x612_prev_ui.png" alt="" className="  mb-20 scale-[1.5]" />
                  </div>
                  <p className=" danaMedium text-4xl font-bold mb-[10px] !z-50">مهارت های نرم</p>
                  <ul className="list-item  space-y-4 !z-50">
                     {softSkilsBox.map((item) => (
                        <li className=" danaMedium flex">
                           <div className=" w-full my-auto flex relative">
                              <span className="text-[18px] text-gray-400 flex gap-x-3">
                                 <PiSelectionForeground className=" !text-[rgb(255,235,59)]" style={{ fontSize: 20 }} />
                                 {item.name}
                              </span>
                           </div>
                        </li>
                     ))}
                  </ul>
               </div>
               <div className=" pt-14">
                  <Button className=" bg-[rgb(255,235,59)] danaDemiBold w-full py-7">
                     <div className=" flex m-auto w-max gap-x-5">
                        <span className=" danaDemiBold text-[20px] my-auto text-[#263238]">دانلود رزومه کاری من</span>
                        <FaDownload className=" text-[#263238]" style={{ fontSize: 25 }} />
                     </div>
                  </Button>
               </div>
            </div>
         ) : (
            <div className="SideBar  text-white danaMedium rounded-[17px]" style={{ border: "1px solid rgb(255,235,59)" }}>
               <div className="Profile  py-20">
                  <div className=" bg-[rgb(255,235,59)] rounded-full size-[170px] mx-auto relative overflow-hidden ">
                     <img src="/images/photo15056327974-removebg-preview.png" alt="profile" className=" mx-auto scale-[0.6]  absolute inset-0 m-auto top-6" />
                  </div>
                  <div className=" mt-12 text-[20px] space-y-3">
                     <div className=" title-profile mx-auto w-max ">امید گودرزی</div>
                     <div className=" job-profile mx-auto w-max text-gray-400">توسعه دهنده وب</div>
                  </div>
                  <div className=" flex gap-x-7 mt-[17px] pb-12 mx-auto w-max text-[#263238]">
                     <div className=" rounded-full  cursor-pointer p-2 bg-[rgb(255,235,59)]">
                        <BiLogoTelegram style={{ fontSize: 20 }} />
                     </div>
                     <div className=" rounded-full  cursor-pointer p-2 bg-[rgb(255,235,59)]">
                        <GrLanguage style={{ fontSize: 20 }} />
                     </div>
                     <div className=" rounded-full  cursor-pointer p-2 bg-[rgb(255,235,59)]">
                        <RiTwitterXFill style={{ fontSize: 20 }} />
                     </div>
                     <div className=" rounded-full  cursor-pointer p-2 bg-[rgb(255,235,59)]">
                        <FaLinkedinIn style={{ fontSize: 20 }} />
                     </div>
                     <div className=" rounded-full  cursor-pointer p-2 bg-[rgb(255,235,59)]">
                        <GrFacebookOption style={{ fontSize: 20 }} />
                     </div>
                  </div>
                  <div className=" mx-16">
                     <div className=" mt-2 space-y-3  py-14" style={{ borderTop: "1px solid rgb(255, 235, 59)", borderBottom: "1px solid rgb(255, 235, 59)" }}>
                        {conectionBox.map((item) => (
                           <div className="conection-box px-4 py-3 flex gap-x-9 text-[rgb(255,235,59)] bg-[rgb(255,235,59)]/5 rounded-lg">
                              <span className=" my-auto">{item.icon}</span>
                              <span className=" text-3xl my-auto danaMedium ">{item.text}</span>
                           </div>
                        ))}
                     </div>
                     <div className="Languages  space-y-[10px]  pt-14">
                        <p className=" danaMedium text-4xl font-bold mb-[42px]">زبان ها</p>
                        <ul className="list-item">
                           <li className=" danaMedium  flex gap-x-20  ">
                              <div className=" w-full my-auto flex relative">
                                 <span className=" absolute bottom-5 left-0 text-gray-400">70%</span>
                                 <span className="text-[18px] text-gray-400 bottom-5 absolute ">انگلیسی</span>
                                 <Progress value={70} size="lg" color="amber" />
                              </div>
                           </li>
                        </ul>
                     </div>
                     <div className="OtherSkils  py-14">
                        <div className="   space-y-[10px] ">
                           <p className=" danaMedium text-4xl font-bold mb-[42px]">سایر مهارت ها</p>
                           <ul className="list-item  space-y-20">
                              {OtherSkilsBox.map((item) => (
                                 <li className=" danaMedium flex">
                                    <div className=" w-full my-auto flex relative">
                                       <span className=" absolute bottom-5 left-0 text-gray-400">{item.value}%</span>
                                       <span className="text-[18px] text-gray-400 bottom-5 absolute ">{item.name}</span>
                                       <Progress value={item.value} size="md" color="amber" />
                                    </div>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                     <div className="SoftSkils  space-y-[10px] py-14 relative" style={{ borderTop: "1px solid rgb(255, 235, 59)", borderBottom: "1px solid rgb(255, 235, 59)" }}>
                        <div className=" absolute inset-0 m-auto top-56 opacity-45">
                           <img src="/images/istockphoto-1470714068-612x612_prev_ui.png" alt="" className="  mb-20 scale-[1.5]" />
                        </div>
                        <p className=" danaMedium text-4xl font-bold mb-[10px] !z-50">مهارت های نرم</p>
                        <ul className="list-item  space-y-4 !z-50">
                           {softSkilsBox.map((item) => (
                              <li className=" danaMedium flex">
                                 <div className=" w-full my-auto flex relative">
                                    <span className="text-[18px] text-gray-400 flex gap-x-3">
                                       <PiSelectionForeground className=" !text-[rgb(255,235,59)]" style={{ fontSize: 20 }} />
                                       {item.name}
                                    </span>
                                 </div>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className=" pt-14">
                        <Button className=" bg-[rgb(255,235,59)] danaDemiBold w-full py-7">
                           <div className=" flex m-auto w-max gap-x-5">
                              <span className=" danaDemiBold text-[20px] my-auto text-[#263238]">دانلود رزومه کاری من</span>
                              <FaDownload className=" text-[#263238]" style={{ fontSize: 25 }} />
                           </div>
                        </Button>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </>
   );
}
////
