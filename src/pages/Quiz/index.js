import { useEffect, useState } from "react";
import { getQuestion } from "../../services/questionServices";
import { Input, Radio, Space } from "antd";
import SingleQuestion from "../../components/SingleQuestion";

function Quiz(props) {
  const { option } = props;
  const [list, setList] = useState([]);

  useEffect(() => {
    const question = async () => {
      const result = await getQuestion(option);
      setList(result);
    };
    question();
  }, []);

  return (
    <>
      {list.length > 0 && <SingleQuestion list={list} />}
    </>
  );
}

export default Quiz;
