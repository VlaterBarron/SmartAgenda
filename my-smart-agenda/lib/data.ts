import { Entry } from './generated/prisma/client';
import { prisma } from './prisma';

export const fetchEntries = async () : Promise<Entry[]> => {
    return await prisma.entry.findMany();
}