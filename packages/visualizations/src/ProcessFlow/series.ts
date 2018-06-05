import DataHandler from "./data_handler"
import Renderer from "./renderer"
import { Data, EventBus, SeriesEl, State, StateWriter } from "./typings"

class Series {
  private data: Data
  private dataHandler: DataHandler
  private drawn: boolean
  private el: SeriesEl
  private events: EventBus
  private renderer: Renderer
  private state: State
  private stateWriter: StateWriter

  constructor(state: State, stateWriter: StateWriter, events: EventBus, el: SeriesEl) {
    this.state = state
    this.stateWriter = stateWriter
    this.events = events
    this.el = el
    this.dataHandler = new DataHandler(state, stateWriter)
    this.renderer = new Renderer(state, events, el)
    this.drawn = false
  }

  prepareData(): void {
    this.data = this.dataHandler.prepareData()
    this.stateWriter("data", this.data)
  }

  draw(): void {
    const seriesConfig: { [key: string]: any } = this.state.current.get("computed").series
    this.el.attr("width", seriesConfig.width).attr("height", seriesConfig.height)
    this.renderer.draw(this.data)
    this.drawn = true
  }
}

export default Series
