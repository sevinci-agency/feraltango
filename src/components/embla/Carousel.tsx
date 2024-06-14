
import useEmblaCarousel from "embla-carousel-react";
import "./embla.css";
import EventCard from "../../components/EventCard.tsx";
import type { Event } from "../../types/Event.ts";
import type { EmblaOptionsType } from 'embla-carousel';
import { DotButton, useDotButton } from "../embla/DotButtons.tsx";
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
  } from "../embla/ArrowButtons.tsx";
type PropType = {
    slides: Event[]
    options?: EmblaOptionsType
}


const EmblaCarousel = (props: { slides: any; options: any; }) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
      } = usePrevNextButtons(emblaApi);
    
    let displayControls;
    let displayControlsSM;
    let displayControlsMD;
    let displayControlsLG;
    let displayControlsXL;

    switch (slides.length) {
        case 1:
            displayControls = 'hidden';
            displayControlsSM = 'hidden';
            displayControlsMD = 'hidden';
            displayControlsLG = 'hidden';
            displayControlsXL = 'hidden';
            break;
        case 2:
            displayControls = 'block';
            displayControlsSM = 'block';
            displayControlsMD = 'hidden';
            displayControlsLG = 'hidden';
            displayControlsXL = 'hidden';
            break;
        case 3:
            displayControls = 'block';
            displayControlsSM = 'block';
            displayControlsMD = 'block';
            displayControlsLG = 'hidden';
            displayControlsXL = 'hidden';
            break;
        case 4:
            displayControls = 'block';
            displayControlsSM = 'block';
            displayControlsMD = 'block';
            displayControlsLG = 'block';
            displayControlsXL = 'hidden';
            break;
        default:
            displayControls = 'block';
            displayControlsSM = 'block';
            displayControlsMD = 'block';
            displayControlsLG = 'block';
            displayControlsXL = 'block';
            break;
    }

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                {slides.map((event: Event) => (
                    <div className="embla__slide">
                        <EventCard event={event} key={event.id} />
                    </div>
                ))}
                </div>
            </div>
            
            <div className={`${displayControls} sm:${displayControlsSM} md:${displayControlsMD} lg:${displayControlsLG} xl:${displayControlsXL}`}>
                <div className="embla__controls flex justify-between items-center mx-5 ">
                    <div className="embla__buttons">
                        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}/>
                        {/* className="w-5 h-5 rounded-full p-1 hover:text-brand ring-1 ring-gray-300 hover:ring-brand" */}
                        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                        {/* className="w-5 h-5 rounded-full p-1 hover:text-brand ring-1 ring-gray-300 hover:ring-brand" */}
                    </div>

                    <div className="embla__dots space-x-1">
                        {scrollSnaps.map((_, index) => (
                            <DotButton key={index} onClick={() => onDotButtonClick(index)} className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '')} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}




export default EmblaCarousel;