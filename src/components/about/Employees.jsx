import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../../data/data"
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
export default function Employees() {
    const { employees } = data.about;
    const ourTeam = employees.map((item, index) => {
        return (
            <div className="flex flex-col items-center w-1/4 ring-1 ring-slate-400 rounded shadow-lg max-sm:w-full" key={index}>
                <img src={item.src} className="w-full h-full rounded-t" />
                <div className="flex flex-col gap-2 text-center py-3">
                    <h5 className="text-slate-800 text-base font-bold leading-normal tracking-tight">{item.fullname}</h5>
                    <h6 className="text-neutral-500 text-sm font-bold leading-normal tracking-tight">{item.department}</h6>
                    <div className="flex gap-3 items-center text-[#23A6F0]">
                        <FontAwesomeIcon icon={faFacebook} size="lg" />
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                        <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="flex flex-wrap gap-10 items-center justify-center max-sm:flex-col max-sm:w-[80%] max-sm:mx-auto">
            {ourTeam}
        </div>
    )
}