import dayjs from "dayjs";

export const isDayjs = (maybeDayJs: any): maybeDayJs is dayjs.Dayjs => {
    return maybeDayJs instanceof dayjs;
}