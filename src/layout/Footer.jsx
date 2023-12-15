import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <div className="w-[85%] mx-auto max-sm:grid max-sm:grid-flow-row-dense">
            <div className="">
                <div className="flex justify-between items-center py-10 max-sm:block">
                    <h3 className="text-slate-800 text-2xl font-bold leading-loose tracking-tight">Bandage</h3>
                    <div className="text-[#23A6F0] gap-3 flex pr-16">
                        <FontAwesomeIcon icon={faFacebook} size="lg" />
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                        <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </div>
                </div>
                <hr className="border border-neutral-200" />
            </div>
            <div className="py-12 flex gap-8 justify-between max-sm:grid max-sm:grid-flow-row-dense">
                <div className="flex flex-col gap-4">
                    <h5 className="text-slate-800 text-base font-bold leading-normal tracking-tight">Company info</h5>
                    <div className="flex flex-col gap-3">
                        <h6 className="text-neutral-500 text-sm font-bold leading-normal tracking-tight">About Us</h6>
                        <h6 className="text-neutral-500 text-sm font-bold leading-normal tracking-tight">Carrier</h6>
                        <h6 className="text-neutral-500 text-sm font-bold leading-normal tracking-tight">We are hiring</h6>
                        <h6 className="text-neutral-500 text-sm font-bold leading-normal tracking-tight">Blog</h6>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h5 className="text-slate-800 text-base font-bold leading-normal tracking-tight">Legal</h5>
                    <div className="flex flex-col gap-3">
                        <h6 className="text-neutral-500 text-sm font-bold leading-normal tracking-tight">About Us</h6>
                        <h6 className="text-neutral-500 text-sm font-bold leading-normal tracking-tight">Carrier</h6>
                        <h6 className="text-neutral-500 text-sm font-bold leading-normal tracking-tight">We are hiring</h6>
                        <h6 className="text-neutral-500 text-sm font-bold leading-normal tracking-tight">Blog</h6>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h5 className="text-slate-800 text-base font-bold leading-normal tracking-tight">Features</h5>
                    <div className="flex flex-col gap-3">
                        <h6 className="text-neutral-500 text-sm font-bold leading-normal tracking-tight">Business Marketing</h6>
                        <h6 className="text-neutral-500 text-sm font-bold leading-normal tracking-tight">User Analytic</h6>
                        <h6 className="text-neutral-500 text-sm font-bold leading-normal tracking-tight">Live Chat</h6>
                        <h6 className="text-neutral-500 text-sm font-bold leading-normal tracking-tight">Unlimited Support </h6>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h5 className="text-slate-800 text-base font-bold leading-normal tracking-tight">Resources</h5>
                    <div className="flex flex-col gap-3">
                        <h6 className="text-neutral-500 text-sm font-bold leading-normal tracking-tight">IOS & Android</h6>
                        <h6 className="text-neutral-500 text-sm font-bold leading-normal tracking-tight">Watch a Demo</h6>
                        <h6 className="text-neutral-500 text-sm font-bold leading-normal tracking-tight">Customers</h6>
                        <h6 className="text-neutral-500 text-sm font-bold leading-normal tracking-tight">API              </h6>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h5 className="text-slate-800 text-base font-bold leading-normal tracking-tight">Get in Touch</h5>
                    <div className="flex flex-col items-start">
                        <div className="flex items-center">
                            <input type="text" placeholder="Your Email" className="p-3 border rounded-l-md text-neutral-500 font-normal leading-7 tracking-tight bg-stone-50 " />
                            <button className="py-3 px-6 border border-neutral-200 bg-[#23A6F0] text-white rounded-r-md">Subscribe</button>
                        </div>
                        <p className="text-neutral-500 text-xs font-normal leading-7 tracking-tight">Lore imp sum dolor Amit</p>
                    </div>
                </div>
            </div>
            <div className="pb-4">
                <p className=" text-neutral-500 text-sm font-bold leading-normal tracking-tight">Made With Love By Finland All Right Reserved</p>
            </div>
        </div>
    )
}