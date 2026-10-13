import type { Entry } from "@/src/lib/generated/prisma/client";
import { Card, CardContent } from "@/src/app/components/ui/card";

export const EntryCard = (entry: Entry) => {
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
            </CardContent>
        </Card>
    )
}