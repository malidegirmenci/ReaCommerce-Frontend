export default function CategoryCard(props) {
    const { title, amount, src } = props.data;
    return (
        <div className="flex flex-col justify-center items-center bg-cover bg-center w-full h-80 relative" style={{ backgroundImage: `url('${src}')` }}>
            <h6 className="text-white text-base font-bold leading-normal tracking-tight z-1">{title}</h6>
            <h6 className="text-white text-sm font-normal leading-tight tracking-tight z-1">{amount} Items</h6>
            <div className="bg-neutral-800 bg-opacity-25 absolute w-full h-full"></div>
        </div>
    )
}