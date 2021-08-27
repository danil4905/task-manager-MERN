import { ReactComponent as PlayIcon } from "../../assets/play-icon.svg";
import { ReactComponent as StopIcon } from "../../assets/stop-icon.svg";
import { ReactComponent as VolumeIcon } from "../../assets/volume-icon.svg";
import { ReactComponent as MuteIcon } from "../../assets/volume_muted-icon.svg";
import { ReactComponent as FullscreenIcon } from "../../assets/fullscreen-icon.svg";
import { ReactComponent as CollapseIcon } from "../../assets/collapse-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  setMuted,
  setFullscreen,
  changeVolume,
  togglePlay,
} from "../../redux/actions/player-actions";

const VideoPlayer = (props) => {
  const dispatch = useDispatch();
  let currentTime = useSelector((state) => state.player.currentTime);
  let playing = useSelector((state) => state.player.playing);
  let fullscreen = useSelector((state) => state.player.fullscreen);

  function muteFunc() {
    dispatch(setMuted());
    dispatch(changeVolume(1));
  }
  function changeLevel(el) {
    let level = el.target.value;
    if (level === "0") {
      dispatch(setMuted(true));
      dispatch(changeVolume(0));
    } else {
      dispatch(changeVolume(level * 1));
      dispatch(setMuted(false));
    }
  }

  return (
    <div className="video-player">
      <video
        src={props.src}
        poster={props.img}
        width="938px"
        height="597px"
      ></video>
      <div className="video-controls">
        <div className="video-controls-top">
          <input
            type="range"
            className="video-controls__time_range"
            value={currentTime}
            step={0.1}
            min={0}
          />
        </div>
        <div className="video-controls-bottom">
          <div className="video-controls-bottom-left">
            <button
              onClick={() => dispatch(togglePlay())}
              className="video-controls-bottom__play videoBtn"
            >
              {playing ? <StopIcon /> : <PlayIcon />}
            </button>
            <button
              className="video-controls-bottom__mute videoBtn"
              onClick={muteFunc}
            >
              {props.muted ? <MuteIcon /> : <VolumeIcon />}
            </button>
            <input
              type="range"
              className="video-controls-bottom__volume"
              min={0}
              max={10}
              step={1}
              value={props.volume}
              onChange={changeLevel}
            />
          </div>
          <div className="video-controls-bottom-right">
            <div className="video-controls-bottom-time">
              {/* <span>{formattedTime} / </span> */}
              {/* <span>{formattedLength}</span> */}
            </div>
            <button
              className="video-controls-bottom__fullscreen videoBtn"
              onClick={() => dispatch(setFullscreen())}
            >
              {fullscreen ? <CollapseIcon /> : <FullscreenIcon />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
