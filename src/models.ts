export interface County {
    countyCode: number;
    countyName: string;
    subCounties: SubCounty[];
}

export interface SubCounty {
    subCountyCode: number;
    subCountyName: string;
}