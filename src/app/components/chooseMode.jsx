import Link from "next/link";

export default function ChooseMode() {
  return (
    <>
      <div className="my-4">
        <Link
          href={"/rent"}
          className="bg-[#6EC6E9] py-3 w-full inline-flex items-center justify-center rounded-lg font-bold cursor-pointer hover:bg-[#5ab5d4]"
        >
          借りる
        </Link>
      </div>
      <div className="my-4">
        <Link
          href={"/return"}
          className="bg-[#C5C9CC] py-3 w-full inline-flex items-center justify-center rounded-lg font-bold cursor-pointer hover:bg-[#B1B5B8]"
        >
          返す
        </Link>
      </div>
    </>
  );
}
