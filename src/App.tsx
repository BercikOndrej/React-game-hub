import NavBar from "@/components/NavBar";
import GameGrid from "@/components/GameGrid";
import { Genre } from "@/hooks/useGenres";
import { Platform } from "@/hooks/usePlatforms";
import { useState } from "react";
import PlatformSelector from "@/components/PlatformSelector";
import SortSelector from "@/components/SortSelector";
import GenresList from "@/components/GenresList";
import GameHeading from "@/components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  ordering: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <div className="grid grid-cols-1 grid-rows-[5em,1fr] lg:grid-cols-[200px,1fr]">
        <div className="row-span-1 col-span-2">
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </div>

        <aside className="hidden row-span-1 col-span-1 lg:inline">
          <GenresList
            activeGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </aside>

        <main className="col-span-1 row-span-1 mx-auto p-4 flex flex-col gap-4 w-full">
          <GameHeading gameQuery={gameQuery} />
          <div className="flex flex-row gap-4">
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              onSelectOrdering={(value) =>
                setGameQuery({ ...gameQuery, ordering: value })
              }
            />
          </div>
          <GameGrid gameQuery={gameQuery} />
        </main>
      </div>
    </>
  );
}

export default App;
