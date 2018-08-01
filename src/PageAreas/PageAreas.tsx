import * as React from "react"
import { DefaultProps } from "../types"
import styled from "../utils/styled"

export interface Props extends DefaultProps {
  /** Areas template for `PageArea` disposition */
  areas?: "main" | "main side" | "side main"
  /** Fill the entire width */
  fill?: boolean
}

const Container = styled("div")<{ areas?: Props["areas"]; fill_?: boolean }>(props => {
  const gridTemplateColumns = {
    main: "auto",
    "main side": "auto 280px",
    "side main": "280px auto",
  }[props.areas || "main"]

  return {
    gridTemplateColumns,
    display: "grid",
    alignItems: "stretch",
    gridTemplateAreas: `"${props.areas}"`,
    gridGap: props.theme.space.element,
    maxWidth: props.fill_ ? "none" : 1150,
    minWidth: 800,
    width: "100%",
  }
})

const PageAreas: React.SFC<Props> = ({ fill, ...props }) => <Container {...props} fill_={fill} />

export default PageAreas
