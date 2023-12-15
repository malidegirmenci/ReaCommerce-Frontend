import { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap';

export default function HeroBot(props) {
    const { slides } = props.data;
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const newSlides = slides.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.key}
            >
                <div className={`flex items-center justify-left relative max-sm:flex-col-reverse max-sm:bg-[#23856d]`}>
                    <div className='w-full'>
                        <img src={item.src} alt={item.altText} className='w-full h-screen object-cover ' />
                    </div>
                    <div className=' flex flex-col gap-9 my-9 ml-[15%] absolute max-sm:text-center max-sm:items-center max-sm:ml-0 max-sm:mt-[40%] max-sm:static'>
                        <h5 className="text-white text-base font-bold leading-normal tracking-tight">{item.h5}</h5>
                        <h1 className='text-white text-6xl font-bold leading-normal tracking-tight w-[60%]'>{item.h1}</h1>
                        <h4 className='text-neutral-50 text-xl font-normal leading-8 tracking-tight w-[60%]'>{item.h4}</h4>
                        <div className='flex items-center gap-8 max-sm:flex-col'>
                            <h5 className='text-white text-2xl font-bold leading-loose tracking-tight'>${item.price}</h5>
                            <button className='bg-green-500 py-2 px-4 text-center rounded text-white text-2xl font-bold leading-loose tracking-tight'>ADD TO CART</button>
                        </div>
                    </div>
                    <div></div>
                </div>
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}>
            <CarouselIndicators
                items={slides}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
            />
            {newSlides}
            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
            />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
            />
        </Carousel>
    );
}

