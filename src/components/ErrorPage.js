import React from 'react'
import image from "./Images/404.png"
import { useHistory } from 'react-router-dom';
const ErrorPage = () => {
    const history = useHistory();
    return (
        <div className='body'>
            <div className="wrapper">
                <div>
                    <img className='imgg' src={image} alt="404" />
                </div>
                <button type="button" className="main-btn" onClick={() => history.push("/")}>GO BACK HOME</button>
            </div>
        </div>
    )
}

export default ErrorPage;
