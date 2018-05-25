import * as React from "react"
import { render } from "react-dom"
import { injectStylesheet, baseStylesheet } from "@operational/utils"
import { operational } from "@operational/theme"
import { OperationalUI } from "@operational/components"

injectStylesheet(baseStylesheet(operational))

const containerNode = document.getElementById("app")
const containerNode2 = document.getElementById("app2")

import Chart from "../../src/Chart/facade"
import { VisualizationWrapper } from "../../src/index"

const AreaRenderer: any = {
  accessors: {
    interpolate: (series: any, d: any) => "monotoneX"
  },
  type: "area"
}

const LineRenderer: any = {
  accessors: {
    interpolate: (series: any, d: any) => "monotoneX",
  },
  type: "line"
}

const BarsRenderer: any = {
  type: "bars"
}

const FixedBarsRenderer: any = {
  accessors: {
    barWidth: () => 20
  },
  type: "bars"
}

const SymbolRenderer: any = {
  accessors: {
    symbol: (series: any, d: any) => d.y >= 1000 ? "cross" : "diamond",
    size: (series: any, d: any) => series.key() === "series2" ? 150 : 60,
    fill: () => "#bbb"
  },
  type: "symbol"
}

const TextRenderer: any = {
  type: "text",
  config: {
    offset: 5,
  }
}

const StackedRenderer = {
  type: "stacked",
  renderAs: [BarsRenderer, TextRenderer]
}

const XFlagRenderer = {
  type: "flag",
  config: {
    axis: "x1",
    axisPadding: 30
  }
}

const YFlagRenderer = {
  type: "flag",
  accessors: {
    color: (series, d) => d.y > 250 ? "red" : "purple"
  },
  config: {
    axis: "y1"
  }
}

const RangeRenderer = {
  type: "range",
  renderAs: [AreaRenderer, LineRenderer, SymbolRenderer]
}

const createData: any = () => {
  return {
    series: [
      {
        data: [
          { x: new Date(2018, 2, 10), y: Math.floor(Math.random() * 500) },
          { x: new Date(2018, 2, 11), y: Math.floor(Math.random() * 500) },
          { x: new Date(2018, 2, 12), y: Math.floor(Math.random() * 500) },
          { x: new Date(2018, 2, 13), y: Math.floor(Math.random() * 500) },
          { x: new Date(2018, 2, 14), y: Math.floor(Math.random() * 500) },
          { x: new Date(2018, 2, 15), y: Math.floor(Math.random() * 500) }
          { x: new Date(2018, 2, 16), y: Math.floor(Math.random() * 500) }
          { x: new Date(2018, 2, 17), y: Math.floor(Math.random() * 500) }
        ],
        name: "Pageviews 2018",
        key: "series1",
        renderAs: [BarsRenderer, TextRenderer],
      },
      {
        data: [
          { x: new Date(2018, 2, 10), y: Math.floor(Math.random() * 300) },
          { x: new Date(2018, 2, 11), y: Math.floor(Math.random() * 300) },
          { x: new Date(2018, 2, 12), y: Math.floor(Math.random() * 300) },
          { x: new Date(2018, 2, 13), y: Math.floor(Math.random() * 300) },
          { x: new Date(2018, 2, 14), y: Math.floor(Math.random() * 300) },
          { x: new Date(2018, 2, 15), y: Math.floor(Math.random() * 500) }
          { x: new Date(2018, 2, 16), y: Math.floor(Math.random() * 500) }
          { x: new Date(2018, 2, 17), y: Math.floor(Math.random() * 500) }
        ],
        name: "Users 2018",
        key: "series2",
        renderAs: [BarsRenderer, TextRenderer],
      },
      {
        series: [
          {
            data: [
              { y: new Date(2018, 2, 10), x: Math.floor(Math.random() * 200 + 1000) },
              { y: new Date(2018, 2, 11), x: Math.floor(Math.random() * 200 + 1000) },
              { y: new Date(2018, 2, 13), x: Math.floor(Math.random() * 200 + 1000) },
              { y: new Date(2018, 2, 14), x: Math.floor(Math.random() * 200 + 1000) },
              { y: new Date(2018, 2, 15), x: Math.floor(Math.random() * 200 + 1000) },
              { y: new Date(2018, 2, 16), x: Math.floor(Math.random() * 200 + 1000) },
              { y: new Date(2018, 2, 17), x: Math.floor(Math.random() * 200 + 1000) }
            ],
            name: "Metric 1",
            key: "series3",
            xAttribute: "y",
            yAttribute: "x",
            yAxis: "y2"
          },
          {
            data: [
              { y: new Date(2018, 2, 10), x: Math.floor(Math.random() * 200 + 1000) },
              { y: new Date(2018, 2, 11), x: Math.floor(Math.random() * 200 + 1000) },
              { y: new Date(2018, 2, 12), x: Math.floor(Math.random() * 200 + 1000) },
              { y: new Date(2018, 2, 13), x: Math.floor(Math.random() * 200 + 1000) },
              { y: new Date(2018, 2, 14), x: Math.floor(Math.random() * 200 + 1000) },
              { y: new Date(2018, 2, 15), x: Math.floor(Math.random() * 200 + 1000) },
              { y: new Date(2018, 2, 16), x: Math.floor(Math.random() * 200 + 1000) },
              { y: new Date(2018, 2, 17), x: Math.floor(Math.random() * 200 + 1000) }
            ],
            name: "Metric 2",
            key: "series4",
            xAttribute: "y",
            yAttribute: "x",
            yAxis: "y2"
          }
        ],
        renderAs: [StackedRenderer]
      },
    ],
    axes: {
      x1: {
        type: "time",
        start: new Date(2018, 2, 10),
        end: new Date(2018, 2, 17),
        interval: "day",
      },
      y1: {
        type: "quant"
      },
      y2: {
        type: "quant"
      }
    }
  }
}

let data = createData()
const App = () => <OperationalUI><VisualizationWrapper facade={Chart} data={createData()} config={{uid: "TEST", width: 1000}}/></OperationalUI>
render(<App />, containerNode)

setTimeout(() => {
  data = createData()
  render(<App />, containerNode)
}, 3000);