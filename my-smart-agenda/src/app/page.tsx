import { getEntries } from "@/src/app/actions/entries";
import { Dashboard } from "@/src/app/components/ui/Dashboard";
import { Weekday } from "@/lib/generated/prisma/enums";

export default async function Home() {
  const weekday = new Intl.DateTimeFormat("en-US", { weekday: "long", timeZone: "America/Merida"}).format(new Date());
  const weekdayEnum = Weekday[weekday.toUpperCase() as keyof typeof Weekday];
  const data = await getEntries(weekdayEnum);

  return (
    <div>
      <Dashboard weekday={weekdayEnum} entries={data} />
    </div>
  )
}
