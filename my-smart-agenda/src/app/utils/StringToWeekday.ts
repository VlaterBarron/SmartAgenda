import { Weekday } from '@/lib/generated/prisma/enums';

export const StringToWeekday = (day:string): Weekday => {
    switch(day.toUpperCase()) {
        case 'SUNDAY':
            return Weekday.SUNDAY;
        case 'MONDAY':
            return Weekday.MONDAY;
        case 'TUESDAY':
            return Weekday.TUESDAY;
        case 'WEDNESDAY':
            return Weekday.WEDNESDAY;
        case 'THURSDAY':
            return Weekday.THURSDAY;
        case 'FRIDAY':
            return Weekday.FRIDAY;
        case 'SATURDAY':
            return Weekday.SATURDAY;
        default:
            throw new Error(`Invalid weekday: ${day}`);
    }
}
