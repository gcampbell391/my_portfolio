import React, { useEffect, useState } from 'react'
import { LineChart } from 'react-chartkick'
import 'chart.js'



//Custom Hook to return current height and width of 
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}

const ProjectChart = () => {
    const { width } = useWindowDimensions();


    return (
        <div className='project-chart-container'>
            <LineChart
                curve={true}
                colors={["#06d6a0"]}
                xtitle="Time"
                ytitle="Git Commits"
                id="users-chart"
                width={(width * .80)}
                height={300}
                data={{
                    "Jan 2020": 19,
                    "Feb 2020": 128,
                    "Mar 2020": 166,
                    "Apr 2020": 94,
                    "May 2020": 64,
                    "Jun 2020": 79,
                    "Jul 2020": 72,
                    "Aug 2020": 68,
                    "Sep 2020": 14,
                }}
            />
        </div>
    )
}

export default ProjectChart