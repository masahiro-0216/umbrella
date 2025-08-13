import Link from "next/link";
import { TERMS } from "../data/terms";

export default function Page() {
  return (
    <>
      <h3 className="font-bold text-xl mb-4">利用規約</h3>
      {TERMS.map((data) => {
        return (
          <Elem key={data.title} title={data.title} content={data.content} />
        );
      })}
      <div>
        <Link
          href={"/"}
          className="bg-[#6EC6E9] py-3 w-full inline-flex items-center justify-center rounded-lg font-bold cursor-pointer hover:bg-[#5ab5d4] mb-4"
        >
          トップに戻る
        </Link>
      </div>
    </>
  );
}

function Elem({ title, content }) {
  return (
    <>
      <div className="mb-4">
        <p className="font-bold text-lg mb-1">{title}</p>
        <p>{content}</p>
      </div>
    </>
  );
}
