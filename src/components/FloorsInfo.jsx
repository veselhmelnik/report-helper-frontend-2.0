import { Divider, List, Typography } from "antd";
import { v4 as uuidv4 } from "uuid";

const { Text} = Typography;

const FloorsInfo = ({ text }) => {
  return (
    <>
      <Divider orientation="left">Floors Information</Divider>
      <div style={{ display: "flex", gap: "1%" }}>
        {text.map((item) => {
          return (
            <SingleFloorInfo
              key={uuidv4()}
              objectSize={text.length}
              floorObj={item}
            />
          );
        })}
      </div>
    </>
  );
};

export default FloorsInfo;

const SingleFloorInfo = ({ objectSize, floorObj }) => {
  const isCorrectFloorName = floorObj.isCorrectFloorName ? "" : "danger";
  const isCorrectFloorType = floorObj.isCorrectFloorType ? "secondary" : "danger";

  const listSize = 100 / objectSize;
  return (
    <List
      size="small"
      style={{ width: `${listSize}%` }}
      header={
        <div>
          <Text strong type={isCorrectFloorName}>{floorObj.floorName}</Text><br/>
          <Text type={isCorrectFloorType}>{floorObj.floorType}</Text>
        </div>
      }
      bordered
      dataSource={floorObj.rooms}
      renderItem={(item) => (
        <List.Item title={name}>
          <RoomIssues
            name={item.name}
            isUnique={item.isUnique}
            isCorrectName={item.isCorrectName}
            isCorrectNumber={item.isCorrectNumber}
          />
        </List.Item>
      )}
    />
  );
};

const RoomIssues = ({ name, isUnique, isCorrectNumber, isCorrectName }) => {
  const existingRoom = isUnique ? "" : "ВЖЕ IСНУЄ";
  const incorrectNumber = isCorrectNumber ? "" : "Неправильна нумерацiя";
  const incorrectName = isCorrectName ? "" : "Невизначена назва";

  if (isUnique && isCorrectName && isCorrectNumber) {
    return <Text style={{ margin: "0 auto" }}>{name}</Text>;
  } else {
    return (
      <Text style={{ margin: "0 auto" }} type="danger">
        <div>{name} </div>
        <div>{existingRoom} </div>
        <div>{incorrectName} </div>
        <div> {incorrectNumber} </div>
      </Text>
    );
  }
};
