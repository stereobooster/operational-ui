import AbstractDrawingCanvas from "../utils/drawing_canvas"
import Events from "../utils/event_catalog"
import * as d3 from "d3-selection"
import { TD3Selection, IConfig, IState, TStateWriter, IEvents, IObject, IMousePosition } from "./typings"

class Canvas extends AbstractDrawingCanvas {
  constructor(state: IState, stateWriter: TStateWriter, events: IEvents, context: Element) {
    super(state, stateWriter, events, context)

    this.appendShadows()
    this.appendBackground()
    this.appendDrawingGroup()
    this.insertFocusElements()
    this.insertLegend("top", "left")

    this.elements.background.on("mouseover", (): void => {
      this.events.emit(Events.FOCUS.ELEMENT.MOUSEOUT)
    })

    this.stateWriter("elements", this.elements)
  }

  createEl(): TD3Selection {
    return d3.select(document.createElementNS(d3.namespaces["svg"], "svg"))
  }

  appendShadows(): void {
    const shadow: TD3Selection = this.elements.defs
      .append("filter")
      .attr("id", this.shadowDefinitionId())
      .attr("height", "130%")
    shadow
      .append("feGaussianBlur")
      .attr("in", "SourceAlpha")
      .attr("stdDeviation", "3")
    shadow
      .append("feOffset")
      .attr("dx", "2")
      .attr("dy", "2")
      .attr("result", "offsetblur")
    shadow
      .append("feComponentTransfer")
      .append("feFuncA")
      .attr("type", "linear")
      .attr("slope", "0.5")

    const shadowFeMerge: TD3Selection = shadow.append("feMerge")
    shadowFeMerge.append("feMergeNode")
    shadowFeMerge.append("feMergeNode").attr("in", "SourceGraphic")
    this.stateWriter("shadowDefinitionId", this.shadowDefinitionId())
  }

  totalLegendHeight(): number {
    const legend: TD3Selection = this.state.current.get("computed").canvas.legends.top.left
    return legend.node().offsetHeight
  }
}

export default Canvas