import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
export default function CategoryCard(props) {
    const { pathname, search } = useLocation();
    const { id,title, rating, gender, img, code } = props.data;
    return (
        <Link
            to={`/shopping/${gender === 'k' ? 'kadin' : 'erkek'}/${code.slice(2)}${search}`}
            className="flex flex-col justify-center items-center bg-cover bg-center w-full h-80 relative cursor-pointer ease-out duration-300 hover:scale-105 hover:ease-out hover:duration-300"
            style={{ backgroundImage: `url('${img}')` }} key={id}>
            <h6 className="text-white text-base font-bold leading-normal tracking-tight z-1">{gender == 'k' ? 'KADIN' : 'ERKEK'}</h6>
            <h6 className="text-white text-base font-bold leading-normal tracking-tight z-1">{title}</h6>
            <h6 className="text-white text-sm font-normal leading-tight tracking-tight z-1">{rating} rating</h6>
            <div className="bg-neutral-800 bg-opacity-25 absolute w-full h-full"></div>
        </Link>
    )
}