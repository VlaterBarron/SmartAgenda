"use client";

import { useState } from "react";
import { StringToWeekday } from "@/src/app/utils/StringToWeekday";
import type { Weekday } from '@/lib/generated/prisma/enums';
import { upsertEntry } from "@/src/app/actions/entries";
import { Entry } from "@/lib/generated/prisma/browser";

export const Model = ({ onClose, entry }: { 
    onClose: () => void; 
    entry?: Entry;
}) => {
    
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const [form, setForm] = useState({
        title: entry ? entry.title : '',
        stime: entry ? entry.stime : '00:00',
        etime: entry ? entry.etime : '00:05',
        weekdays: entry ? entry.weekdays : [] as Weekday[],
    });

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Add New Entry</h3>
                <p className="text-muted-foreground">
                    {entry ? 'Update your entry below:' : 'Fill in the details for your new entry:'}
                </p>
                <form 
                className="flex flex-col gap-2 mt-4"
                onSubmit={async (e) => {
                    e.preventDefault();
                    if(entry) {
                        await upsertEntry(form.title, form.stime, form.etime, form.weekdays, entry.id)
                    } else {
                        await upsertEntry(form.title, form.stime, form.etime, form.weekdays);
                    }
                    onClose();
                }}
                >
                    <input
                        type="text"
                        placeholder="Title"
                        value={form.title}
                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                        className="border border-input bg-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                    <div className="flex gap-2">
                        <input
                            type="time"
                            value={form.stime}
                            onChange={(e) => setForm({ ...form, stime: e.target.value })}
                            className="border border-input bg-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                        <input
                            type="time"
                            value={form.etime}
                            onChange={(e) => setForm({ ...form, etime: e.target.value })}
                            className="border border-input bg-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                        <div className="flex gap-2">
                            {
                            weekdays.map((day) => (
                                <button 
                                    type="button" 
                                    key={day} 
                                    className={`bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md ${form.weekdays.includes(StringToWeekday(day)) ? 'bg-primary/10' : ''}`}
                                    onClick={() => {
                                        setForm({ ...form, weekdays: form.weekdays.includes(StringToWeekday(day)) ? form.weekdays.filter((v) => v !== StringToWeekday(day)) : [...form.weekdays, StringToWeekday(day)] });
                                    }}
                                >
                                    {day}
                                </button>
                            ))
                        }
                        </div>
                    </div>
                    <button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md">
                        {entry ? 'Update Entry' : 'Add Entry'}
                    </button>
                </form>
                <button onClick={onClose} className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md">
                    Close
                </button>
            </div>
        </div>
    )
} 