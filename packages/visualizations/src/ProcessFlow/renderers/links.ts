import AbstractRenderer from "./abstract_renderer"
import * as d3 from "d3-selection"
import "d3-transition"
import { TLink, TScale, IFocus, TLinkSelection } from "../typings"
import { easeCubicInOut } from "d3-ease"
import * as styles from "./styles"

const MINOPACITY: number = 0.5,
  MAXOPACITY: number = 1

class Links extends AbstractRenderer {
  updateDraw(): void {
    const links: TLinkSelection = this.el
      .select("g")
      .selectAll(`path.${styles.link}`)
      .data(this.data, (link: TLink): string => link.sourceId() + ";" + link.targetId())

    this.exit(links)
    this.enterAndUpdate(links)
  }

  enterAndUpdate(links: TLinkSelection): void {
    const scale: TScale = this.sizeScale([this.config.minLinkWidth, this.config.maxLinkWidth])
    const opacityScale: TScale = this.sizeScale([MINOPACITY, MAXOPACITY])
    links.enter()
      .append("path")
      .attr("class", styles.link)
      .attr("d", this.linkStartPath.bind(this))
      .attr("stroke-width", "0px")
      .on("mouseenter", this.onMouseOver(this))
      .merge(links)
      .transition()
      .duration(this.config.duration)
      .ease(easeCubicInOut)
      .attr("d", this.linkPath.bind(this))
      .attr("stroke", (d: TLink): string => d.stroke())
      .attr("stroke-width", (d: TLink): string => scale(d.size()) + "px")
      .attr("stroke-dasharray", (d: TLink): number => d.dash())
      .attr("opacity", (d: TLink): number => opacityScale(d.size()))
  }

  linkStartPath(link: TLink): string {
    const xStart: number = link.source().x,
      yStart: number = link.source().y
    return "M" + xStart + "," + yStart + "L" + xStart + "," + yStart
  }

  linkPath(link: TLink): string {
    const xStart: number = link.source().x,
      yStart: number = link.source().y,
      xEnd: number = link.target().x,
      yEnd: number = link.target().y,
      xMid: number = (xStart + xEnd) / 2,
      yMid = (yStart + yEnd) / 2
    return "M" + xStart + "," + yStart + "L" + xMid + "," + yMid + "L" + xEnd + "," + yEnd
  }

  highlight(element: any, value: boolean): void {
    element.attr("stroke", (d: TLink): string => value ? this.config.highlightColor : d.stroke())
  }

  focusPoint(element: any, d: TLink): IFocus {
    if (d == null) return
    const scale: TScale = this.sizeScale([this.config.minLinkWidth, this.config.maxLinkWidth])

    return {
      offset: scale(d.size()) / 2,
      type: "link",
      x: (d.source().x + d.target().x) / 2,
      y: (d.source().y + d.target().y) / 2,
      id: d.sourceId() + "->" + d.targetId(),
    }
  }
}

export default Links
