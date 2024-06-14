export interface Event {
    id: number;
    name: string;
    slug: string;
    tagline: string;

    start_date: Date | null;
    end_date: Date | null;

    start_time: Date | null;
    end_time: Date | null;

    thumbnail: string | null | undefined;
    type: string;
    location_id: number|null;

    city_id: number | null;
    is_online: boolean;
    is_free: boolean;

    status: string;
    thumb: string | null;
    
    contact: URL | null;
    email: string | null;
    phone: string | null;
    website: URL | null;
    facebook: URL | null;
    twitter: URL | null;
    instagram: URL | null;
    youtube: URL | null;
    tiktok: URL | null;
    
    styles: string | null;
    description: string | null;
    video: string | null;
    
    city: string | null;
    country_code: string | null;
    location_name: string | null;
    neighborhood: string | null;
    
    organiser_name: string | null;
    organiser_icon: string | null;
    organiser_url: string | null;
    
    url: URL | null;
}





