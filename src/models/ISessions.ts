export interface ISessions {
    nextPage: number
    total: number
    sessions: Session[]
}

export interface Session {
    payment: Payment
    discussionPoints: string
    id: string
    zoomLink: string
    mentor: Mentor2
    user: User2
    date: number
    slot: Slot
}

export interface Payment {
    id: string
    razorpayId: string
    sessions: string[]
    currency: string
    date: number
    mentor: Mentor
    user: User
    amount: number
}

export interface Mentor {
    institute: string
    campusPreference: string
    profilePic: string
    name: string
    about: string
    facebook: string
    linkedIn: string
    email: string
    id: string
    type: string
    interests: string[]
    mentorMeta: MentorMeta
}

export interface MentorMeta {
    id: string
    name: string
    status: string
    degree: string
    major: string
    countryOfOrigin: string
    languages: string[]
    campusInfo: CampusInfo
    amountAvailable: number
    totalWithdrawn: number
    preferredCurrency: string
    schedule: Schedule
    disabled: boolean
    countryOfStudy: string
    lastWithdrawn: number
    profileState: string
}

export interface CampusInfo {
    verificationDocUrl: string
    uniEmail: UniEmail
    uniName: string
    scores: Scores
    specialisation: string
    campusExperience: string
    scholarship: string
    placeOfStay: string
    previousInstitute: string
    courseName: string
}

export interface UniEmail {
    email: string
    verified: boolean
}

export interface Scores {
    gpa: string
    gmat: string
    sat: string
}

export interface Schedule {
    id: string
    days: Days
}

export interface Days {
    monday: Monday[]
    tuesday: Tuesday[]
    wednesday: Wednesday[]
    thursday: Thursday[]
    friday: Friday[]
    saturday: Saturday[]
    sunday: Sunday[]
}

export interface Monday {
    start: string
    end: string
    lastBookedFor: number
}

export interface Tuesday {
    start: string
    end: string
    lastBookedFor: number
}

export interface Wednesday {
    start: string
    end: string
    lastBookedFor: number
}

export interface Thursday {
    start: string
    end: string
    lastBookedFor: number
}

export interface Friday {
    start: string
    end: string
    lastBookedFor: number
}

export interface Saturday {
    start: string
    end: string
    lastBookedFor: number
}

export interface Sunday {
    start: string
    end: string
    lastBookedFor: number
}

export interface User {
    institute: string
    campusPreference: string
    profilePic: string
    name: string
    about: string
    facebook: string
    linkedIn: string
    email: string
    id: string
    type: string
    interests: string[]
    mentorMeta: MentorMeta2
}

export interface MentorMeta2 {
    id: string
    name: string
    status: string
    degree: string
    major: string
    countryOfOrigin: string
    languages: string[]
    campusInfo: CampusInfo2
    amountAvailable: number
    totalWithdrawn: number
    preferredCurrency: string
    schedule: Schedule2
    disabled: boolean
    countryOfStudy: string
    lastWithdrawn: number
    profileState: string
}

export interface CampusInfo2 {
    verificationDocUrl: string
    uniEmail: UniEmail2
    uniName: string
    scores: Scores2
    specialisation: string
    campusExperience: string
    scholarship: string
    placeOfStay: string
    previousInstitute: string
    courseName: string
}

export interface UniEmail2 {
    email: string
    verified: boolean
}

export interface Scores2 {
    gpa: string
    gmat: string
    sat: string
}

export interface Schedule2 {
    id: string
    days: Days2
}

export interface Days2 {
    monday: Monday2[]
    tuesday: Tuesday2[]
    wednesday: Wednesday2[]
    thursday: Thursday2[]
    friday: Friday2[]
    saturday: Saturday2[]
    sunday: Sunday2[]
}

export interface Monday2 {
    start: string
    end: string
    lastBookedFor: number
}

export interface Tuesday2 {
    start: string
    end: string
    lastBookedFor: number
}

export interface Wednesday2 {
    start: string
    end: string
    lastBookedFor: number
}

export interface Thursday2 {
    start: string
    end: string
    lastBookedFor: number
}

export interface Friday2 {
    start: string
    end: string
    lastBookedFor: number
}

