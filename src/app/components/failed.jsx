import Image from "next/image";

export function Failed({ message }) {
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
        <p className="font-bold mt-4">送信に失敗しました</p>
        <p className="mt-2">{message}</p>
      </div>
    </>
  );
}
