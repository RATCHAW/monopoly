"use client"

import { useState } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Lock, Bot, Map, Coins, Plane, Gavel, Home, DollarSign, Shuffle } from "lucide-react"

export function GameSettingsComponent() {
  const [settings, setSettings] = useState({
    maxPlayers: "4",
    privateRoom: true,
    allowBots: false,
    boardMap: "Classic",
    x2Rent: false,
    vacationCash: false,
    auction: false,
    dontCollectRentInPrison: false,
    mortgage: false,
    evenBuild: true,
    startingCash: "1500",
    randomizePlayerOrder: true,
  })

  const handleSettingChange = (setting: string, value: boolean | string) => {
    setSettings((prev) => ({ ...prev, [setting]: value }))
  }

  return (
    <div className="flex flex-grow h-1">
      <ScrollArea className="w-full rounded-md border">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Game settings</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  <span className="font-medium">Maximum players</span>
                </div>
                <p className="text-sm text-muted-foreground">How many players can join the game</p>
              </div>
              <Select value={settings.maxPlayers} onValueChange={(value) => handleSettingChange("maxPlayers", value)}>
                <SelectTrigger className="w-[70px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[2, 3, 4, 5, 6].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <SettingItem
              icon={<Lock className="w-5 h-5" />}
              title="Private room"
              description="Private rooms can be accessed using the room URL only"
              value={settings.privateRoom}
              onChange={(value) => handleSettingChange("privateRoom", value)}
            />
            <SettingItem
              icon={<Bot className="w-5 h-5" />}
              title="Allow bots to join"
              description="Bots will join the game based on availability"
              value={settings.allowBots}
              onChange={(value) => handleSettingChange("allowBots", value)}
              beta
            />
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center">
                  <Map className="w-5 h-5 mr-2" />
                  <span className="font-medium">Board map</span>
                </div>
                <p className="text-sm text-muted-foreground">Change map tiles, properties and stacks</p>
              </div>
              <Select value={settings.boardMap} onValueChange={(value) => handleSettingChange("boardMap", value)}>
                <SelectTrigger className="w-[100px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Classic">Classic</SelectItem>
                  <SelectItem value="Modern">Modern</SelectItem>
                  <SelectItem value="Sci-Fi">Sci-Fi</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <h2 className="text-xl font-semibold mt-8 mb-4">Gameplay rules</h2>
          <div className="space-y-4">
            <SettingItem
              icon={<Coins className="w-5 h-5" />}
              title="x2 rent on full-set properties"
              description="If a player owns a full property set, the base rent payment will be doubled"
              value={settings.x2Rent}
              onChange={(value) => handleSettingChange("x2Rent", value)}
            />
            <SettingItem
              icon={<Plane className="w-5 h-5" />}
              title="Vacation cash"
              description="If a player lands on Vacation, all collected money from taxes and bank payments will be earned"
              value={settings.vacationCash}
              onChange={(value) => handleSettingChange("vacationCash", value)}
            />
            <SettingItem
              icon={<Gavel className="w-5 h-5" />}
              title="Auction"
              description="If someone skips purchasing the property landed on, it will be sold to the highest bidder"
              value={settings.auction}
              onChange={(value) => handleSettingChange("auction", value)}
            />
            <SettingItem
              icon={<Home className="w-5 h-5" />}
              title="Don't collect rent while in prison"
              description="Rent will not be collected when landing on properties whose owners are in prison"
              value={settings.dontCollectRentInPrison}
              onChange={(value) => handleSettingChange("dontCollectRentInPrison", value)}
            />
            <SettingItem
              icon={<Home className="w-5 h-5" />}
              title="Mortgage"
              description="Mortgage properties to earn 50% of their cost, but you won't get paid rent when players land on them"
              value={settings.mortgage}
              onChange={(value) => handleSettingChange("mortgage", value)}
            />
            <SettingItem
              icon={<Home className="w-5 h-5" />}
              title="Even build"
              description="Houses and hotels must be built up and sold off evenly within a property set"
              value={settings.evenBuild}
              onChange={(value) => handleSettingChange("evenBuild", value)}
            />
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5 mr-2" />
                  <span className="font-medium">Starting cash</span>
                </div>
                <p className="text-sm text-muted-foreground">Adjust how much money players start the game with</p>
              </div>
              <Select
                value={settings.startingCash}
                onValueChange={(value) => handleSettingChange("startingCash", value)}
              >
                <SelectTrigger className="w-[100px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {["500", "1000", "1500", "2000", "2500"].map((amount) => (
                    <SelectItem key={amount} value={amount}>
                      ${amount}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <SettingItem
              icon={<Shuffle className="w-5 h-5" />}
              title="Randomize player order"
              description="Randomly reorder players at the beginning of the game"
              value={settings.randomizePlayerOrder}
              onChange={(value) => handleSettingChange("randomizePlayerOrder", value)}
            />
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}

function SettingItem({ icon, title, description, value, onChange, beta = false }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="flex items-center">
          {icon}
          <span className="font-medium ml-2">{title}</span>
          {beta && <span className="ml-2 text-xs bg-blue-500 text-white px-1 rounded">Beta</span>}
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <Switch checked={value} onCheckedChange={onChange} />
    </div>
  )
}
