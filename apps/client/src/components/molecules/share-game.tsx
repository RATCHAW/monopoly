import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Info } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"

export const ShareGame = () => {
  return (
    <Card>
      <CardHeader className="flex-row space-x-2 items-center justify-center">
        <p>Share this game</p>
        <Info />
      </CardHeader>
      <CardContent className="flex gap-2">
        <Input readOnly value={window.location.href} />
        <Button>Copy</Button>
      </CardContent>
    </Card>
  )
}
