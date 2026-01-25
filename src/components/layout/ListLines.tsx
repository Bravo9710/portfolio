export default function ListLines({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <>
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
