import { ModeToggle } from "@/components/modetoggle"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  return (
    <div className="relative p-8">
      <div>
        <ModeToggle className="absolute top-0 left-0" />
        <a className="ml-4 text-xl font-custom">假訊息製作所 ｜ [F]ake [N]ews [S]imulator</a>
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

          <TabsContent value="home"></TabsContent>
          <TabsContent value="browser">
            <div tag="狗耳新聞" className="mt-4">
              <div tag="第一行" className="flex items-center">
                <Avatar>
                  <AvatarImage src="/dog-icon.jpeg" />
                </Avatar>
                <div>
                  <p className="ml-2" href="">狗耳新聞</p>
                  <p className="text-gray-500 text-sm ml-2">https://dog.news.com.tw ＞ tag ＞ </p>
                </div>
              </div>
              <div tag="第二行">

              </div>
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
                假CT
              </TabsContent>

              <TabsContent value="photoshop">
                假pt
              </TabsContent>

              <TabsContent value="subtitle">
                上字幕器
              </TabsContent>

              <TabsContent value="actor">
                請演員念稿
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
                假Tiktok
              </TabsContent>

              <TabsContent value="line">
                假Line群
              </TabsContent>

              <TabsContent value="fb">
                假fb
              </TabsContent>

            </Tabs>

          </TabsContent>

        </Tabs>
      </div >
    </div >
  );
}

