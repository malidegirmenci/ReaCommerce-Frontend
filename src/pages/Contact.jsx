import { useState } from "react";
import { data } from "../data/data"
import ContactForm from "../components/contact/ContactForm";
export default function Contact() {
    const { backgroundSrc, locations } = data.contact;
    const [isShowForm, setShowForm] = useState(false);

    const locationsArr = locations.map((item, index) => {
        return (
            <div className="p-4 rounded-sm " key={index}>
                <div className="text-white text-2xl font-bold leading-loose">{item.city}</div>
                <div className="text-white text-xl font-normal  leading-[30px]">{item.address}</div>
                <div className="w-[58px] h-[2px] my-2 bg-[#23A6F0]" />
                <div className="text-gray-200 text-base font-bold">{item.postCode}</div>
                <div className="text-gray-200 text-base font-bold">Phone: {item.phone}</div>
                <div className="text-gray-200 text-base font-bold">Fax: {item.fax}</div>
            </div>
        )
    })
    return (
        <>
            <div className="relative h-screen bg-cover bg-right bg-no-repeat" style={{ backgroundImage: `url('${backgroundSrc}')` }}>
                <div className="absolute z-10 inset-0 flex items-center w-[80%] mx-auto gap-20">
                    {isShowForm ? <ContactForm setShowForm={setShowForm} /> :
                        <div className="flex flex-col items-center w-1/2">
                            <h2 className="text-white text-4xl font-bold leading-[50px] tracking-tight mb-4">CONTACT US</h2>
                            <p className="text-white text-sm font-normal leading-tight mb-6">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
                            <button onClick={() => setShowForm(!isShowForm)} className="px-10 py-4 rounded-sm bg-[#23A6F0] text-white text-sm font-bold leading-snug tracking-tight">CONTACT US</button>
                        </div>}
                    <div className="flex flex-wrap gap-10 w-1/2">
                        {locationsArr}
                    </div>
                </div>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-black to-transparent" />
            </div>
        </>
    )
}