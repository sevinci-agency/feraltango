import type { Course } from "../types/Course.ts";

export const parseDate = (dateString: Date | null): Date | null => dateString ? new Date(dateString) : null;
export const parseURL = (urlString: URL | null): URL | null => urlString ? new URL(urlString) : null;

export const isCourse = (data: any): data is Course => {
    return typeof data === 'object' &&
           typeof data.id === 'number' &&
           typeof data.name === 'string' &&
           typeof data.slug === 'string' &&
           typeof data.tagline === 'string' &&
           (typeof data.start_date === 'string' || data.start_date === null) &&
           (typeof data.end_date === 'string' || data.end_date === null) &&
           typeof data.monday === 'boolean' &&
           (typeof data.start_time_mon === 'string' || data.start_time_mon === null) &&
           (typeof data.end_time_mon === 'string' || data.end_time_mon === null) &&
           typeof data.tuesday === 'boolean' &&
           (typeof data.start_time_tue === 'string' || data.start_time_tue === null) &&
           (typeof data.end_time_tue === 'string' || data.end_time_tue === null) &&
           typeof data.wednesday === 'boolean' &&
           (typeof data.start_time_wed === 'string' || data.start_time_wed === null) &&
           (typeof data.end_time_wed === 'string' || data.end_time_wed === null) &&
           typeof data.thursday === 'boolean' &&
           (typeof data.start_time_thu === 'string' || data.start_time_thu === null) &&
           (typeof data.end_time_thu === 'string' || data.end_time_thu === null) &&
           typeof data.friday === 'boolean' &&
           (typeof data.start_time_fri === 'string' || data.start_time_fri === null) &&
           (typeof data.end_time_fri === 'string' || data.end_time_fri === null) &&
           typeof data.saturday === 'boolean' &&
           (typeof data.start_time_sat === 'string' || data.start_time_sat === null) &&
           (typeof data.end_time_sat === 'string' || data.end_time_sat === null) &&
           typeof data.sunday === 'boolean' &&
           (typeof data.start_time_sun === 'string' || data.start_time_sun === null) &&
           (typeof data.end_time_sun === 'string' || data.end_time_sun === null) &&
           typeof data.duration === 'string' &&
           typeof data.level === 'string' &&
           typeof data.level_code === 'string' &&
           typeof data.level_number === 'number' &&
           typeof data.level_label === 'string' &&
           typeof data.video1 === 'string' &&
           typeof data.video2 === 'string' &&
           typeof data.video3 === 'string' &&
           typeof data.drop_in === 'boolean' &&
           typeof data.manage_registrations === 'boolean' &&
           (typeof data.registrations_until === 'string' || data.registrations_until === null) &&
           typeof data.is_private === 'boolean' &&
           typeof data.limit_attendees === 'number' &&
           typeof data.focus === 'string' &&
           typeof data.type === 'string' &&
           typeof data.status === 'string' &&
           typeof data.public === 'string' &&
           (typeof data.registration_url === 'string' || data.registration_url === null) &&
           (typeof data.private_group_url === 'string' || data.private_group_url === null) &&
           typeof data.city === 'string' &&
           typeof data.location_name === 'string' &&
           typeof data.location_address === 'string' &&
           (typeof data.url === 'string' || data.url === null) &&
           typeof data.teachers === 'string';
};

export const parseCourse = (course: any): Course => {
    if (!isCourse(course)) {
        throw new Error("Invalid course data");
    }
    return {
        ...course,
        start_date: parseDate(course.start_date),
        end_date: parseDate(course.end_date),
        start_time_mon: parseDate(course.start_time_mon),
        end_time_mon: parseDate(course.end_time_mon),
        start_time_tue: parseDate(course.start_time_tue),
        end_time_tue: parseDate(course.end_time_tue),
        start_time_wed: parseDate(course.start_time_wed),
        end_time_wed: parseDate(course.end_time_wed),
        start_time_thu: parseDate(course.start_time_thu),
        end_time_thu: parseDate(course.end_time_thu),
        start_time_fri: parseDate(course.start_time_fri),
        end_time_fri: parseDate(course.end_time_fri),
        start_time_sat: parseDate(course.start_time_sat),
        end_time_sat: parseDate(course.end_time_sat),
        start_time_sun: parseDate(course.start_time_sun),
        end_time_sun: parseDate(course.end_time_sun),
        registrations_until: parseDate(course.registrations_until),
        url: parseURL(course.url),
        registration_url: parseURL(course.registration_url),
        private_group_url: parseURL(course.private_group_url),
    };
};
