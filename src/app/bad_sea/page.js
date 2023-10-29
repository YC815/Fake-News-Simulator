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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
export default function Home() {
  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(1); // 初始索引
  const [prevIndex, setPrevIndex] = useState(0);
  const [buttonText, setButtonText] = useState(""); // 初始按鈕文字
  const [step7, setStep7] = useState(false);
  const [setp11, setStep11] = useState(false);
  //const [data, setData] = useState([]);
  useEffect(() => {
    console.log("data:", data);
    setButtonText(data[currentIndex]);
    //setData(data);
  }, [currentIndex]);

  const handleButtonClick = () => {
    if (currentIndex === 7 && step7 === false) {
      console.log("step7");
    } else if (currentIndex === 11 && setp11 === false) {
      console.log("setp11");
    } else if (currentIndex === 13) {
      router.push("/played_page");
    } else {
      setCurrentIndex((prevIndex) => (prevIndex === 14 ? 1 : prevIndex + 1));
    }
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
    setStep7(true);
  };
  const [fbImg, setFbImg] = useState("/imagescannotload.png");
  const [article, setArticle] = useState("");
  const autoInputFb = () => {
    setFbImg("/bad_sea/垃圾海邊.jpeg");
    setArticle(
      "灣海灘開始受污染，沙灘黑化海面污油化，美國專家評鑑初步推測是受日本核污水影響，英國菁英大學Adolf Garcia教授發言：「恐無法挽回」，科研院發出聲明：「建議不要食用本土海鮮」。"
    );
  };

  const uploadFb = () => {
    setStep11(true);
  };

  const fbOnClick = () => {
    console.log("fbOnClick");
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

          <TabsContent value="home">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>想知道作品簡介？</AccordionTrigger>
                <AccordionContent>
                  <Button asChild>
                    <Link href="https://github.com/YC815/Fake-News-Simulator">
                      點擊
                    </Link>
                  </Button>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  點擊內容後頁面沒有變動怎麼辦？
                </AccordionTrigger>
                <AccordionContent>
                  可能是載入較慢導致的，稍等幾秒即可解決。
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>遇到人物對話怎麼辦？</AccordionTrigger>
                <AccordionContent>
                  點擊對話框即可繼續對話，請依照人物的指示進行遊戲操作。
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>我太無聊怎麼辦？</AccordionTrigger>
                <AccordionContent>
                  可能需要3~5秒載入
                  <audio autoPlay src="/rickroll.mp3">
                    Your browser does not support the
                    <code>audio</code> element.
                  </audio>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
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

              <TabsContent value="photoshop">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">開發中</Button>
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
              </TabsContent>

              <TabsContent value="subtitle">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">開發中</Button>
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
              </TabsContent>

              <TabsContent value="actor">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">開發中</Button>
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
              </TabsContent>
            </Tabs>
          </TabsContent>

          <TabsContent value="share">
            <Tabs defaultValue="account" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="tiktok">Tiktok</TabsTrigger>
                <TabsTrigger value="line">長輩Line群</TabsTrigger>
                <TabsTrigger value="fb">FB</TabsTrigger>
              </TabsList>

              <TabsContent value="tiktok">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">開發中</Button>
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
              </TabsContent>

              <TabsContent value="line">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">開發中</Button>
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
              </TabsContent>

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
                        <textarea
                          id="article"
                          value={article}
                          className="col-span-3 h-32"
                        />
                      </div>
                    </div>
                    <SheetFooter>
                      <SheetClose asChild>
                        <Button type="submit" onClick={uploadFb}>
                          上傳
                        </Button>
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
