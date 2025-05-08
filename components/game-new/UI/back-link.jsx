import Link from "next/link";
import { ArrowLeftIcon } from "./icons/arrow-left-icon";
import { StarIcon } from "./icons/star-icon";
import { UserIcon } from "./icons/user-icon";
import { HistoryIcon } from "./icons/histry-icon";

export function BackLink() {
  return (
    <Link
      href="#"
      className="flex items-center gap-2 text-xs text-teal-600 leading-tight -mb-0.5"
    >
      <ArrowLeftIcon />
      На главную
    </Link>
  );
}
