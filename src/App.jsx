import { useEffect, useState } from "react";
import { FloatButton, Spin, Upload } from "antd";
import "./App.css";
import useFetchPdf from "./useFetchPdf";
import MainInfo from "./components/MainInfo";
import FloorsInfo from "./components/FloorsInfo";

function App() {
  const [fileList, setFileList] = useState([]);
  const { text, error, loading, fetchPdf } = useFetchPdf();

  useEffect(() => {}, []);

  const props = {
    onChange() {
      setFileList([]);
      const formData = new FormData();
      fileList.forEach(() => {
        formData.append("pdfFile", fileList[0]);
      });
      fetchPdf(formData);
    },
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
  };

  if (loading) {
    return <div style={{padding: '45vh'}}><Spin size="large"/></div>
  }

  return (
    <div
      style={{ display: "flex", alignItems: "stretch", flexDirection: "column", margin: '0 50px 80px 50px'}}
    >
      {text ? (
        <div>
          <MainInfo text={text.mainInfo} />
          <FloorsInfo text={text.floorsInfo} />
        </div>
      ) : (
        <div></div>
      )}
      <Upload onClick={() => setFileList([])} {...props}>
        <FloatButton
          type="primary"
          description="CHOOSE PDF FILE TO UPLOAD"
          shape="square"
          style={{ width: "220px" }}
        />
      </Upload>
    </div>
  );
}

export default App;
