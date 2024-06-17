import "./Home.scss";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home--title">
          Chào mừng bạn đến với Quizzie <br/> Ứng dụng học lập trình qua các câu hỏi trắc nghiệm
        </div>
        <div className="home--content">
          <p>Quizzie - website trắc nghiệm online về lập trình Frontend là một nền tảng trực tuyến cho phép các lập trình viên Frontend thực hiện các bài kiểm tra, trắc nghiệm, đánh giá và đo đạc kiến thức của mình trong lĩnh vực lập trình Frontend.</p>
          <p>Đối với các lập trình viên Frontend, website trắc nghiệm online cung cấp các bài kiểm tra để giúp họ nâng cao kiến thức và kỹ năng của mình trong các công nghệ và công cụ lập trình như HTML, CSS, JavaScript, jQuery, Bootstrap, Angular, React, Vue,..</p>
          <p>Bạn có thể chọn chủ đề luyện tập trong mục <b>Topic</b> và xem hoặc làm lại các mục đã luyện tập trong mục <b>Answer</b> </p>
          <p>Chúc các bạn học tập vui vẻ!</p>

        </div>
        
      </div>
    </>
  )
}

export default Home;