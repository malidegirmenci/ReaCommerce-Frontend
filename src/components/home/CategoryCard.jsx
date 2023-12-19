export default function CategoryCard(props) {
    const {name, img} = props.data;
    return (
        <>
            <img src={img} className='w-full h-full object-cover rounded-md shadow-2xl' />
            <button className='rounded absolute bottom-[5%] left-[5%] w-[40%] max-sm:uppercase text-slate-800 text-base font-bold leading-normal tracking-tight py-3 bg-white'>{name}</button>
        </>
    )
}