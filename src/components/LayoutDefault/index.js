import "./LayoutDefault.scss";
import { Layout, Row } from "antd";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { deleteCookie } from "../../helpers/cookie";

const { Content } = Layout;

const style = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const styleContent = {
  maxWidth: "1200px",
  margin: "0 auto",
  backgroundColor: "#fff"
};

function LayoutDefault() {

  const navigate = useNavigate();
  const handleLogout = () => {
    deleteCookie("token")
    navigate("/")
  }

  return (
    <>
      <Layout>
        <header className="layout-header">
          <Row style={style} className="layout-header__wrap">
            <div className="layout-header__logo">
              <img src={require("../../assets/quizzie.png")} alt="Chatty" />
            </div>
            <div className="layout-header__item">
              <ul>
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/topic">Topic</NavLink>
                </li>
                <li>
                  <NavLink to="/answer">Answer</NavLink>
                </li>
              </ul>
            </div>
            <div onClick={handleLogout} className="layout-header__logout">
              Logout
            </div>
          </Row>
        </header>
        <Content style={{backgroundColor: "#fff"}}>
          <div className="content" style={styleContent}>
            <Outlet/>
          </div>
        </Content>
      </Layout>
    </>
  );
}

export default LayoutDefault;
