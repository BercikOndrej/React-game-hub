import useGameScreenshots from '@/hooks/useGameScreenshots';
import { Skeleton } from './ui/skeleton';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

interface Props {
  gameId: number;
}
const ScreenshotsGrid = ({ gameId }: Props) => {
  const { data, isLoading, error } = useGameScreenshots(gameId);
  const skeletons = Array.from(
    { length: data?.count || 8 },
    (_, num) => num + 1
  );

  if (error)
    throw new Error('Error during a loading a screenshots of the game');

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      {isLoading &&
        skeletons.map((skeleton) => (
          <Skeleton key={skeleton} className='w-full h-[400px]' />
        ))}
      <PhotoProvider>
        {data?.results.map((screenshot) => (
          <PhotoView src={screenshot.image}>
            <div className=' overflow-hidden rounded-md hover:cursor-pointer'>
              <img
                className='w-full h-full hover:scale-110 transition-transform duration-500'
                key={screenshot.id}
                src={screenshot.image}
              />
            </div>
          </PhotoView>
        ))}
      </PhotoProvider>
    </div>
  );
};

export default ScreenshotsGrid;
