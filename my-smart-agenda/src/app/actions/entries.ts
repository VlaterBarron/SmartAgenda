'use server';

import { Entry, Weekday } from '@/lib/generated/prisma/client';
import { prisma } from '@/lib/prisma';
import { refresh } from 'next/cache';

export const getEntries = async (weekday:Weekday) : Promise<Entry[]> => {
    return (await prisma.entry.findMany()).filter(e => !e.isDeleted && e.weekdays.includes(weekday)).sort((a, b) => a.stime.localeCompare(b.stime));
}

export const upsertEntry = async (title:string, stime:string, etime:string, weekdays: Weekday[], id?:string, ) => {

    if(!title || !stime || !etime || weekdays.length === 0) return;

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

export const deleteEntry = async (id:string) => {
    const entry = await prisma.entry.delete({ where: { id : id } });
    refresh();
    return entry;
}