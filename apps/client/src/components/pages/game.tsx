import { ShareGame } from "@/components/molecules/share-game"
import { Chat } from "../organisms/chat"
import { GameSettingsComponent } from "../organisms/game-settings"
import { JoinedPlayers } from "../organisms/joined-players"
import GameBoard from "../organisms/game-board"

const GamePage = () => {
  return (
    <div className="grid p-2 gap-2 grid-cols-[1fr,2fr,1fr] h-screen">
      <div className="flex flex-col gap-2">
        <ShareGame />
        <Chat />
      </div>
      <GameBoard />

      <div className="flex flex-col gap-2">
        <JoinedPlayers />
        <GameSettingsComponent />
      </div>
    </div>
  )
}

export default GamePage
