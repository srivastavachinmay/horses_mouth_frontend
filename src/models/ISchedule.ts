export interface ISchedule {
    id: string;
    days: Days;
}

export interface Days {
    monday: Monday[];
    tuesday: Tuesday[];
    wednesday: Wednesday[];
    thursday: Thursday[];
    friday: Friday[];
    saturday: Saturday[];
    sunday: Sunday[];
}

export interface Monday {
    start: string;
    end: string;
    lastBookedFor: number;
}

export interface Tuesday {
    start: string;
    end: string;
    lastBookedFor: number;
}

export interface Wednesday {
    start: string;
    end: string;
    lastBookedFor: number;
}

export interface Thursday {
    start: string;
    end: string;
    lastBookedFor: number;
}

export interface Friday {
    start: string;
    end: string;
    lastBookedFor: number;
}

export interface Saturday {
    start: string;
    end: string;
    lastBookedFor: number;
}

export interface Sunday {
    start: string;
    end: string;
    lastBookedFor: number;
}
