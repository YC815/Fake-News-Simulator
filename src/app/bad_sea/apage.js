import { ModeToggle } from "@/components/modetoggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
const NewPage = () => {
  return (
    <div>
      <div className="relative p-8">
        <div>
          <ModeToggle className="absolute top-0 left-0" />
          <a className="ml-4 text-xl font-custom">
            假訊息製作所 ｜ [F]ake [N]ews [S]imulator
          </a>
        </div>
        <div className="border-t border-gray-300 my-3"></div>
      </div>

      <div className="flex items-center justify-center">
        <img className="w-auto max-h-96" src="/bad_sea/垃圾海邊.jpeg" />
      </div>

      <Button
        variant="outline"
        className="text-center py-6 border w-full mx-10 border-primary rounded-md"
      >
        Hello
      </Button>

      <div class="h-screen">
        <img
          className="absolute bottom-0 left-0 h-[500px] w-auto"
          src="/boss.png"
        />
      </div>
    </div>
  );
};

export default NewPage;
