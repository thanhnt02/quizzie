import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { getAnswerById } from "../../services/answerServices";
import { Button, Form, Radio, Space, Tag } from "antd";
import { getQuestion } from "../../services/questionServices";
import "./GradeScreen.scss";
import Quiz from "../../pages/Quiz";
import Topic from "../../pages/Topic";

function GradeScreen() {
  const paramId = useParams();
  const [listQuestion, setListQuestion] = useState([]);
  const [listAnswer, setListAnswer] = useState([]);
  const [retry, setRetry] = useState(false);

  const { Item } = Form;

  const finalMark = () => {
    var right = 0,
      wrong = 0;
    listQuestion.map((item) => {
      if (item.correctAnswer.toString() === listAnswer.answer[item.id + ""]) {
        right++;
      } else {
        wrong++;
      }
    });
    return {
      right: right,
      wrong: wrong,
      total: listQuestion.length,
      rate: right / listQuestion.length,
    };
  };

  useEffect(() => {
    const answer = async () => {
      const resultQuestion = await getQuestion(listAnswer.topicId);
      setListQuestion(resultQuestion);
      const resultAnswer = await getAnswerById(paramId.id);
      setListAnswer(resultAnswer);
    };
    answer();
    finalMark();
  }, [listAnswer.topicId]);

  const handleClick = () => {
    setRetry(!retry);
  };

  return (
    <>
      {retry ? (
        <Quiz option={listAnswer.topicId} />
      ) : (
        <>
          <div className="answer">
            <div>
              <div className="answer__final">
                Đúng: <b>{finalMark().right}</b> | Sai:{" "}
                <b>{finalMark().wrong}</b> | Tổng số câu:{" "}
                <b>{finalMark().total}</b> | Tỷ lệ đúng:{" "}
                <b>{finalMark().rate * 100}%</b>
              </div>
              <Button type="primary" onClick={handleClick}>Làm lại</Button>
            </div>
            <Form name="answer" autoComplete="off" layout="vertical">
              {listQuestion &&
                listQuestion.map((item, index) => (
                  <div key={index}>
                    <div className="answer__title">
                      <div style={{ marginRight: "15px" }}>
                        {`${item.id}. ${item.question}`}
                      </div>
                      <div className="answer__tag">
                        {item.correctAnswer.toString() ===
                        listAnswer.answer[item.id + ""] ? (
                          <>
                            <Tag color="green">Đúng</Tag>
                          </>
                        ) : (
                          <>
                            <Tag color="red">Sai</Tag>
                          </>
                        )}
                      </div>
                    </div>
                    <Item name={item.id}>
                      <div className="answer__option">
                        <Space direction="vertical">
                          {item.answers.map((i, ind) => (
                            <Radio
                              disabled
                              key={ind}
                              value={ind}
                              defaultChecked={
                                ind.toString() ===
                                listAnswer.answer[item.id + ""]
                              }
                              style={Object.assign(
                                {},
                                ind.toString() ===
                                  listAnswer.answer[item.id + ""]
                                  ? { color: "red", fontWeight: "bold" }
                                  : {},
                                item.correctAnswer.toString() === ind.toString()
                                  ? { color: "green", fontWeight: "bold" }
                                  : {}
                              )}
                            >
                              {i}
                            </Radio>
                          ))}
                        </Space>
                      </div>
                    </Item>
                  </div>
                ))}
            </Form>
          </div>
        </>
      )}
    </>
  );
}

export default GradeScreen;
