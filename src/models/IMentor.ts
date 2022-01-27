export interface IMentor {
    nextPage: number;
    total: number;
    mentors: Mentor[];
}

export interface Mentor {
    id: string;
    name: string;
    profilePic: string;
    status: string;
    degree: string;
    major: string;
    countryOfOrigin: string;
    languages: string[];
    campusInfo: CampusInfo;
    amountAvailable: number;
    totalWithdrawn: number;
    preferredCurrency: string;
    schedule: Schedule;
    disabled: boolean;
    countryOfStudy: string;
    lastWithdrawn: number;
    profileState: string;
}

export interface CampusInfo {
    verificationDocUrl: string;
    uniEmail: UniEmail;
    uniName: string;
    scores: Scores;
    specialisation: string;
    campusExperience: string;
    scholarship: string;
    placeOfStay: string;
    previousInstitute: string;
    courseName: string;
    yearOfGrad: number;
    campusJob: string;
}

export interface UniEmail {
    email: string;
    verified: boolean;
}

export interface Scores {
    gpa: string;
    gmat: string;
    sat: string;
}

export interface Schedule {
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
