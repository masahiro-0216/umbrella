"use client";
import { emailAtom, placeAtom, umbrellaAtom } from "@/app/atom/data";
import { useAtom } from "jotai";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function ConfirmData() {
  const [umbrellaID, setUmbrellaID] = useAtom(umbrellaAtom);
  const [place, setPlace] = useAtom(placeAtom);
  const [email, setEmail] = useAtom(emailAtom);
  const pathname = usePathname();
  const router = useRouter();
  return (
    <>
      <div className="w-full">
        <p className="font-bold text-lg mb-2">確認</p>
        <div className="grid grid-cols-[20%_1fr] gap-x-6 mb-8">
          <ConfirmElem title={"傘のID"} content={umbrellaID} />
          <ConfirmElem title={"貸出場所"} content={place} />
          <ConfirmElem title={"メールアドレス"} content={email} />
        </div>
        <div className="">
          <Link
            className="bg-[var(--primary-color)] py-3 w-full inline-flex items-center justify-center rounded-lg font-bold cursor-pointer hover:bg-[var(--hover-color)] mb-4"
            href={`${pathname}/complete`}
          >
            確定
          </Link>
          <button
            className="bg-[var(--gray-color)] py-3 w-full inline-flex items-center justify-center rounded-lg font-bold cursor-pointer hover:bg-[var(--hover-gray-color)]"
            onClick={() => router.back()}
          >
            戻る
          </button>
        </div>
      </div>
    </>
  );
}

function ConfirmElem({ title, content }) {
  return (
    <>
      <div className="col-span-2 border-t border-t-[#d0dbe7] py-5">
        <p className="text-[#4e7097] text-sm font-normal leading-normal whitespace-nowrap">
          {title}
        </p>
        <p className="text-[#0e141b] text-sm font-normal leading-normal whitespace-nowrap">
          {content}
        </p>
      </div>
    </>
  );
}
