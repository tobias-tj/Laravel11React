import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";

export default function TableHeading({
  name,
  sorteable = true,
  sort_field = null,
  sort_direction = null,
  sortChanged = () => {},
  children,
}) {
  return (
    <th onClick={(e) => sortChanged(name)}>
      <div className="px-3 py-2 flex items-center justify-between gap-1 cursor-pointer">
        {children}
        {sorteable && (
          <div>
            <ChevronUpIcon
              className={
                "w-4 " +
                (sort_field === name && sort_direction === "asc"
                  ? "text-red-600"
                  : "")
              }
            />
            <ChevronDownIcon
              className={
                "w-4 -mt-2 " +
                (sort_field === name && sort_direction === "desc"
                  ? "text-red-600"
                  : "")
              }
            />
          </div>
        )}
      </div>
    </th>
  );
}
