import * as d3 from "d3-selection"
import { TD3Selection, TDatum, IObject, IState, TStateWriter, IEvents } from "./typings"
import Events from "../utils/event_catalog"
import { isEmpty, isObject, last } from "lodash/fp"
import * as styles from "./styles"

const dims: IObject = {
  width: 70,
  height: 20,
  space: 3,
  tip: 7
}

class Breadcrumb {
  el: TD3Selection
  events: IEvents
  state: IState
  stateWriter: TStateWriter

  constructor(state: IState, stateWriter: TStateWriter, events: IEvents, el: TD3Selection) {
    this.state = state
    this.stateWriter = stateWriter
    this.events = events
    this.el = el
    this.events.on(Events.FOCUS.ELEMENT.CLICK, this.updateHoverPath.bind(this))
    this.events.on(Events.FOCUS.ELEMENT.MOUSEOVER, this.updateHoverPath.bind(this))
    this.events.on(Events.FOCUS.ELEMENT.MOUSEOUT, this.updateHoverPath.bind(this))
  }

  updateHoverPath(payload: IObject): void {
    const computed: IObject = this.state.current.get("computed").renderer
    const fixedNode: any = computed.zoomNode || computed.topNode
    const nodeArray: any[] = payload.d ? payload.d.ancestors().reverse() : fixedNode.ancestors().reverse()
    setTimeout(() => {
      this.update(nodeArray)
    }, 1e2)
  }

  label(d: any, i: number): string {
    return d === "hops" ? "..." : d.data.name
  }

  truncateNodeArray(nodeArray: TDatum[]): (TDatum | string)[] {
    if (nodeArray.length <= 5) {
      return nodeArray
    } else {
      const firstNodes: TDatum[] = nodeArray.slice(0, 2)
      const lastNodes: TDatum[] = nodeArray.slice(nodeArray.length - 2)
      return firstNodes.concat(["hops"]).concat(lastNodes)
    }
  }

  update(nodeArray: TDatum[]): void {
    const data: any[] = nodeArray.length > 1 ? this.truncateNodeArray(nodeArray) : []

    // Data join; key function combines name and depth (= position in sequence).
    const trail = this.el.selectAll(`div.${styles.breadcrumbItem}`).data(data, d => {
      return d === "hops" ? d : d.data.name + d.depth
    })

    // Remove exiting nodes.
    trail.exit().remove()

    // Add breadcrumb and label for entering nodes.
    const entering: TD3Selection = trail
      .enter()
      .append("div")
      .attr("class", (d: any): string => `${styles.breadcrumbItem} ${d === "hops" ? d : ""}`)
      .style("background-color", (d: any): string => {
        return d === "hops" ? "#fff" : d.data.color || "#eee"
      })

    entering
      .append("div")
      .attr("class", "label")
      .html(this.label)

    entering.append("div").attr("class", "background-arrow")

    entering
      .append("div")
      .attr("class", "arrow")
      .style("border-left-color", (d: any): string => {
        return d === "hops" ? "#fff" : d.data.color || "#eee"
      })

    entering.merge(trail).on("click", this.onClick.bind(this))
  }

  onClick(d: TDatum | string): void {
    if (d === "hops") {
      return
    }
    this.events.emit(Events.FOCUS.ELEMENT.CLICK, { d })
  }
}

export default Breadcrumb