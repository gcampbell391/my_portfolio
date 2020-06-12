import React from "react"

const MyProfile = () => {
    return (
        <div className="myProfile">
            <img src={require("../images/mySelfie.png")} id="selfieImg" alt="Selfie" />
            <p id="nameProfileHeader">Gene Campbell III</p>
            <p id="bioProfileHeader">Full Stack Software Engineer</p>
        </div>
    )
}

export default MyProfile