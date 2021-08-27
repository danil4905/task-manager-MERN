import Modal from "react-modal";
import "./modal.scss";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/actions/mainPage-actions";
import VideoPlayer from "../player/videoPlayer";
import PhotoPlayer from "../player/photoPlayer";
import AudioPlayer from "../player/audioPlayer";
import { ReactComponent as ArrowBack } from "../../assets/back.svg";
import { typeIcon } from "../contentItem/contentItem";
import {chooseType} from "../../utils/chooseType";

Modal.setAppElement("#root");

const ModalWindow = (props) => {
  const dispatch = useDispatch();
  let modalType = useSelector((state) => state.mainPage.modalType);
  let modalImg = useSelector((state) => state.mainPage.modalPreview);
  let modalText = useSelector((state) => state.mainPage.modalTitle);
  let modalLength = useSelector((state) => state.mainPage.modalLength);
  let modalDate = useSelector((state) => state.mainPage.modalTime);
  let playing = useSelector((state) => state.player.playing);
  let muted = useSelector((state) => state.player.muted);
  let volume = useSelector((state) => state.player.volume);

  function closeModalMenu() {
    dispatch(closeModal());
  }
  function chooseTypePlayer(type) {
    switch (type) {
      case "photo":
        return <PhotoPlayer img={modalImg} />;
      case "video":
        return <VideoPlayer img={modalImg} volume={volume} muted={muted}/>;
      default:
        return <AudioPlayer volume={volume} muted={muted} playing={playing}/>;
    }
  }
  return (
    <Modal
      onRequestClose={() => closeModalMenu()}
      isOpen={props.isOpened}
      style={{
        content: {
          backgroundColor: "rgba(0, 0, 0, 0)",
          border: "none",
          outline: "none",
          padding: "0",
          overflow: "initial",
        },
      }}
    >
      <div className="modal-wrap">
        <ArrowBack
          onClick={closeModalMenu}
          cursor="pointer"
          className="arrow_back"
        />
        <div className="mainInfo">
          <div className="mainInfo-type">
            <img src={typeIcon(modalType)} alt="" />
            <span className="mainInfo-type__name">{chooseType(modalType)}</span>
            <span className="mainInfo-type__length">{modalLength}</span>
          </div>
          <div className="mainInfo-text">
            <p className="mainInfo-text__item">{modalText}</p>
            <p className="mainInfo-text__date">{modalDate}</p>
          </div>
        </div>
      </div>
      <div className="playerModal">{chooseTypePlayer(modalType)}</div>
    </Modal>
  );
};

export default ModalWindow;
