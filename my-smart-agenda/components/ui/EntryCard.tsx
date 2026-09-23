import type { Entry } from "@/lib/generated/prisma/client"

export const EntryCard = (entry:Entry) => {
    return (
        <div key={entry.id} className="flex flex-col gap-2 p-4 border rounded-md">
            <div className="text-sm text-muted-foreground">
                {entry.stime} - {entry.etime}
            </div>
            <div className="text-lg font-semibold">
                {entry.title}
            </div>
        </div>
    )    
}