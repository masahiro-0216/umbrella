import Image from "next/image";

export function Success() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Image
          src={"/thanks.png"}
          width={200}
          height={100}
          className="w-3/4"
          alt="thanks"
          priority
        />
        <p className="font-bold mt-4">ご利用ありがとうございます</p>
        <p className="mt-2">登録が完了しました</p>
      </div>
    </>
  );
}
