"use client";
import { emailAtom, umbrellaAtom } from "@/app/atom/data";
import QRScanner from "@/app/components/QRScanner";
import { useAtom } from "jotai";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function InputData() {
  const [umbrellaID, setUmbrellaID] = useAtom(umbrellaAtom);
  const [email, setEmail] = useAtom(emailAtom);
  const [currentEmail, setCurrentEmail] = useState("");
  const [error, setError] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (e) => {
    const val = e.target.value;
    setCurrentEmail(val);
    if (!validateEmail(val)) {
      setError("正しいメールアドレスを入力してください");
    } else {
      setError("");
    }
  };

  useEffect(() => {
    setEmail("");
    setUmbrellaID("");
  }, []);
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <QRScanner />
        <div className="w-full mb-8">
          <p className="mb-2">メールアドレスを入力してください</p>
          <label className="flex flex-col min-w-40 flex-1">
            <input
              placeholder="example@example.com"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e141b] focus:outline-0 focus:ring-0 border-none bg-[#e7edf3] focus:border-none h-14 placeholder:text-[#4e7097] p-4 text-base font-normal leading-normal"
              value={currentEmail}
              type="email"
              onChange={handleChange}
            />
            {error && <p className="text-red-500">{error}</p>}
          </label>
        </div>
        <div className="w-full">
          <div className="mb-4">
            {currentEmail != "" && umbrellaID != "" && error == "" ? (
              <Link
                className="bg-[#6EC6E9] py-3 w-full inline-flex items-center justify-center rounded-lg font-bold cursor-pointer hover:bg-[#5ab5d4]"
                href={`${pathname}/confirm`}
                onClick={() => setEmail(currentEmail)}
              >
                次へ
              </Link>
            ) : (
              <p className="bg-[#E0E2E3] py-3 w-full inline-flex items-center justify-center rounded-lg font-bold text-[#8C8F91] cursor-not-allowed">
                次へ
              </p>
            )}
          </div>
          <div>
            <button
              className="bg-[#C5C9CC] py-3 w-full inline-flex items-center justify-center rounded-lg font-bold cursor-pointer hover:bg-[#B1B5B8]"
              onClick={() => router.back()}
            >
              戻る
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
