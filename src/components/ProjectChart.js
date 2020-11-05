import React from 'react'
import { Chart } from "react-google-charts";
import 'chart.js'



//Custom Hook to return current height and width of 
// function getWindowDimensions() {
//     const { innerWidth: width, innerHeight: height } = window;
//     return {
//         width,
//         height
//     };
// }

// function useWindowDimensions() {
//     const [windowDimensions, setWindowDimensions] = useState(
//         getWindowDimensions()
//     );

//     useEffect(() => {
//         function handleResize() {
//             setWindowDimensions(getWindowDimensions());
//         }

//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     return windowDimensions;
// }

const ProjectChart = () => {
    // const { width } = useWindowDimensions();


    return (
        <div className='project-chart-container'>
            <Chart
                height={'300px'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['x', 'commits'],
                    ["Jan 2020", 19],
                    ["Feb 2020", 128],
                    ["Mar 2020", 166],
                    ["Apr 2020", 94],
                    ["May 2020", 64],
                    ["Jun 2020", 79],
                    ["Jul 2020", 72],
                    ["Aug 2020", 68],
                    ["Sep 2020", 92],
                    ["Oct 2020", 62],
                    ['Nov 2020', 6]
                ]}
                options={{
                    animation: {
                        duration: 1000,
                        easing: 'out',
                        startup: true,
                    },
                    series: {
                        0: { color: '#06d6a0' },
                    },
                    hAxis: {
                        title: 'Date',
                    },
                    vAxis: {
                        title: 'Git Commits',
                    },
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    )
}

export default ProjectChart