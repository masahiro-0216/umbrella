"use client";

import { useAtom } from "jotai";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { emailAtom, placeAtom, umbrellaAtom } from "../atom/data";
import { useEffect } from "react";

export default function PlaceButton({ nextPath, place }) {
  const pathname = usePathname();
  const [placeData, setPlaceData] = useAtom(placeAtom);
  const [umbrellaID, setUmbrellaID] = useAtom(umbrellaAtom);
  const [email, setEmail] = useAtom(emailAtom);
  useEffect(() => {
    setPlaceData("");
    setUmbrellaID("");
    setEmail("");
  }, []);
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <p className="font-bold mr-8">{place}</p>
        <Link
          className="bg-[#6EC6E9] py-3 inline-flex items-center justify-center rounded-lg w-1/2 cursor-pointer hover:bg-[#5ab5d4]"
          href={`${pathname}/${nextPath}`}
          onClick={() => setPlaceData(place)}
        >
          選択して次へ
        </Link>
      </div>
    </>
  );
}
