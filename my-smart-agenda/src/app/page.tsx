import { getEntries } from "@/src/app/actions/entries";
import { Dashboard } from "@/src/app/components/ui/Dashboard";
import { getDayName } from "@/src/app/utils/getDayName";

export default async function Home() {
  const weekday = getDayName(new Date().getDay());
  const data = await getEntries(weekday);

  return (
    <div>
      <Dashboard weekday={weekday} entries={data} />
    </div>
  )
}
