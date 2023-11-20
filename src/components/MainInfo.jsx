import { Card, Divider, List } from "antd";

const MainInfo = ({ text }) => {
  const data = [
    {
      title: "AREA",
      content: text?.area,
    },
    {
      title: "FLOORS",
      content: text?.floors,
    },
    {
      title: "BEDROOMS",
      content: text?.bedrooms,
    },
    {
      title: "BATHROOMS",
      content: text?.bathrooms,
    },
  ];
  return (
      <div>
          <div>
        <Divider orientation="left">Main Information</Divider>
      </div>
          <div
            style={{
              marginBottom: "15px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div>
              <strong>Address:</strong> {text.address}
            </div>
            <div>
              <a
                href={text.link}
                target="_blank"
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                Zillow Link
              </a>
            </div>
          </div>
          <List
            grid={{
              gutter: 12,
              column: 4,
            }}
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <Card
                  title={item.title}
                  size="small"
                  style={{ backgroundColor: "#e6f4ff"}}
                >
                  {item.content}
                </Card>
              </List.Item>
            )}
          />
        </div>
  );
};

export default MainInfo;
