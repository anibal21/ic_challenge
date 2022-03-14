import { parse, format } from "date-fns";

export const stringToDate = (stringDate: string, format: string = "yyyy-MM-dd"): Date =>
    parse(stringDate, format, new Date())

export const parseDateToString = (date: Date, pattern: string): string =>
    format(date, pattern)

export const sortDatesDescCompare = (stringDate1: string, stringDate2: string): number => {
        let dateA: Date = stringToDate(stringDate1, "yyyy-MM-dd");
        let dateB: Date = stringToDate(stringDate2, "yyyy-MM-dd");        

        if (dateA < dateB) {
        return 1;
        }
        if (dateA > dateB) {
        return -1;
        }
        // a debe ser igual b
        return 0;
}