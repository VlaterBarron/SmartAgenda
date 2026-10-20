"use client";

import type { Entry } from "@/lib/generated/prisma/client";
import type { Weekday } from "@/lib/generated/prisma/enums";
import { EntryCard } from "@/src/app/components/ui/EntryCard";
import { useState } from "react";
import { Model } from "../Model";

const formatWeekday = (weekday: Weekday) =>
    weekday.charAt(0) + weekday.slice(1).toLowerCase()

export const Dashboard = ({ weekday, entries }: { weekday: Weekday; entries: Entry[] }) => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    return (
        <section className="flex flex-col gap-4">
            <div>
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold">
                        Activities for {formatWeekday(weekday)}
                    </h2>
                    <div>
                        <button 
                            className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Add Entry
                        </button>
                    </div>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                    {entries.length === 0
                        ? "Nothing scheduled for today."
                        : `${entries.length} ${entries.length === 1 ? "entry" : "entries"} today`}
                </p>
            </div>
            {entries.length === 0 ? (
                <p className="text-muted-foreground">
                    You do not have any entries yet.
                </p>
            ) : (
                <ul className="flex flex-col gap-2">
                    {entries.map(entry => (
                        <li key={entry.id}>
                            <EntryCard {...entry} />
                        </li>
                    ))}
                </ul>
            )}
            {isModalOpen && <Model onClose={() => setIsModalOpen(false)} />}
        </section>
    )
}
