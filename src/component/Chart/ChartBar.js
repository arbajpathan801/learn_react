import React from "react";
import './ChartBar.css'

const ChartBar =props => {
    // console.log(props);
let barFillheight= "0%"
 if (props.maxValue>0 ){
    barFillheight=Math.round((props.value/props.maxValue)*100)+"%"
 }
//  console.log(barFillheight)

return <div className="chart-bar">
    <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height:barFillheight}}> </div>
    </div>
    <div className="chart-bar__lable">{props.lable}</div>
</div>
}
export default ChartBar;