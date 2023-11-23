import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function PostCard(props) {
    const { src, title, description, date, comments, learnMore } = props.data;
    return (
        <div className="flex flex-col border basis-[30%]">
            <div className="relative">
                <img src={src} className="h-[500px] w-full object-cover" />
                <div className="absolute rounded-sm shadow px-2.5 left-5 top-5 bg-red-500 text-white text-sm font-bold leading-normal tracking-tight">NEW</div>
            </div>
            <div className="flex flex-col p-6 gap-3">
                <div className="flex gap-4">
                    <h6 className="text-blue-300 text-xs font-normal leading-none tracking-tight">Google</h6>
                    <h6 className="text-neutral-500 text-xs font-normal leading-none tracking-tight">Trending</h6>
                    <h6 className="text-neutral-500 text-xs font-normal leading-none tracking-tight">New</h6>
                </div>
                <h4 className="text-slate-800 text-xl font-normal leading-[30px] tracking-tight w-[60%]">{title}</h4>
                <p className="text-neutral-500 text-sm font-normal leading-tight tracking-tight w-[60%]">{description}</p>
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faClock} size="sm" className="p-1" />
                        <p className="text-neutral-500 text-xs font-normal leading-none tracking-tight">{date}</p>
                    </div>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faChartSimple} size="sm" className="p-1" />
                        <p className="text-neutral-500 text-xs font-normal leading-none tracking-tight">{comments} comments</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center cursor-pointer">
                    <p className="text-neutral-500 text-sm font-bold leading-normal tracking-tight">Learn More</p>
                    <FontAwesomeIcon icon={faArrowRight} size="lg" className="p-1 text-[#23A6F0]" />
                </div>
            </div>
        </div>
    );

}