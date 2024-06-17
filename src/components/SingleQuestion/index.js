import { Button, Form, Radio, Space } from "antd";
import { useState } from "react";
import "./SingleQuestion.scss";
import { postAnswer } from "../../services/answerServices";
import { getEmail } from "../../services/userServices";
import { getCookie } from "../../helpers/cookie";
import {Navigate, useNavigate} from "react-router-dom"
import GradeScreen from "../GradeScreen";

function SingleQuestion(props) {
  const { list } = props;
  const { Item } = Form;
  const [submit, setSubmit] = useState(false);

  const getUserId = async () => {
    const result = await getEmail(getCookie("email"));
    return(result[0].id);
  }

  const onFinish = async (data) => {
    const userId = await getUserId()
    const dataPost = {
      userId: userId,
      topicId: list[0].topicId,
      answer: data
    }
    const result = await postAnswer(dataPost)
    setSubmit(true);
    return result;
  };

  return (
    <>
      {submit ? (<Navigate to={"/answer"} />) : (
        <div className="question">
        <Form
          name="question"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          {list.map((item) => (
            <div key={item.id}>
              <div key={item.id} className="question__title">
                {`${item.id}. ${item.question}`}
              </div>
              <Item name={item.id}>
                <div className="question__option">
                  <Radio.Group>
                    <Space direction="vertical">
                      {item.answers.map((i, index) => (
                        <Radio key={index} value={index}>
                          {i}
                        </Radio>
                      ))}
                    </Space>
                  </Radio.Group>
                </div>
              </Item>
            </div>
          ))}
          <Item>
            <Button className="button--login" type="primary" htmlType="submit">
              Nộp bài
            </Button>
          </Item>
        </Form>
      </div>
      )}
      
    </>
  );
}

export default SingleQuestion;
