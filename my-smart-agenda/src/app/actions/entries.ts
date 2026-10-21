'use server';

import { Entry, Weekday } from '@/lib/generated/prisma/client';
import { prisma } from '@/lib/prisma';
import { refresh } from 'next/cache';

export const getEntries = async (weekday:Weekday) : Promise<Entry[]> => {
    return (await prisma.entry.findMany()).filter(e => !e.isDeleted && e.weekdays.includes(weekday));
}

export const upsertEntry = async (title:string, stime:string, etime:string, weekdays: Weekday[], id?:string, ) => {
    const entry = await prisma.entry.upsert({
        create: {
            title: title,
            stime:stime,
            etime:etime,
            weekdays:weekdays
        },
        update: {
            title: title,
            stime:stime,
            etime:etime,
            weekdays:weekdays
        },
        where: {
            id: id ?? ""
        }
    });
    refresh();
    return entry;
}