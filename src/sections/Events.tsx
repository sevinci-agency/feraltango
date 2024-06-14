import { useState, useEffect } from "react";

import NoEvents from "../components/NoEvents";
import type { Event } from "../types/Event";
import EmblaCarousel from "../components/embla/Carousel.tsx";
import type { EmblaOptionsType } from "embla-carousel";


const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }

const Events = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        fetchEventsData();
    }, []);
    
    const fetchEventsData = async () => {
        try {
            const orgId = import.meta.env.PUBLIC_ORG_ID;
            const response = await fetch(`https://corazon.dance/api/organization/${orgId}/all-events`);
            if (!response.ok) {
              throw new Error('Failed to fetch courses data: ' + response.statusText);
            }
            const result = await response.json();
            setEvents(result);
          } catch (error:any) {
                setError(error.message);
                console.error('Error fetching courses data:', error);
          } finally {
            setLoading(false);
          }
    };

    if (loading) return <p className="container mx-auto text-center my-10 py-10 text-gray-600 border border-dashed">Loading...</p>;
    if (error) return <p className="container mx-auto text-center my-10 py-10 text-red-600 font-medium border border-dashed">{error}</p>;

    return (
        <> 
        {
            events && events.length > 0 ?
                <section id="events-carousel">
                    <div className="max-w-2xl mx-auto text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14">
                        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-neutral-800">Retreats & Festivals</h2>
                        <p className="mt-1 text-neutral-600">Explore our schedule packed with classes for all levels and interests.</p>
                    </div>
					<EmblaCarousel slides={events} options={OPTIONS} />
                    <br />
                </section>
                :
                <NoEvents />
        }
        </>
    );
};

export default Events;






// {
//     events && events.length > 0 ? 
//         <section id="events-carousel" className="py-6">
//             <div className="">
//                 {/* Title */}               

//                 {/* End Title */}


//                 <div className="items-center mx-auto">
//                     <div role="region" aria-labelledby="carousel-label" className="flex justify-between items-center focus:outline-none overflow-auto py-3 px-1 space-x-2">

//                         <button className="text-2xl z-10">
                            
//                         </button>

//                         {/* Carousel */}
//                         <div className=" flex w-full overflow-x-scroll snap-x snap-mandatory space-x-3 inset-x-0 p-3">

//                         </div>


//                         <button  className="group">
//                             hola
//                         </button>
//                     </div>
//                 </div>
//             </div>
//       </section> : <NoEvents/>
  
// }






{/* <div className="slider-container">

</div> */}