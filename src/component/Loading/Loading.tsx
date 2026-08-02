import "./Loading.css";



const Loading = () => {

  return (
    <div className="loadingContainer">

      <div className="loadingImage">
        
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