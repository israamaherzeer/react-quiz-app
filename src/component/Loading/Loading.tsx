import "./Loading.css";



const Loading = () => {

  return (
    <div className="loadingContainer">

      <div className="loadingImage">
        <img src='../../../public/loading.png' alt="Loading quiz" />
      </div>

      <h2>Preparing your quiz...</h2>

      <p>
        Loading questions
        <span className="dots">...</span>
      </p>

    </div>
  )
}


export default Loading;