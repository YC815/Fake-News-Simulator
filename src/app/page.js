import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/modetoggle"

export default function Home() {
  return (
    <div className="relative p-8">
      <div>
        <ModeToggle className="absolute top-0 left-0" />
        <a className="ml-4 text-xl font-custom">假訊息製作所</a>
      </div>
      <div className="border border-red-500 rounded-lg p-4 transform translate-y-3">
          {/* Your main content here */}
      </div>
    </div>
  );
}

