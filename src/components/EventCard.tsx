import { BsCalendar2Check, BsClock, BsCrosshair, BsPeopleFill, BsPersonCircle } from "react-icons/bs";
import dayjs from "dayjs";
import type { Event } from "../types/Event.ts";
 
interface EventCardProps {
    event: Event;
}

// const formatDate = (date: Date | null): string => date ? date.toLocaleDateString() : 'N/A';
// const formatTime = (time: Date | null): string => time ? time.toLocaleTimeString() : 'N/A';
const formatURL = (url: URL | null): string => url ? url.href : 'N/A';

const EventCard = ({ event }: EventCardProps) => (
    
	<a href={event.url?.toString()} target="_blank" className="group cursor-pointer flex flex-col h-full border border-slate-200 hover:border-brand hover:shadow-lg transition-all duration-300 rounded-xl p-5 mx-2 bg-white">
        <div className="aspect-w-16 aspect-h-11">
            <img className="w-full object-cover rounded-xl h-64" src={event.thumbnail} alt={event.name}/>
        </div>
        <div className="my-6">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-brand">
                {event.name}
            </h3>
            <dl className="mt-2 text-gray-500">
                <div className="flex justify-between items-center">
                    <span>{dayjs(event.start_date).format('DD MMM')} @ {dayjs(event.start_time).format('HH:mm')}</span>
                </div>
                <div className="flex gap-x-2 items-center">
                    <span>{event.location_name}</span>  ·  
                    <span>{event.city}</span>
                </div>
                <div className="flex gap-x-2 items-center">
                    <div className="capitalize">{event.type}</div> · 
                    <span>{event.styles}</span>
                </div>
            </dl>
        </div>
        <div className="flex flex-wrap sm:justify-between items-center gap-y-1">
            <div className="mt-auto flex items-center gap-x-3">
                {
                    event.organiser_icon && <img className="size-8 rounded-full" src={event.organiser_icon} alt="organiser logo"/>
                }
                <div>
                    <h5 className="text-sm text-neutral-600 ">{event.organiser_name}</h5>
                </div>
            </div>
            <div className="text-right">
                {
                    event.status === 'possible changes' ?
                    <span className="inline-flex items-center gap-x-1.5 py-1 px-2 rounded-full text-xs bg-warning text-white dark:bg-success dark:text-white">{event.status}</span> :
                    ''
                }
            </div>
        </div>
	</a>
);

export default EventCard;