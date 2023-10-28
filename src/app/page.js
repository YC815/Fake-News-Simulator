"use client";
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

export default function Home() {
  const [currentschedule, setCurrentSchedule] = useState(0);
  const handleButtonClick = () => {
    setCurrentSchedule(70);
    window.location.href = "/bad_sea";
  };
  return (
    <div className="relative p-8">
      <div>
        <ModeToggle className="absolute top-0 left-0" />
        <a className="ml-4 text-xl font-custom">
          假訊息製作所 ｜ [F]ake [N]ews [S]imulator
        </a>
      </div>

      <div className="border-t border-gray-300 my-3"></div>

      <div className="mt-5">
        <Tabs defaultValue="home" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="home">主頁</TabsTrigger>
            <TabsTrigger value="browser">FN browser</TabsTrigger>
            <TabsTrigger value="fnmarker">假訊息工坊</TabsTrigger>
            <TabsTrigger value="share">假訊息推廣</TabsTrigger>
          </TabsList>

          <TabsContent value="home">
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
          </TabsContent>
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
                    <Button onClick={handleButtonClick}>開始</Button>
                    <Progress value={currentschedule} />
                  </DialogHeader>
                </DialogContent>
              </Dialog>
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

              <TabsContent value="chatgpt">假CT</TabsContent>

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

              <TabsContent value="fb">假fb</TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
