
import { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap';

export default function Slider(props) {
    const {slides} = props.data;
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
                <div className={`flex items-center justify-left relative`}>
                    <div className='w-[100%]'>
                        <img src={item.src} alt={item.altText} className='w-full h-screen object-cover' />
                    </div>
                    <div className=' flex flex-col gap-9 my-9 ml-[15%] absolute'>
                        <h5 className="text-white text-base font-bold leading-normal tracking-tight">{item.h5}</h5>
                        <h1 className='text-white text-6xl font-bold leading-normal tracking-tight'>{item.h1}</h1>
                        <h4 className='text-neutral-50 text-xl font-normal leading-8 tracking-tight'>{item.h4}</h4>
                        <button className='bg-green-500 py-4 w-[50%] text-center rounded text-white text-2xl font-bold leading-loose tracking-tight'>SHOP NOW</button>
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

