import { Spinner } from '@/components/ui/spinner';
import getCroppedImage from '@/services/imageUrl';
import ErrorAlert from './ErrorAlert';
import { Genre } from '@/services/genresService';
import useGenres from '@/hooks/useGenres';

interface Props {
  activeGenreId?: number;
  onSelectGenre: (genre: Genre) => void;
}
const GenresList = ({ activeGenreId, onSelectGenre: onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  const style =
    'duration-500 transform ease-linear group hover:cursor-pointer p-2 rounded-lg hover:font-bold hover:bg-gray-700 hover:text-gray-50 hover:dark:bg-gray-50 hover:dark:text-gray-700 ';
  const activeStyle =
    style +
    'ring-2 ring-gray-700 bg-gray-50 font-bold dark:bg-gray-700 dark:ring-gray-50';

  return (
    <>
      {error && <ErrorAlert>{error.message}</ErrorAlert>}
      {isLoading && <Spinner size='medium' />}

      <div className='ps-4 gap-4 flex flex-col pt-4'>
        <h2 className='text-3xl ps-2'>Genres</h2>
        <ul className='flex flex-col gap-1'>
          {data?.results.map((genre) => (
            <li
              key={genre.id}
              onClick={() => onSelectGenre(genre)}
              className={genre.id === activeGenreId ? activeStyle : style}
            >
              <div className='group flex flex-row gap-4 items-center'>
                <img
                  src={getCroppedImage(genre.image_background)}
                  className='w-10 h-10 rounded-lg object-cover'
                />
                <p className='text-xl flex-grow'>{genre.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default GenresList;
