import * as React from "react"
import { DefaultProps } from "../types"
import styled from "../utils/styled"

export interface Props extends DefaultProps {
  /** As title, please note that is override by `title` if provided */
  children?: React.ReactNode
  /** Main title */
  title?: React.ReactNode
  /** Action part (right side), this is typically where to put a button */
  action?: React.ReactNode
}

const Container = styled("div")(({ theme }) => ({
  fontFamily: theme.font.family.main,
  fontSize: theme.font.size.body,
  fontWeight: theme.font.weight.medium,
  label: "cardheader",
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.color.background.lighter,
  color: theme.color.text.lighter,
  // This ensures that the card header text and card controls are placed in opposite corners.
  justifyContent: "space-between",
  height: theme.space.element * 2,
  margin: -theme.space.element,
  marginBottom: theme.space.element,
  padding: `0 ${theme.space.element}px`,
  lineHeight: 1,
  "& > :not(:first-child)": {
    fontSize: theme.font.size.fineprint,
    color: theme.color.text.lightest,
  },

  /**
   * Use case: External Links typically have <Icon/>s next to them.
   */
  "& a": {
    display: "inline-flex",
    alignItems: "center",
    textDecoration: "none",
  },
  "& svg": {
    marginLeft: theme.space.base,
    width: 12,
    height: 12,
  },
}))

const ActionsContainer = styled("div")`
  display: flex;
  align-items: center;
`

const CardHeader: React.SFC<Props> = ({ title, children, action, ...props }) => (
  <Container {...props}>
    <div>{title || children}</div>
    <ActionsContainer>{action}</ActionsContainer>
  </Container>
)

export default CardHeader
