export default function ListBoxes({
  children,
}: {
  children: React.ReactNode[];
}) {
  return (
    <div className="grid grid-cols-1">
      {children.map((child, index) => (
        <div
          key={index}
          className="group border-l border-secondary relative pl-2 md:pl-8"
        >
          <span className="absolute left-[-6px] top-0 w-3 h-3 rounded-full bg-white"></span>
          <div className="pb-6 group-last:pb-0">{child}</div>
        </div>
      ))}
    </div>
  );
}
