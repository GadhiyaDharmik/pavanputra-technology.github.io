import React from "react"
import ReactEcharts from "echarts-for-react"

const Candlestick = (props) => {
  const data = {
      tooltip: {
        trigger: "axis",
      },
      toolbox: {
        show: false,
        feature: {
          saveAsImage: {},
        },
      },
      grid: {
        zlevel: 0,
        x: 50,
        x2: 50,
        y: 30,
        y2: 30,
        borderWidth: 0,
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "rgba(0,0,0,0)",
      },
      xAxis: {
        data: ["2017-10-24", "2017-10-25", "2017-10-26", "2017-10-27"],
        axisLine: {
          lineStyle: {
            color: "#9F9EB2",
          },
        },
      },
      yAxis: {
        axisLine: {
          lineStyle: {
            color: "#9F9EB2",
          },
        },
      },
      series: [
        {
          type: "k",
          data: [
            [20, 30, 10, 35],
            [40, 35, 30, 55],
            [33, 38, 33, 40],
            [40, 40, 32, 42],
          ],

          itemStyle: {
            normal: {
              color: "#3c4ccf",
              color0: "#02a499",
              borderColor: "#3c4ccf",
              borderColor0: "#02a499",
            },
          },
        },
      ],
    }

    return (
      <React.Fragment>
        <ReactEcharts style={{ height: "350px" }} option={data} />
      </React.Fragment>
    )
  }

export default Candlestick
