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
      <div className="md:px-7 px-4 py-7">
        <div className="flex max-md:flex-col max-md:text-center max-md:items-center justify-between items-start max-md:pb-3">
          <div>
            <h4 className="md:mb-1">{data.title}</h4>
            <p className="md:pb-3 pb-1 text-[16px]">
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
          <p className="text-subtle text-sm flex items-center gap-2">
            <RxCalendar /> {data.date}
          </p>
        </div>

        <ul>
          {data.description.map((item, index) => (
            <li
              className="pl-3 md:pl-7 text-lg relative before:content-[''] before:absolute before:left-0 md:before:left-2.5 before:top-[10px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-subtle"
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
