import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-white w-full pb-6 pt-2">
        <div className="w-full flex flex-col items-center">
          <p>@example 2025</p>
          <Link href={"/terms"} className="underline underline-offset-4">
            利用規約
          </Link>
        </div>
      </div>
    </>
  );
}
