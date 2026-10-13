import { getEntries } from "@/src/app/actions/entries";
import { Dashboard } from "@/src/app/components/ui/Dashboard";
import { getDayName } from "@/src/app/utils/getDayName";

const weekday = getDayName(new Date().getDay());
const data = await getEntries(weekday);

export default function Home() {
  return (
    <div>
      <Dashboard weekday={weekday} entries={data} />
    </div>
  )
}
