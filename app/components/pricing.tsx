import Image from "next/image";
import Check from '../../public/assets/check.svg';

export function Pricing() {
    return (
        <div className="py-[48px] lg:py-[60px]">
            <h1 className="text[#172026] text-center text-2xl font-medium lg:text-[42px]">Flexible plans for you</h1>
            <p className="pt-[16px] pb-[40px] text-center text-[#36485c] lg:text-[18px]">
                No hidden fees</p>
            <div className="flex flex-col gap-y-6 gap-x-[24px] lg:flex-row">

                <div className="w-full rounded-[6px] bg-[#f5f4ff] p-6 flex flex-col lg:justify-between">
                    <div>
                        <h3 className="text-medium text-[#4328eb] text-[18px] lg:text-xl">
                            Free Trial
                        </h3>

                        <p className="pt-[12px] text-[#36485c] lg:text-[18px]">
                            Perfect for testing the water
                        </p>

                        <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">
                            0$<span className="text-[#5f7896]">/mo</span>
                        </h2>

                        <ul className="flex flex-col gap-y-2 pt-4 text-[#5f7896]">
                            <li className="flex items-center gap-x-2">
                                <span>
                                    <Image src={Check} alt="Check sign"/>
                                </span>
                                Lorem ipsum dolor sit amet
                            </li>
                            <li className="flex items-center gap-x-2">
                                <span>
                                    <Image src={Check} alt="Check sign"/>
                                </span>
                                Lorem ipsum dolor sit amet
                            </li>
                            <li className="flex items-center gap-x-2">
                                <span>
                                    <Image src={Check} alt="Check sign"/>
                                </span>
                                Lorem ipsum dolor sit amet
                            </li>
                        </ul>
                    </div>
                    <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328eb] font-medium">
                        Start Trial
                    </button>
                </div>

                <div className="w-full rounded-[6px] bg-[#4328eb] p-6 flex flex-col">
                    <div>
                        <h3 className="text-medium text-white text-[18px] lg:text-xl">
                            Business
                        </h3>

                        <p className="pt-[12px] text-[#f4f8fa] lg:text-[18px]">
                            Perfect for small business
                        </p>

                        <h2 className="pt-4 text-2xl font-medium lg:text-[32px] text-white">
                            500$<span className="text-[#f4f8fa]">/mo</span>
                        </h2>

                        <ul className="flex flex-col gap-y-2 pt-4 text-[#f4f8fa]">
                            <li className="flex items-center gap-x-2">
                                <span>
                                    <Image src={Check} alt="Check sign"/>
                                </span>
                                Lorem ipsum dolor sit amet
                            </li>
                            <li className="flex items-center gap-x-2">
                                <span>
                                    <Image src={Check} alt="Check sign"/>
                                </span>
                                Consectetur adipiscing elit
                            </li>
                            <li className="flex items-center gap-x-2">
                                <span>
                                    <Image src={Check} alt="Check sign"/>
                                </span>
                                Sed do eiusmod tempor incididdunt
                            </li>
                            <li className="flex items-center gap-x-2">
                                <span>
                                    <Image src={Check} alt="Check sign"/>
                                </span>
                                Lorem ipsum dolor sit amet
                            </li>
                            <li className="flex items-center gap-x-2">
                                <span>
                                    <Image src={Check} alt="Check sign"/>
                                </span>
                                Sed do eiusmod tempor incididdunt
                            </li>
                        </ul>
                    </div>
                    <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328eb] font-medium">
                        Get Started
                    </button>
                </div>

                <div className="w-full rounded-[6px] bg-[#f5f4ff] p-6 flex flex-col lg:justify-between">
                    <div>
                        <h3 className="text-medium text-[#4328eb] text-[18px] lg:text-xl">
                            Enterprise
                        </h3>

                        <p className="pt-[12px] text-[#36485c] lg:text-[18px]">
                            Perfect for big companies
                        </p>

                        <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">
                            Custom
                        </h2>

                        <p className="pt-4 text-[16px] text-[#36485c]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat cupiditate et dicta doloremque ratione. 
                        </p>

                        <p className="pt-2 text-[16px] text-[#36485c]">
                            Vel, nihil provident. Quam molestias aliquam, harum fugit exercitationem aut minus illo eaque quae ducimus dolore.
                        </p>
                    </div>
                    <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328eb] font-medium">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    )
}