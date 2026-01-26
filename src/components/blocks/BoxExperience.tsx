import { RxCalendar } from "react-icons/rx";
import Box from "./Box";

export interface ExperienceDataInterface {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
}

export default function BoxExperience({
  data,
}: {
  data: ExperienceDataInterface;
}) {
  return (
    <Box>
      <div className="relative px-4 py-7 md:px-7">
        <div className="flex items-start justify-between max-md:flex-col max-md:items-center max-md:pb-3 max-md:text-center">
          <div>
            <h4 className="md:mb-1">{data.title}</h4>
            <p className="pb-1 text-[16px] md:pb-3">
              {data.company && (
                <span className="text-secondary/80 pr-2">{data.company}</span>
              )}
              {data.company && "•"}
              <span className="text-subtle pl-2 first:pl-0">
                {data.location}
              </span>
            </p>
            <p className="text-primary"></p>
          </div>
          <p className="text-subtle flex items-center gap-2 text-sm">
            <RxCalendar /> {data.date}
          </p>
        </div>

        <ul>
          {data.description.map((item, index) => (
            <li
              className="text-primary/70 before:bg-subtle relative pl-3 text-lg before:absolute before:top-[10px] before:left-0 before:h-[6px] before:w-[6px] before:rounded-full before:content-[''] md:pl-7 md:before:left-2.5"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Box>
  );
}
