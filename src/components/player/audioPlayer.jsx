import { ReactComponent as PlayIcon } from "../../assets/play-icon.svg";
import { ReactComponent as StopIcon } from "../../assets/stop-icon.svg";
import { ReactComponent as VolumeIcon } from "../../assets/volume-icon.svg";
import { ReactComponent as MuteIcon } from "../../assets/volume_muted-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  setMuted,
  changeVolume,
  togglePlay,
} from "../../redux/actions/player-actions";

const AudioPlayer = (props) => {
  let currentTime = useSelector((state) => state.player.currentTime);
  const dispatch = useDispatch();
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
  function muteFunc() {
    if (props.muted) {
      dispatch(setMuted(false));
      dispatch(changeVolume(1));
    } else {
      dispatch(setMuted(true));
      dispatch(changeVolume(0));
    }
  }

  return (
    <div className="audioPlayer">
      <audio src={props.src}></audio>
      <div className="audio-controls">
        <button onClick={() => dispatch(togglePlay())} className="videoBtn">
          {props.playing ? <StopIcon /> : <PlayIcon />}
        </button>
        <input
          type="range"
          className="audio-controls__time_range"
          value={currentTime}
          step={0.1}
          min={0}
        />
        <button className="videoBtn muteIcon" onClick={muteFunc}>
          {props.muted ? <MuteIcon /> : <VolumeIcon />}
        </button>
        <input
          type="range"
          className="audio-controls__volume-range"
          min={0}
          max={10}
          step={1}
          value={props.volume}
          onChange={changeLevel}
        />
        <div className="audio-time timePlayer">
          <span>00:26 / </span>
          <span>2:31</span>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
