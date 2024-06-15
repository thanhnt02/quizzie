import "./Welcome.scss";
import { Layout, Row, Col } from "antd";
import Login from "../Login";
import Register from "../Register";
import { getCookie } from "../../helpers/cookie";
import { Navigate, useNavigate } from "react-router-dom";

const { Content } = Layout;

const style = {
  maxWidth: "1200px",
  margin: "0 auto",
};

function Welcome() {
  const isLogin = getCookie("token");
  const navigate = useNavigate();
  return (
    <>
      {isLogin ? (
        <Navigate to="/dashboard"/>
      ) : (
        <Layout>
          <header className="welcome-header">
            <Row style={style} className="welcome-header__wrap">
              <div className="welcome-header__logo">
                <img src={require("../../assets/quizzie.png")} alt="Chatty" />
              </div>
              <div className="welcome-header__item">
                <ul>
                  <li>
                    <Login />
                  </li>
                  <li>
                    <Register />
                  </li>
                  <li>
                    {/* eslint-disable-next-line */}
                    <a
                      href="https://www.facebook.com/g.t.o.p2409"
                      target="_blank"
                      className="button"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </Row>
          </header>
          <Content>
            <Row style={style} className="welcome-section">
              <Col span={12}>
                {/* <div className="welcome-section"> */}
                <div className="welcome-section__title">
                  Học lập trình với sự tự tin
                </div>
                <div className="welcome-section__desc">
                  Giúp thể hiện nhiều hơn kĩ năng của bạn, để học ngôn ngữ mà
                  bạn cảm thấy thích.
                </div>
                {/* <div className="welcome-section__start">
                <Row>
                  <Col span={24} style={{textAlign: "center"}}>
                    <Link to={"/register"} className="button--one">
                      Bắt đầu ngay
                    </Link>
                  </Col>
                  
                </Row>
              </div> */}
                {/* </div> */}
              </Col>
              <Col span={2}></Col>
              <Col span={10}>
                <div className="welcome-section__image">
                  <img
                    src={require("../../assets/find-your-kind-of-people.webp")}
                    alt=""
                  />
                </div>
              </Col>
            </Row>
          </Content>
        </Layout>
      )}
    </>
  );
}

export default Welcome;
