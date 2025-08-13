"use client";

import { useRef, useState } from "react";
import { useAtom } from "jotai";
import { Html5Qrcode } from "html5-qrcode";
import { umbrellaAtom } from "../atom/data";

export default function QRScanner() {
  const readerRef = useRef(null);
  const qrCodeRef = useRef(null);
  const [scannedData, setScannedData] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [umbrellaID, setUmbrellaID] = useAtom(umbrellaAtom);

  const startScan = () => {
    if (!readerRef.current) return;

    if (qrCodeRef.current) {
      // もしすでに動いていたら止める
      stopScan();
    }

    qrCodeRef.current = new Html5Qrcode(readerRef.current.id);

    qrCodeRef.current
      .start(
        { facingMode: "environment" },
        { fps: 10, qrbox: 250 },
        (decodedText) => {
          // setScannedData(decodedText);
          setUmbrellaID(decodedText);
          stopScan();
        }
      )
      .then(() => {
        setIsScanning(true);
      })
      .catch((err) => {
        console.error("Failed to start scanning:", err);
      });
  };

  const stopScan = () => {
    if (!qrCodeRef.current) return;

    qrCodeRef.current
      .stop()
      .then(() => {
        // video要素のsrcObjectのストリームを停止して解放
        const videoElem = document.querySelector(
          `#${readerRef.current.id} video`
        );
        if (videoElem && videoElem.srcObject) {
          videoElem.srcObject.getTracks().forEach((track) => track.stop());
          videoElem.srcObject = null;
        }

        qrCodeRef.current.clear(); // DOMのリセット
        qrCodeRef.current = null;
        setIsScanning(false);
      })
      .catch((err) => {
        console.error("Failed to stop scanning:", err);
      });
  };
  return (
    <>
      <div className="flex flex-col items-center mb-8">
        <p className="mb-3">傘についているQRコードを読み込んでください</p>
        <div
          id="reader"
          ref={readerRef}
          className="w-[300px] h-[220px] rounded-xl bg-[var(--primary-color)] mb-3"
        />
        <button
          onClick={startScan}
          disabled={isScanning}
          className={`rounded-lg bg-[var(--primary-color)] px-6 py-3 text-white font-bold text-lg transition-colors w-[300px]
          ${
            isScanning
              ? "cursor-not-allowed opacity-60"
              : "cursor-pointer hover:bg-[var(--hover-color)]"
          }`}
        >
          カメラで読み取る
        </button>
        {umbrellaID && (
          <p className="mt-4 font-bold text-[var(--primary-font-color)]">
            読み取り結果: {umbrellaID}
          </p>
        )}
      </div>
    </>
  );
}
