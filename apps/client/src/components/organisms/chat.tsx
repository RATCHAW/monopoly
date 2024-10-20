import { Card, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

export const Chat = () => {
  return (
    <Card className="h-full flex flex-col justify-between">
      <CardHeader className="text-center">
        <p>Chat</p>
      </CardHeader>
      <CardFooter className="gap-2">
        <Input className="rounded-3xl" value={window.location.href} />
        <Button size={"icon"} className=" p-4">
          <Send />
        </Button>
      </CardFooter>
    </Card>
  )
}
