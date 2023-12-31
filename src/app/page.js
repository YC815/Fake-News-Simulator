"use client";
// 載入資料、函式庫
import { ModeToggle } from "@/components/modetoggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Copy } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Home() {
  const [currentschedule, setCurrentSchedule] = useState(0); //定義變數
  const handleButtonClick = () => {
    setCurrentSchedule(70); //把進度條變70%
    window.location.href = "/bad_sea"; //導向到遊戲頁面
  };
  return (
    <div className="relative p-8 h-screen max-w-xls">
      <div>
        <ModeToggle className="absolute top-0 left-0" />
        <a className="ml-4 text-xl font-custom">
          假訊息製作所 ｜ [F]ake [N]ews [S]imulator
        </a>
      </div>

      <div className="border-t border-gray-300 my-3"></div>

      <div className="mt-5">
        {/* 第一層選單列 */}
        <Tabs defaultValue="home" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="home">主頁</TabsTrigger>
            <TabsTrigger value="browser">FN browser</TabsTrigger>
            <TabsTrigger value="fnmarker">假訊息工坊</TabsTrigger>
            <TabsTrigger value="share">假訊息推廣</TabsTrigger>
          </TabsList>
          {/* 主頁內容 */}
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
                <AccordionTrigger>我要怎麼開始？</AccordionTrigger>
                <AccordionContent>
                  到FN browser下載一個素材看看吧！
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
          {/* 假訊息瀏覽器 */}
          <TabsContent value="browser">
            <p>點擊任何圖片素材、文字素材即可開始製作假訊息</p>
            <div className="border-t border-gray-300 my-3"></div>

            <div className="bg-gray-200 overflow-hidden rounded-3xl">
              <Dialog>
                <DialogTrigger asChild>
                  <img
                    className="cursor-pointer hover:cursor-pointer"
                    src="/bad_sea/垃圾海邊.jpeg"
                  />
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>點擊按鈕開始下載</DialogTitle>
                    <DialogDescription>下載後自動跳轉至頁面</DialogDescription>
                    {/* 跳轉頁面按鈕 */}
                    <Button onClick={handleButtonClick}>開始</Button>
                    {/* 進度條（裝飾用，無實際效果）*/}
                    <Progress value={currentschedule} />
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </TabsContent>
          {/* 假訊息製作器選單列 */}
          <TabsContent value="fnmarker">
            <Tabs defaultValue="account" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="chatgpt">ChatGPT</TabsTrigger>
                <TabsTrigger value="photoshop">PhotoShop</TabsTrigger>
                <TabsTrigger value="subtitle">字幕器</TabsTrigger>
                <TabsTrigger value="actor">演員</TabsTrigger>
              </TabsList>

              <TabsContent value="chatgpt">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">開發中</Button>
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
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
          {/* 假訊息推播 */}
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
        </Tabs>
      </div>
    </div>
  );
}
