import Router from 'next/router';


const FourohFour = (statusCode) => {
const handleClick = () => {
        Router.push("/")
    }
    return (
        <div className="titleWrapper">
            <div className="textStyle">
          Error: 404 | You have found a missing page!
            </div>
            <div className="buttonWrapper">
            <button onClick={handleClick} className="nextButton">
                Go Back Home
            </button>
            </div>
        </div>
    )
}
export default FourohFour;