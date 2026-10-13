import { Entry, Weekday } from '@/src/lib/generated/prisma/client';
import { prisma } from '@/src/lib/prisma';

export const getEntries = async (weekday:Weekday) : Promise<Entry[]> => {
    return (await prisma.entry.findMany()).filter(e => !e.isDeleted && e.weekdays.includes(weekday));
}