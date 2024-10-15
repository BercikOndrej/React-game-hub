import useGameTrailer from '@/hooks/useGameTrailer';
import { Spinner } from './ui/spinner';

interface Props {
  gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useGameTrailer(gameId);

  if (isLoading) return <Spinner />;
  if (error) throw new Error();

  const firstTrailer = data?.results[0];
  return firstTrailer ? (
    <video
      className='rounded-md'
      src={firstTrailer.data[480]}
      poster={firstTrailer.preview}
      controls
    />
  ) : null;
};

export default GameTrailer;