export interface Saturday2 {
    start: string
    end: string
    lastBookedFor: number
}

export interface Sunday2 {
    start: string
    end: string
    lastBookedFor: number
}

export interface Mentor2 {
    institute: string
    campusPreference: string
    profilePic: string
    name: string
    about: string
    facebook: string
    linkedIn: string
    email: string
    id: string
    type: string
    interests: string[]
    mentorMeta: MentorMeta3
}

export interface MentorMeta3 {
    id: string
    name: string
    status: string
    degree: string
    major: string
    countryOfOrigin: string
    languages: string[]
    campusInfo: CampusInfo3
    amountAvailable: number
    totalWithdrawn: number
    preferredCurrency: string
    schedule: Schedule3
    disabled: boolean
    countryOfStudy: string
    lastWithdrawn: number
    profileState: string
}

export interface CampusInfo3 {
    verificationDocUrl: string
    uniEmail: UniEmail3
    uniName: string
    scores: Scores3
    specialisation: string
    campusExperience: string
    scholarship: string
    placeOfStay: string
    previousInstitute: string
    courseName: string
}

export interface UniEmail3 {
    email: string
    verified: boolean
}

export interface Scores3 {
    gpa: string
    gmat: string
    sat: string
}

export interface Schedule3 {
    id: string
    days: Days3
}

export interface Days3 {
    monday: Monday3[]
    tuesday: Tuesday3[]
    wednesday: Wednesday3[]
    thursday: Thursday3[]
    friday: Friday3[]
    saturday: Saturday3[]
    sunday: Sunday3[]
}

export interface Monday3 {
    start: string
    end: string
    lastBookedFor: number
}

export interface Tuesday3 {
    start: string
    end: string
    lastBookedFor: number
}

export interface Wednesday3 {
    start: string
    end: string
    lastBookedFor: number
}

export interface Thursday3 {
    start: string
    end: string
    lastBookedFor: number
}

export interface Friday3 {
    start: string
    end: string
    lastBookedFor: number
}

export interface Saturday3 {
    start: string
    end: string
    lastBookedFor: number
}

export interface Sunday3 {
    start: string
    end: string
    lastBookedFor: number
}

export interface User2 {
    institute: string
    campusPreference: string
    profilePic: string
    name: string
    about: string
    facebook: string
    linkedIn: string
    email: string
    id: string
    type: string
    interests: string[]
    mentorMeta: MentorMeta4
}

export interface MentorMeta4 {
    id: string
    name: string
    status: string
    degree: string
    major: string
    countryOfOrigin: string
    languages: string[]
    campusInfo: CampusInfo4
    amountAvailable: number
    totalWithdrawn: number
    preferredCurrency: string
    schedule: Schedule4
    disabled: boolean
    countryOfStudy: string
    lastWithdrawn: number
    profileState: string
}

export interface CampusInfo4 {
    verificationDocUrl: string
    uniEmail: UniEmail4
    uniName: string
    scores: Scores4
    specialisation: string
    campusExperience: string
    scholarship: string
    placeOfStay: string
    previousInstitute: string
    courseName: string
}

export interface UniEmail4 {
    email: string
    verified: boolean
}

export interface Scores4 {
    gpa: string
    gmat: string
    sat: string
}

export interface Schedule4 {
    id: string
    days: Days4
}

export interface Days4 {
    monday: Monday4[]
    tuesday: Tuesday4[]
    wednesday: Wednesday4[]
    thursday: Thursday4[]
    friday: Friday4[]
    saturday: Saturday4[]
    sunday: Sunday4[]
}

export interface Monday4 {
    start: string
    end: string
    lastBookedFor: number
}

export interface Tuesday4 {
    start: string
    end: string
    lastBookedFor: number
}

export interface Wednesday4 {
    start: string
    end: string
    lastBookedFor: number
}

export interface Thursday4 {
    start: string
    end: string
    lastBookedFor: number
}

export interface Friday4 {
    start: string
    end: string
    lastBookedFor: number
}

export interface Saturday4 {
    start: string
    end: string
    lastBookedFor: number
}

export interface Sunday4 {
    start: string
    end: string
    lastBookedFor: number
}

export interface Slot {
    start: string
    end: string
    lastBookedFor: number
}
