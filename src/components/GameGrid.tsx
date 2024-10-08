import useGames from '@/hooks/useGames';
import GameCard from '@/components/GameCard';
import GameCardSkeleton from '@/components/GameCardSkeleton';
import { GameQuery } from '@/App';
import ErrorAlert from './ErrorAlert';

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const keys = Array.from({ length: 16 }, (_, num) => num + 1);
  return (
    <>
      {error && <ErrorAlert>{error.message}</ErrorAlert>}
      <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {isLoading &&
          keys.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data?.results.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
