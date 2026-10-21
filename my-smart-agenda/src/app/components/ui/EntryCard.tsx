import type { Entry } from "@/lib/generated/prisma/client";
import { Card, CardContent } from "@/src/app/components/ui/card";

/*const updateEntry: (id: string, title: string, stime: string, etime: string, weekdays: Weekday[]) => Promise<{
    id: string;
    title: string;
    stime: string;
    etime: string;
    weekdays: Weekday[];
    notes: string | null;
    type: EntryType;
    status: EntryStatus;
    tag: string | null;
    startDate: Date | null;
    dueDate: Date | null;
    priority: Priority;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}>*/

export const EntryCard = ({entry, open}: {
    entry: Entry;
    open: () => void
}) => {
    return (
        <Card size="sm">
            <CardContent className="flex items-center gap-2 py-1.5">
                <span className="shrink-0 font-mono text-xs text-muted-foreground">
                    {entry.stime} - {entry.etime}
                </span>
                <span className="text-muted-foreground/40">|</span>
                <span className="truncate text-sm font-medium text-card-foreground">
                    {entry.title}
                </span>
                <button 
                    onClick={() => open()}
                    className="ml-auto bg-primary text-primary-foreground hover:bg-primary/90 h-8 px-3 py-1 rounded-md text-sm"
                >
                    Update Entry
                </button>
            </CardContent>
        </Card>
    )
}