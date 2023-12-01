export default function CategoryCard(props) {
    const {name, img} = props.data;
    return (
        <>
            <img src={img} className='w-full h-full object-cover rounded-md shadow-2xl' />
            <button className=' absolute bottom-[5%] left-[5%] w-44 text-slate-800 text-base font-bold leading-normal tracking-tight py-3 bg-white'>{name}</button>
        </>
    )
}