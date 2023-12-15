import { data } from "../../data/data";
import PostCard from "./PostCard";
export default function FeaturedPosts() {
    const { featuredPosts } = data.home;
    const productCards = featuredPosts.map((item) => {
        return <PostCard data={item} key={item.key}/>
    })
    return (
        <div className="py-28 gap-20 flex-col flex justify-center items-center ">
            <div className='text-center flex flex-col gap-3'>
                <h6 className="text-sky-500 text-sm font-bold leading-normal tracking-tight"> Practice Advice </h6>
                <h2 className="text-slate-800 text-[40px] font-bold leading-loose tracking-tight">Featured Posts</h2>
                <p className="text-neutral-500 text-sm font-normal leading-tight tracking-tight ">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics  </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-7 w-[90%] max-sm:w-screen">
                {productCards}
            </div>
        </div>
    )
}