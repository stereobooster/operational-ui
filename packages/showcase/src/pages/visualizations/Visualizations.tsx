import * as React from "react"
import { Route, withRouter } from "react-router-dom"
import { Div } from "glamorous"

import Canvas from "../../components/Canvas/Canvas"
import Sidebar from "../../components/Sidebar/Sidebar"

import ProcessFlow from "./ProcessFlow/ProcessFlow"
import * as processFlowData from "./ProcessFlow/data/index"

const SidebarWithRouter = withRouter(Sidebar),
  InfoTooltip = () => <Div>Choose a Visualization to Get Started</Div>

const links = [
  {
    label: "Process Flow",
    links: Object.keys(processFlowData).map(key => ({ url: `/visualizations/process-flow/${key}`, label: key }))
  },
  {
    label: "Bar chart",
    links: []
  }
]

export default () => (
  <Div
    css={{
      display: "flex",
      alignItems: "flex-start",
      padding: 16,
      width: "100%",
      height: "100vh"
    }}
  >
    <SidebarWithRouter links={links} css={{ height: "100%" }} />
    <Canvas>
      <Route exact path="/visualizations" component={InfoTooltip} />
      <Route path="/visualizations/process-flow/:case" component={ProcessFlow} />
    </Canvas>
  </Div>
)