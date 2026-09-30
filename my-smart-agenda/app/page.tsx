import { fetchEntries } from "@/lib/data"
import { Dashboard } from "@/components/ui/Dashboard"
import { cache } from "react"
import { getDayName } from "@/utils/getDayName";

const weekday = getDayName(new Date().getDay());

const cachedEntries = cache(async () => {
  const data = await fetchEntries();
  return data.filter(e => e.weekdays.includes(weekday));
});

const entries = await cachedEntries();

export default function Home() {
  return (
    <div>
      <Dashboard weekday={weekday} entries={entries} />
    </div>
  )
}
