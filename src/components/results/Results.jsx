import classes from "./results.module.scss";
import { useState } from "react";
import Dropzone from "react-dropzone";
import { ReactComponent as Icon } from "../../assets/plus_dnd.svg";
import ResultsItem from "./ResultsItem";
import { useEffect } from "react";
import API from "../../utils/newApi";


const Results = (props) => {
  const [files, setFiles] = useState("");
  useEffect(() => {
    API.get("api/tasks/" + props.id).then((response) =>
      setFiles(response.data.contents)
    );
  }, [props.id]);
  const handleDrop = async (acceptedFiles, rejecteFiles) => {
    if(acceptedFiles[0]) {
        let formData = new FormData();
        let newFiles = [...files,...acceptedFiles];
        for(let i = 0;i<newFiles.length;i++) {
            formData.append('files',newFiles[i]);
        }
        if(files.length <= 4) {
        await API.patch("api/task/"+props.id,formData).then((response) => setFiles(response.data.contents));
        }
      
    }
  };
    return (
      <div className={classes.wrapperFiles}>
          {!files? (''):(<div className={classes.files}>
          <ul className={classes.filesList}>
            {files.map((el, index) => (
              <ResultsItem file={el} type={props.type} key={index} />
            ))}
          </ul>
        </div>)}
        <Dropzone
          onDrop={handleDrop}
          accept={props.type + "/*"}
          minSize={1}
          maxSize={13072000}
          multiple
        >
          {({
            getRootProps,
            getInputProps,
            isDragActive,
            isDragAccept,
            isDragReject,
          }) => {
            const additionalClass = isDragAccept
              ? "accept_drop"
              : isDragReject
              ? "reject_drop"
              : "";

            return (
              <div
                {...getRootProps({
                  className: `dropzone ${additionalClass} ${classes.drop}`,
                })}
              >
                <input {...getInputProps()} />
                <Icon
                  className={
                    isDragActive ? classes.basicIcon : classes.hoverIcon
                  }
                />
              </div>
            );
          }}
        </Dropzone>
      </div>
    );
  }

export default Results;
