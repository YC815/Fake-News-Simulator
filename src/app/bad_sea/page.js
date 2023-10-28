"use client";
import { ModeToggle } from "@/components/modetoggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import data from "@/../public/bad_sea/texts";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(1); // 初始索引
  const [buttonText, setButtonText] = useState(""); // 初始按鈕文字

  //const [data, setData] = useState([]);
  useEffect(() => {
    console.log("data:", data);
    setButtonText(data[currentIndex]);
    //setData(data);
  }, [currentIndex]);

  const handleButtonClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 15 ? 1 : prevIndex + 1));
  };

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const [chatgptMsg, setChatgptMsg] = useState(""); // 初始化 chatgpt_msg 的状态为空字符串

  const cleanInput = () => {
    setInputValue(""); // 将输入框的值设为空字符串
    setChatgptMsg(
      '好的，以下是我幫您生成的假訊息：\n    "台灣海灘開始受污染，沙灘黑化海面污油化，美國專家評鑑初步推測是受日本核污水影響，英國菁英大學Adolf Garcia教授發言：「恐無法挽回」，科研院發出聲明：「建議不要食用本土海鮮」。"\n\n已幫您將假訊息複製到剪貼簿。'
    );
  };
  const [fbImg, setFbImg] = useState("");
  const [article, setArticle] = useState("");
  const autoInputFb = () => {
    setFbImg("/bad_sea/垃圾海邊.jpeg");
    setArticle(
      "灣海灘開始受污染，沙灘黑化海面污油化，美國專家評鑑初步推測是受日本核污水影響，英國菁英大學Adolf Garcia教授發言：「恐無法挽回」，科研院發出聲明：「建議不要食用本土海鮮」。"
    );
  };
  return (
    <div className="relative p-8 h-screen max-w-xls">
      {/* <pre>{JSON.stringify(data["1"], null, 2)}</pre> */}
      {/* <pre>data: {data}</pre> */}
      <div>
        <ModeToggle className="absolute top-0 left-0" />
        <a className="ml-4 text-xl font-custom">
          假訊息製作所 ｜ [F]ake [N]ews [S]imulator
        </a>
      </div>

      <div className="border-t border-gray-300 my-3"></div>

      <div className="mt-5">
        <Tabs defaultValue="browser" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="home">主頁</TabsTrigger>
            <TabsTrigger value="browser">FN browser</TabsTrigger>
            <TabsTrigger value="fnmarker">假訊息工坊</TabsTrigger>
            <TabsTrigger value="share">假訊息推廣</TabsTrigger>
          </TabsList>

          <TabsContent value="home"></TabsContent>
          <TabsContent value="browser">
            <p>點擊任何圖片素材、文字素材即可開始製作假訊息</p>
            <div className="border-t border-gray-300 my-3"></div>

            <div className="bg-gray-200 overflow-hidden rounded-3xl">
              <img className="" src="/bad_sea/垃圾海邊.jpeg" />
            </div>
          </TabsContent>

          <TabsContent value="fnmarker">
            <Tabs defaultValue="account" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="chatgpt">ChatGPT</TabsTrigger>
                <TabsTrigger value="photoshop">PhotoShop</TabsTrigger>
                <TabsTrigger value="subtitle">字幕器</TabsTrigger>
                <TabsTrigger value="actor">演員</TabsTrigger>
              </TabsList>

              <TabsContent value="chatgpt">
                <Card className="w-[680px] h-[320px]">
                  <CardHeader>
                    <CardTitle>ChatGPT</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h5>{chatgptMsg}</h5>
                  </CardContent>
                </Card>

                <div className="flex w-full max-w-sm items-center space-x-2">
                  <Input
                    type="msg-to-gpt"
                    placeholder="輸入要求"
                    className="w-[680px]"
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                  <Button
                    type="submit"
                    className="w-[50px]"
                    onClick={cleanInput}
                    value={inputValue}
                  >
                    <ion-icon name="send"></ion-icon>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="photoshop">假pt</TabsContent>

              <TabsContent value="subtitle">上字幕器</TabsContent>

              <TabsContent value="actor">請演員念稿</TabsContent>
            </Tabs>
          </TabsContent>

          <TabsContent value="share">
            <Tabs defaultValue="account" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="tiktok">Tiktok</TabsTrigger>
                <TabsTrigger value="line">長輩Line群</TabsTrigger>
                <TabsTrigger value="fb">FB</TabsTrigger>
              </TabsList>

              <TabsContent value="tiktok">假Tiktok</TabsContent>

              <TabsContent value="line">假Line群</TabsContent>

              <TabsContent value="fb">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className=" w-96 h-32 text-3xl">
                      上傳內容
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>準備您的內容</SheetTitle>
                      <SheetDescription>
                        請依照下面的指示開始設置
                      </SheetDescription>
                    </SheetHeader>
                    <SheetFooter>
                      <Button type="submit" onClick={autoInputFb}>
                        自動輸入
                      </Button>
                    </SheetFooter>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="img" className="text-right">
                          圖片
                        </Label>
                        <img src={fbImg} className="col-span-3 " />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="article" className="text-right">
                          文案
                        </Label>
                        <Input
                          id="article"
                          value={article}
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <SheetFooter>
                      <SheetClose asChild>
                        <Button type="submit">上傳</Button>
                      </SheetClose>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </div>

      <Button
        variant="outline"
        className="text-center py-6 border w-[1000px] h-[200px] border-primary rounded-md absolute bottom-52 left-36 text-3xl"
        onClick={handleButtonClick}
      >
        {buttonText}
      </Button>

      <img className="absolute bottom-0 left-0 h-auto w-96" src="/boss.png" />
    </div>
  );
}