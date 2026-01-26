export default function ListLines({
  title,
  items,
}: {
  title: string;
  items: {
    name: string;
    percent: number;
    icon?: React.ReactNode;
  }[];
}) {
  return (
    <div>
      <h3 className="mb-4">{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="pb-5 last:pb-0">
            <div className="flex items-center justify-between pb-1">
              <p className="text-primary flex items-center gap-2 text-lg">
                {item.icon}
                {item.name}
              </p>
              <p className="text-sm">{item.percent + "%"}</p>
            </div>
            <div className="bg-background-secondary h-4 w-full rounded-full py-[3px]">
              <div
                className="bg-secondary h-full rounded-full"
                style={{ width: `${item.percent}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
