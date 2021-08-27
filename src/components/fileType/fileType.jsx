import { ReactComponent as JPG } from "../../assets/JPG.svg";
import { ReactComponent as AVI } from "../../assets/AVI.svg";
import { ReactComponent as ZIP } from "../../assets/ZIP.svg";
import { ReactComponent as RAR } from "../../assets/RAR.svg";
import { ReactComponent as DOC } from "../../assets/DOC.svg";
import { ReactComponent as XLS } from "../../assets/XLS.svg";
import { ReactComponent as PDF } from "../../assets/PDF.svg";
import { ReactComponent as GIF } from "../../assets/GIF.svg";
import { ReactComponent as PNG } from "../../assets/PNG.svg";
import { ReactComponent as PPT } from "../../assets/PPT.svg";
import { ReactComponent as TXT } from "../../assets/TXT.svg";
import { ReactComponent as RTF } from "../../assets/RTF.svg";
import { ReactComponent as MOV } from "../../assets/MOV.svg";
import { ReactComponent as MP3 } from "../../assets/MP3.svg";
import { ReactComponent as WAV } from "../../assets/WAV.svg";

const FileType = (props) => {
    let type = props.type.split('/')[1]
  switch (type) {
    case "jpeg":
    case "jpg":
      return <JPG />;
    case "avi":
      return <AVI />;
    case "zip":
      return <ZIP />;
    case "rar":
      return <RAR />;
    case "doc":
      return <DOC />;
    case "xls":
      return <XLS />;
    case "pdf":
      return <PDF />;
    case "gif":
      return <GIF />;
    case "png":
      return <PNG />;
    case "ppt":
      return <PPT />;
    case "txt":
      return <TXT />;
    case "rtf":
      return <RTF />;
    case "mov":
      return <MOV />;
    case "mp3":
      return <MP3 />;
    case "wav":
      return <WAV />;
    default:
      return "";
  }
};
export default FileType;