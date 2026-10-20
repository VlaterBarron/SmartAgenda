'use server';

import { Entry, Weekday } from '@/lib/generated/prisma/client';
import { prisma } from '@/lib/prisma';

export const getEntries = async (weekday:Weekday) : Promise<Entry[]> => {
    return (await prisma.entry.findMany()).filter(e => !e.isDeleted && e.weekdays.includes(weekday));
}

export const createEntry = async (title:string, stime:string, etime:string, weekdays: Weekday[]) => {
    console.log("INFO: Creating entry with title:", title, "stime:", stime, "etime:", etime, "weekdays:", weekdays);
    return await prisma.entry.create({
        data: {
            title: title,
            stime: stime,
            etime: etime,
            weekdays: weekdays
        }
    });
};