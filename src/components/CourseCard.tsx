import { BsCalendar2Check, BsClock, BsCrosshair, BsPeopleFill, BsPersonCircle } from "react-icons/bs";
import dayjs from "dayjs";
import type { Course } from "../types/Course.ts";
 
interface CourseCardProps {
    course: Course;
}

// const formatDate = (date: Date | null): string => date ? date.toLocaleDateString() : 'N/A';
// const formatTime = (time: Date | null): string => time ? time.toLocaleTimeString() : 'N/A';
const formatURL = (url: URL | null): string => url ? url.href : 'N/A';

const CourseCard = ({ course }: CourseCardProps) => (
	<article className="flex flex-col bg-white border shadow hover:shadow-2xl rounded-xl p-4 md:p-5 border-neutral-300">
    	<p className="text-xs font-medium uppercase text-neutral-500">
        	{course.level} {course.level_code}
    	</p>
		<div className="flex justify-between items-center">
			<h3 className="text-lg font-bold text-neutral-800">
			{course.name}
			</h3>
			<div>
				<dt className="sr-only">Status</dt>
				{
					course.status === "active" &&
					<div className="hs-tooltip inline-block">
						<button type="button" className="hs-tooltip-toggle py-1 px-1 flex justify-center items-center text-sm rounded-full border border-transparent bg-success-600 text-white hover:bg">
							<span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-neutral-900 text-white" role="tooltip">
								{course.status}
							</span>
						</button>
					</div>
				}
				{
					course.status === "soon" &&                                
					<div className="hs-tooltip inline-block">
						<button type="button" className="hs-tooltip-toggle py-1 px-1 flex justify-center items-center text-sm rounded-full border border-transparent bg-warning-600 text-white hover:bg">
							<span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-neutral-900 text-white" role="tooltip">
								{course.status}
							</span>
						</button>
					</div>
				}
				{
					course.status === "finished" &&
					<div className="hs-tooltip inline-block">
						<button type="button" className="hs-tooltip-toggle py-1 px-1 flex justify-center items-center text-sm rounded-full border border-transparent bg-error-600 text-white hover:bg">
							<span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-neutral-900 text-white" role="tooltip">
								{course.status}
							</span>
						</button>
					</div>
				}
			</div>
		</div>
		<div className="text-neutral-500">
			<div className="mt-2 flex w-full flex-none gap-x-2 items-center">
				<dt className="flex-none">
					<span className="sr-only">Date</span>
					<BsCalendar2Check />
				</dt>
				<dd className="text-sm leading-6 w-full">
					<div className="flex justify-between items-center">
						<span className="capitalize font-medium">Period</span>
						<time dateTime="2023-01-31">{dayjs(course.start_date).format("DD MMM YY")} - {dayjs(course.end_date).format("DD MMM YY")}</time>
					</div>
				</dd>			
			</div>
			<div className="mt-2 flex w-full flex-none gap-x-2 items-center">
				<dt className="flex-none">
					<span className="sr-only">Schedule</span>		
					<BsClock />
				</dt>
				<dd className="text-sm leading-6 w-full">
					{
						course.monday && (
						<div className="flex justify-between">
							<span className="capitalize font-medium">Time</span>
							<span>Mon {dayjs(course.start_time_mon).format("HH:mm")} - {dayjs(course.end_time_mon).format("HH:mm")}</span>
						</div>)
					}
					{
						course.tuesday && (
						<div className="flex justify-between w-full">
							<span className="capitalize font-medium">Time</span>
							<span>Tue {dayjs(course.start_time_tue).format("HH:mm")} - {dayjs(course.end_time_tue).format("HH:mm")}</span>
						</div>
						) 
					} 
					
					{
						course.wednesday && (
						<div className="flex justify-between w-full">
							<span className="capitalize font-medium">Time</span>
							<span>Wed {dayjs(course.start_time_wed).format("HH:mm")} - {dayjs(course.end_time_wed).format("HH:mm")}</span>
						</div>
						) 
					}  

					{
						course.thursday && (
						<div className="flex justify-between w-full">
							<span className="capitalize font-medium">Time</span>
							<span>Thu {dayjs(course.start_time_thu).format("HH:mm")} - {dayjs(course.end_time_thu).format("HH:mm")}</span>
						</div>
						) 
					}  

					{
						course.friday && (
						<div className="flex justify-between w-full">
							<span className="capitalize font-medium">Time</span>
							<span>Fri {dayjs(course.start_time_fri).format("HH:mm")} - {dayjs(course.end_time_fri).format("HH:mm")}</span>
						</div>
						) 
					}

					{
						course.saturday && (
						<div className="flex justify-between w-full">
							<span className="capitalize font-medium">Time</span>
							<span>Sat {dayjs(course.start_time_sat).format("HH:mm")} - {dayjs(course.end_time_sat).format("HH:mm")}</span>
						</div>
						) 
					}

					{
						course.sunday && (
						<div className="flex justify-between w-full">
							<span className="capitalize font-medium">Time</span>
							<span>Sun {dayjs(course.start_time_sun).format("HH:mm")} - {dayjs(course.end_time_sun).format("HH:mm")}</span>
						</div>
						) 
					}  
				</dd>
			</div>

			<div className="mt-2 flex w-full flex-none gap-x-2 items-center">
				<dt className="flex-none">
					<span className="sr-only">Focus</span>
					<BsCrosshair />
				</dt>
				<dd className="text-sm leading-6 w-full">
					<div className="flex justify-between">
						<span className="capitalize font-medium">Focus</span>
						<span>{course.focus}</span>
					</div>
				</dd>
			</div>

			<div className="mt-2 flex w-full flex-none gap-x-2 items-center">
				<dt className="flex-none">
					<span className="sr-only">public</span>
					<BsPeopleFill />
				</dt>
				<dd className="text-sm leading-6 w-full">
					<div className="flex justify-between">
						<span className="capitalize font-medium">Public</span>
						<span className="capitalize">{course.public}</span>
					</div>
				</dd>
			</div>

			{
				course.teachers && <div className="mt-2 flex w-full flex-none gap-x-4 items-center">
					<dt className="flex-none">
						<span className="sr-only">Teacher</span>
						<BsPersonCircle />
					</dt>
					<dd className="text-sm leading-6 w-full">
						<div className="flex justify-between">
								<span className="capitalize font-medium">Teacher</span>
								<span className="capitalize">{course.teachers}</span>
						</div>
					</dd>
				</div>
			}  
		</div>
		{
			course.url && (
				<a href={course.url.toString()} className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-brand hover:text-brand-hover" target="_blank">
					Learn more
					<svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
				</a>
			)
		}
	</article>
);
export default CourseCard;