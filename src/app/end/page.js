"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import data from "@/../public/end/texts";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(1); // 初始索引
  const [buttonText, setButtonText] = useState(""); // 初始按鈕文字
  useEffect(() => {
    console.log("data:", data);
    setButtonText(data[currentIndex]);
    //setData(data);
  }, [currentIndex]);

  const handleButtonClick = () => {
    if (currentIndex === 6) {
      router.push("about:blank");
    } else {
      setCurrentIndex((prevIndex) => (prevIndex === 6 ? 1 : prevIndex + 1));
    }
  };
  return (
    <div className="relative p-8 h-screen max-w-xls">
      <Button
        variant="outline"
        className="text-center py-6 border w-[1000px] h-[200px] border-primary rounded-md absolute bottom-52 left-36 text-3xl"
        onClick={handleButtonClick}
      >
        {buttonText}
      </Button>

      <img className="absolute bottom-0 left-0 h-auto w-96" src="/poilot.png" />
    </div>
  );
}
