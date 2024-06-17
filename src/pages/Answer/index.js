import { Table, Button } from "antd";
import { Link, Outlet } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteAnswer, getAnswer } from "../../services/answerServices";
import { useEffect, useState } from "react";
import { getUserId } from "../../services/userServices";
import { defineTopic } from "../../services/topicServices";
import "./Answer.scss";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Topic's name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Completion Time",
    dataIndex: "completionTime",
    key: "completionTime",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
  {
    title: "Delete",
    key: "delete",
    dataIndex: "delete",
  },
];

function Answer() {
  const [list, setList] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const answer = async () => {
      const userId = await getUserId();
      const result = await getAnswer(userId);
      setList(result);
    };
    answer();
  }, [reload]);

  const reversedList = list.slice().reverse();
  var idList = reversedList.length;

  const handleClick = async (id) => {
    setReload(!reload)
    const result = await deleteAnswer(id)
    
  }



  const data = reversedList.map((item) => {
    return {
      key: item.id,
      id: idList--,
      name: defineTopic(item.topicId),
      completionTime: item.completionTime,
      action: (
        <Button style={{ background: "#008000" }} type="primary">
          <Link className="link" to={"/answer/" + item.id}>
            Xem chi tiết
          </Link>
        </Button>
      ),
      delete: <Button onClick={() => handleClick(item.id)} danger icon={<DeleteOutlined />}></Button>,
    };
  });

  return (
    <>
      <h1 style={{ color: "#C8001A" }}>Danh sách luyện tập</h1>
      <Table columns={columns} dataSource={data} />
    </>
  );
}

export default Answer;
