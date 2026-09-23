import 'dotenv/config';
import type { Prisma } from '../lib/generated/prisma/client';
import { prisma } from '../lib/prisma';

type SeedEntry = { id: string } & Omit<Prisma.EntryCreateInput, 'id'>;

const entries: SeedEntry[] = [
  {
    id: 'seed-1',
    title: 'Finish portfolio README',
    notes: 'Add screenshots, stack list, and a link to the live demo.',
    type: 'TASK',
    status: 'IN_PROGRESS',
    tag: 'portfolio',
    dueDate: new Date('2026-09-20'),
    priority: 'HIGH',
  },
  {
    id: 'seed-2',
    title: 'Client kickoff call',
    notes: 'Discuss scope, timeline, and budget for the landing page project.',
    type: 'EVENT',
    status: 'TODO',
    tag: 'client-work',
    startDate: new Date('2026-09-16T15:00:00Z'),
    priority: 'HIGH',
  },
  {
    id: 'seed-3',
    title: 'Morning run',
    notes: '5k around the park before breakfast.',
    type: 'HABIT',
    status: 'DONE',
    tag: 'health',
    startDate: new Date('2026-09-14T06:30:00Z'),
    priority: 'LOW',
  },
  {
    id: 'seed-4',
    title: 'Renew domain name',
    type: 'REMINDER',
    status: 'TODO',
    tag: 'admin',
    dueDate: new Date('2026-10-01'),
    priority: 'MEDIUM',
  },
  {
    id: 'seed-5',
    title: 'Idea: recurring entries feature',
    notes: 'Daily/weekly/monthly repeat rules — good stretch goal after MVP.',
    type: 'NOTE',
    status: 'TODO',
    tag: 'ideas',
    priority: 'LOW',
  },
  {
    id: 'seed-6',
    title: 'Fix calendar view overflow bug',
    notes: 'Entries with long titles break the month grid on mobile.',
    type: 'TASK',
    status: 'TODO',
    tag: 'bug',
    dueDate: new Date('2026-09-18'),
    priority: 'HIGH',
  },
  {
    id: 'seed-7',
    title: 'Dentist appointment',
    type: 'EVENT',
    status: 'TODO',
    tag: 'personal',
    startDate: new Date('2026-09-25T09:00:00Z'),
    priority: 'MEDIUM',
  },
  {
    id: 'seed-8',
    title: 'Read for 20 minutes',
    type: 'HABIT',
    status: 'IN_PROGRESS',
    tag: 'learning',
    startDate: new Date('2026-09-14T21:00:00Z'),
    priority: 'LOW',
  },
  {
    id: 'seed-9',
    title: 'Pay hosting invoice',
    type: 'REMINDER',
    status: 'DONE',
    tag: 'admin',
    dueDate: new Date('2026-09-10'),
    priority: 'MEDIUM',
  },
  {
    id: 'seed-10',
    title: 'Old scratch note',
    notes: 'No longer needed — kept only to test the trash/restore flow.',
    type: 'NOTE',
    status: 'DONE',
    tag: 'archive',
    isDeleted: true,
    priority: 'LOW',
  },
  {
    id: 'seed-11',
    title: 'Write case-study paragraph',
    notes: 'Short write-up for the freelance portfolio site.',
    type: 'TASK',
    status: 'TODO',
    tag: 'portfolio',
    dueDate: new Date('2026-09-28'),
    priority: 'MEDIUM',
  },
  {
    id: 'seed-12',
    title: 'Team standup',
    type: 'EVENT',
    status: 'DONE',
    tag: 'client-work',
    startDate: new Date('2026-09-12T10:00:00Z'),
    priority: 'LOW',
  },
];

async function main() {
  for (const { id, ...data } of entries) {
    await prisma.entry.upsert({
      where: { id },
      update: data,
      create: { id, ...data },
    });
  }
  console.log(`Seeded ${entries.length} entries.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
