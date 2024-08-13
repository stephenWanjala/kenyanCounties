import Papa from 'papaparse';
import { County, SubCounty } from './models';

// Function to parse CSV and group data
export const parseCSV = (csvData: string): County[] => {
    const parsedData = Papa.parse(csvData, { header: true, skipEmptyLines: true }).data as any[];

    const countiesMap = new Map<number, County>();

    parsedData.forEach(row => {
        const countyCode = parseInt(row['COUNTY CODE']);
        const countyName = row['COUNTY NAME'];
        const subCountyCode = parseInt(row['SUB-COUNTY CODE']);
        const subCountyName = row['SUB-COUNTY NAME'];

        if (!countiesMap.has(countyCode)) {
            countiesMap.set(countyCode, {
                countyCode,
                countyName,
                subCounties: []
            });
        }

        const county = countiesMap.get(countyCode)!;

        county.subCounties.push({
            subCountyCode,
            subCountyName
        });
    });

    return Array.from(countiesMap.values());
};
