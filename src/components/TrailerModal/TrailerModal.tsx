import { type FC, useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import { Button } from '../Button/Button';

interface IYouTubePlayer {
  videoId: string;
  title: string;
  onClose: () => void;
}

export const YouTubePlayer: FC<IYouTubePlayer> = ({ 
  videoId, 
  title, 
  onClose 
}) => {
  const playerRef = useRef<any>(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
      if (playerRef.current) {
        playerRef.current.stopVideo();
      }
    };
  }, [onClose]);

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      controls: 1,
    },
  };

  const onReady = (event: any) => {
    playerRef.current = event.target;
    event.target.playVideo();
  };

  const onError = (error: any) => {
    console.error('Ошибка воспроизведения YouTube видео:', error);
  };

  return (
    <div className="youtube-player">
      <div className="youtube-player__overlay" onClick={onClose}>
        <div className="youtube-player__content" onClick={e => e.stopPropagation()}>
          <Button className="youtube-player__close" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </Button>
          <div className="youtube-player__wrapper">
            <YouTube
              videoId={videoId}
              opts={opts}
              onReady={onReady}
              onError={onError}
              className="youtube-player__video"
            />
          </div>
        </div>
      </div>
    </div>
  );
};