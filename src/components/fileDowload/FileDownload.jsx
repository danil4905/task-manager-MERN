import classes from "./file-download.module.scss";
import FileInfo from "../fileInfo/fileInfo";
import downloadIcon from "../../assets/upload-icon.png";

const FileDownload = ({ file }) => {
  return (
    <div className={classes.fileItem}>
      <FileInfo
        type={file.mimetype}
        size={file.size}
        name={file.originalname}
      />
      <a  className={'download'} href={"http://localhost:5000/static/"+file.filename} target="_blank" rel="noreferrer">
        <img src={downloadIcon} alt="" /> Загрузить</a>
    </div>
  );
};
export default FileDownload;
