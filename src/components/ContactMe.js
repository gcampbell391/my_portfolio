import React from "react"
import Spin from 'react-reveal/Spin';


const ContactMe = (props) => {
    return (
        <div className="contactMe">
            <div className="scrollHelper">
                <Spin>
                    <h1 id="contactMeTitle"> <a href="mailto:gcampbell391@gmail.com" id="contactLink">Contact Me Today!</a></h1>
                </Spin>
            </div>
        </div>
    )
}

export default ContactMe