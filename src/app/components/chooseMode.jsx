import Link from "next/link";

export default function ChooseMode() {
  return (
    <>
      <div className="my-4">
        <Link
          href={"/rent"}
          className="bg-[var(--primary-color)] py-3 w-full inline-flex items-center justify-center rounded-lg font-bold cursor-pointer hover:bg-[var(--hover-color)]"
        >
          借りる
        </Link>
      </div>
      <div className="my-4">
        <Link
          href={"/return"}
          className="bg-[var(--gray-color)] py-3 w-full inline-flex items-center justify-center rounded-lg font-bold cursor-pointer hover:bg-[var(--hover-gray-color)]"
        >
          返す
        </Link>
      </div>
    </>
  );
}
