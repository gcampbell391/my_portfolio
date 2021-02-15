import React from "react"
import { css } from "@emotion/core";
import RingLoader from "react-spinners/RingLoader";


const override = css`
    display: block;
    margin: 0 auto;
`;

const Loader = () => {

    return (
        <div>
            <RingLoader color={"#06d6a0"} loading={true} css={override} size={130} />
        </div>
    )
}

export default Loader 