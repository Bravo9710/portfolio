export default function ListBoxes({
  children,
}: {
  children: React.ReactNode[];
}) {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1">
      {children.map((child, index) => (
        <div
          key={index}
          className="group border-secondary relative border-l pl-2 md:pl-8"
        >
          <span className="absolute top-0 left-[-6px] h-3 w-3 rounded-full bg-white"></span>
          <div className="pb-6 group-last:pb-0">{child}</div>
        </div>
      ))}
    </div>
  );
}
