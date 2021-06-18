import { useState } from "react";

import "../css/UploadFile.css";

const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [selectedFileContent, setSelectedFileContent] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [isWhatsAppFile, setIsWhatsAppFile] = useState(false);
  const [whatsAppFileStatistics, setWhatsAppFileStatistics] = useState({});
  const [interveners] = useState([]);
  const [messages] = useState([]);

  const changeHandler = (event) => {
    let file = event.target.files[0];

    if (file) {
      console.log("Se ha seleccionado un archivo.");
      setSelectedFile(file);
      setIsSelected(true);
      readFileContent(selectedFile);
    } else {
      console.log("No se ha seleccionado un archivo.");
      setIsSelected(false);
    }
  };

  let fileReader;

  const readFileContent = (file) => {
    fileReader = new FileReader();
    fileReader.readAsText(file);
    fileReader.onloadend = checkWhatsAppFormat;
  };

  const checkWhatsAppFormat = () => {

    setSelectedFileContent(fileReader.result);

    try {
      let numberOfLinesWithOutWhatsAppFormat = 0;
      const array = selectedFileContent.split("\n");
      console.time("MessagesProcess");

      array.forEach((value) => {
        let date = value.substring(0, value.indexOf("-")).trim();
        value = value.substring(value.indexOf("-") + 1, value.length).trim();

        let intervener = value.substring(0, value.indexOf(":")).trim();

        let message = value
          .substring(value.indexOf(":") + 1, value.length)
          .trim();

        if (
          !/^[1-9][0-9]?\/[1-9][0-9]?\/[1-9][0-9]?\s[0-9][0-9]?:[0-9][0-9]?/.test(
            date
          ) &&
          messages.length > 0
        ) {
          numberOfLinesWithOutWhatsAppFormat++;
          let jsonStr = JSON.stringify(messages.pop());
          let json = JSON.parse(jsonStr);
          json.message = json.message + "\n" + value;
          messages.push(json);
        } else {
          messages.push({
            date: date,
            interviner: intervener,
            message: message,
          });

          if (intervener && !interveners.includes(intervener)) {
            interveners.push(intervener);
          }
        }
      });

      let probability =
        (numberOfLinesWithOutWhatsAppFormat * 100) / array.length;

      setWhatsAppFileStatistics({
        numberOfLinesWithOutWhatsAppFormat: numberOfLinesWithOutWhatsAppFormat,
        totalNumberOfLines: array.length,
        probability: probability,
      });

      console.log(JSON.stringify(whatsAppFileStatistics));

      if (probability > 85) {
        setIsWhatsAppFile(true);
      }

      console.timeEnd("MessagesProcess");
    } catch (error) {
      console.error(error);
      setIsWhatsAppFile(false);
    }
  };

  return (
    <div className="Upload-file-container">
      <input
        type="file"
        name="file"
        id="inputFile"
        onChange={changeHandler}
        className="Button-upload-file"
      />
      <label htmlFor="inputFile" className="Label-upload-file">
        {isSelected ? "Cambiar Fichero." : "Subir fichero."}
      </label>
      {isSelected ? (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Filetype: {selectedFile.type}</p>
          <p>Size in bytes: {selectedFile.size}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default UploadFile;
