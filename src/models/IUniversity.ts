export interface IUniversity {
    nextPage: number;
    total: number;
    universities: University[];
}

export interface University {
    name: string;
    searchCount: number;
    country: string;
}
