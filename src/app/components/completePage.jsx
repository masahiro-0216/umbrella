"use client";
import { emailAtom, placeAtom, umbrellaAtom } from "@/app/atom/data";
import { Complete } from "@/app/components/complete";
import { useAtom } from "jotai";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CompletePage({ action }) {
  const [email] = useAtom(emailAtom);
  const [umbrellaID] = useAtom(umbrellaAtom);
  const [place] = useAtom(placeAtom);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const updateSheet = async () => {
      const now = new Date().toISOString();
      const range = `データ表!B${Number(umbrellaID) + 1}:E${
        Number(umbrellaID) + 1
      }`;
      const values = [[action, email, now, place]];

      const res = await fetch("/api/sheets/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ range, values }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`API error: ${text}`);
      }

      const data = await res.json();
      setResult(data);
    };

    if (email && umbrellaID && place) {
      updateSheet().catch(console.error);
    } else {
      setResult({
        error: {
          message: "データが不足していたため、データが送信できませんでした。",
        },
      });
    }
  }, []);

  return (
    <>
      <div className="mb-8">
        {result ? <Complete result={result} /> : "読み込み中..."}
      </div>
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
