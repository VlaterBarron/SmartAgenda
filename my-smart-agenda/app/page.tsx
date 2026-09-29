import { fetchEntries } from "@/lib/data"
import { EntryCard } from "@/components/ui/EntryCard"
import { cache } from "react"

const cachedEntries = cache(async () => {
  const data = await fetchEntries()
  return data
});

const entries = await cachedEntries();

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <p className="mt-2 text-muted-foreground">
        Your entries will show up here.
      </p>
      <ul>
        {
          entries.map(e => (
            <EntryCard key={e.id} {...e} />
          ))
        }
      </ul>
    </div>
  )
}