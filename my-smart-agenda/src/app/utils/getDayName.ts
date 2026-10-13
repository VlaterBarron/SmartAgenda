import { Weekday } from "@/src/lib/generated/prisma/enums";

export const getDayName = (day: number): Weekday => {
    switch(day) {
        case 0: return Weekday.SUNDAY;
        case 1: return Weekday.MONDAY;
        case 2: return Weekday.TUESDAY;
        case 3: return Weekday.WEDNESDAY;
        case 4: return Weekday.THURSDAY;
        case 5: return Weekday.FRIDAY;
        case 6: return Weekday.SATURDAY;
        default: return Weekday.SUNDAY; // or handle invalid day appropriately
    }
}