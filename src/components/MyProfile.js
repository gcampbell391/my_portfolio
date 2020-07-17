import React from "react"
import Typist from 'react-typist';
import Blink from 'react-blink-text';


const MyProfile = () => {
    return (
        <div className="myProfile">
            {/* <img src={require("../images/mySelfie.JPG")} id="selfieImg" alt="Selfie" /> */}
            {/* <p id="nameProfileHeader">Gene Campbell III</p> */}
            <p id="bioProfileHeader">

                <Typist startDelay={2000} cursor={{
                    show: true,
                    blink: true,
                    element: '|',
                    hideWhenDone: true
                }}>
                    <span> HTML/CSS </span>
                    <Typist.Backspace count={9} delay={1000} />
                    <span> Java </span>
                    <Typist.Backspace count={5} delay={1000} />
                    <span> C# </span>
                    <Typist.Backspace count={3} delay={1000} />
                    <span> Ruby on Rails </span>
                    <Typist.Backspace count={14} delay={1000} />
                    <span> JavaScript </span>
                    <Typist.Backspace count={11} delay={1000} />
                    <span> React/Redux </span>
                    <Typist.Backspace count={12} delay={1000} />
                    <span> Node/Express js </span>
                    <Typist.Backspace count={16} delay={1000} />
                    <Blink color='white' text='Full Stack Software Engineer' fontSize='600'>
                        Testing the Blink
                </Blink>
                </Typist>

            </p>
            <div class="container demo">
                <div class="content">
                    <div id="large-header" class="large-header">
                        <canvas id="demo-canvas"></canvas>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile