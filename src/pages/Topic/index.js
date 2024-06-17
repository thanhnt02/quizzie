import { getTopic } from "../../services/topicServices";
import Quiz from "../Quiz";
import "./Topic.scss"
import {useEffect, useState} from 'react'

function Topic() {

  const [list, setList] = useState([]);
  const [option, setOption] = useState();

  useEffect(() => {
    const topic = async () => {
      const result = await getTopic();
      setList(result)
    }
    topic();
  }, [])

  const handleClick = (e) => {
    setOption(e);
  }

  return (
    <>
      
        {option ? (<Quiz option={option} />) : (
          <div className="topic">
          {list.map(item => (
            <div onClick={() => handleClick(item.id)} key={item.id} className="topic__item">
              {item.name}
            </div>
          ))}
          </div>
        )}
      
    </>
  )
}

export default Topic;