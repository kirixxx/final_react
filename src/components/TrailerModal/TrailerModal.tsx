import { type FC, useState, useRef } from "react";
import ReactPlayer from "react-player";
import { Svg } from "../Svg/Svg";

interface YouTubePlayerProps {
  videoId: string;
  title: string;
  onClose: () => void;
}

export const YouTubePlayer: FC<YouTubePlayerProps> = ({ videoId, title, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);


  return (
    <div className="trailer-modal__overlay" onClick={onClose}>
      <div className="trailer-modal__content" onClick={(e) => e.stopPropagation()}>

        <button className="trailer-modal__close" onClick={onClose}>
          <Svg iconId="icon-close" />
        </button>

        <div className="trailer-modal__video-wrapper">
          <ReactPlayer
            src={`https://www.youtube.com/watch?v=${videoId}`}
            playing={isPlaying}
            width="100%"
            height="100%"
            className="react-player"
          />
        </div>
      </div>
    </div>
  );
};