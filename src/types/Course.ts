export interface Course {
    id: number;
    name: string;
    slug: string;
    tagline:string;
    start_date: Date | null;
    end_date: Date | null;

    monday: boolean;
    start_time_mon: Date | null; 
    end_time_mon: Date | null; 

    tuesday:boolean;
    start_time_tue: Date | null; 
    end_time_tue: Date | null;

    wednesday: boolean;
    start_time_wed: Date | null;
    end_time_wed: Date | null;

    thursday: boolean; 
    start_time_thu: Date | null;
    end_time_thu: Date | null;
    
    friday: boolean;
    start_time_fri: Date | null;
    end_time_fri: Date | null;

    saturday:boolean;
    start_time_sat: Date | null;
    end_time_sat: Date | null;

    sunday: boolean; 
    start_time_sun: Date | null;
    end_time_sun: Date | null;
    
    duration: string;

    level: string;
    level_code: string;
    level_number: number;
    level_label: string; 

    video1: string;
    video2: string;
    video3: string;

    drop_in: boolean;

    manage_registrations: boolean;
    registrations_until: Date | null;
    is_private: boolean;
    limit_attendees: number;

    focus: string; 
    type: string;
    status: string;
    public: string;

    registration_url: URL | null;
    private_group_url: URL | null;
    
    city: string;
    location_name: string;
    location_address: string;
    url: URL | null;
    teachers: string; 
}