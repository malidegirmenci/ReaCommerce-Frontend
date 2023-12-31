

export default function  CategoryCard(props) {
    const { title,rating, gender, img } = props.data;
        return (
        <div className="flex flex-col justify-center items-center bg-cover bg-center w-full h-80 relative cursor-pointer ease-out duration-300 hover:scale-105 hover:ease-out hover:duration-300" style={{ backgroundImage: `url('${img}')` }}>
            <h6 className="text-white text-base font-bold leading-normal tracking-tight z-1">{gender == 'k' ? 'KADIN' : 'ERKEK'}</h6>
            <h6 className="text-white text-base font-bold leading-normal tracking-tight z-1">{title}</h6>
            <h6 className="text-white text-sm font-normal leading-tight tracking-tight z-1">{rating} rating</h6>
            <div className="bg-neutral-800 bg-opacity-25 absolute w-full h-full"></div>
        </div>
    )
}