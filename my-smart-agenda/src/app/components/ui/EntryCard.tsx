import type { Entry } from "@/lib/generated/prisma/client";
import { Card, CardContent } from "@/src/app/components/ui/card";
import { deleteEntry } from "../../actions/entries";

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
                <div className="ml-auto flex gap-2">
                    <button 
                    onClick={() => open()}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md"
                >
                    Update Entry
                </button>
                <button 
                    onClick={() => deleteEntry(entry.id)}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2 rounded-md"
                >
                    Delete Entry
                </button>
                </div>
            </CardContent>
        </Card>
    )
}