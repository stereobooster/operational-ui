import * as React from "react"
import * as Icon from "react-feather"
import Button from "../Button/Button"
import { DefaultProps } from "../types"
import styled from "../utils/styled"

export interface Props extends DefaultProps {
  /** Function to be executed after changing page */
  onChange?: (page: Props["page"]) => void
  /** Index of the current selected page */
  page?: number
  /** Total number of items */
  itemCount: number
  /** Number of items per page */
  itemsPerPage: number
}

const PaginatorSpan = styled("div")(({ theme }) => ({
  fontFamily: theme.font.family.main,
  fontSize: theme.font.size.small,
  padding: `0 ${theme.space.content}px`,
  display: "inline-flex",
  color: theme.color.text.lighter,
  minWidth: 120,
  justifyContent: "center",
  "& span": {
    color: theme.color.text.dark,
    paddingRight: 3,
  },
}))

interface ControlProps {
  children: any
  onChange?: Props["onChange"]
  page: number
  isDisabled: boolean
  itemCount: number
  itemsPerPage: number
  type: "first" | "previous" | "next" | "last"
}

const NavigationButton = styled(Button)({
  width: 56,
  marginRight: 3,
  padding: 0,
  "& svg": {
    verticalAlign: "middle",
  },
  "& span": {
    padding: "0 3px",
  },
})

const PaginatorControl = ({ children, itemCount, itemsPerPage, page, onChange, type, isDisabled }: ControlProps) => {
  const pageChanges = {
    first: 1,
    previous: page! - 1,
    next: page! + 1,
    last: Math.ceil(itemCount / itemsPerPage),
  }

  const clickHandler = (): void => {
    if (onChange) {
      onChange(pageChanges[type])
    }
  }

  return (
    <NavigationButton disabled={isDisabled} condensed onClick={clickHandler}>
      {children}
    </NavigationButton>
  )
}

const getRange = ({ page, itemCount, itemsPerPage }: Props) => {
  const start = 1 + (page! - 1) * itemsPerPage
  const end = Math.min(itemCount, page! * itemsPerPage)
  return `${start}-${end}`
}

const Container = styled("div")(({ theme }) => ({
  label: "paginator",
  marginTop: theme.space.element,
  "& [role=button]": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 25,
  },
}))

const Paginator: React.SFC<Props> = ({ itemCount, itemsPerPage, page, onChange, ...props }) => {
  const controlProps = {
    itemCount,
    itemsPerPage,
    page: page!,
    onChange,
  }
  const isFirstDisabled = page === 1
  const isLastDisabled = itemsPerPage * page! >= itemCount
  return (
    <Container {...props}>
      <PaginatorControl type="first" {...controlProps} isDisabled={isFirstDisabled}>
        first
      </PaginatorControl>
      <PaginatorControl type="previous" {...controlProps} isDisabled={isFirstDisabled}>
        <Icon.ChevronsLeft size="11" />
        <span>prev</span>
      </PaginatorControl>
      <PaginatorSpan key={page}>
        <span>{getRange({ page, itemCount, itemsPerPage })}</span> of {itemCount}
      </PaginatorSpan>
      <PaginatorControl type="next" {...controlProps} isDisabled={isLastDisabled}>
        <span>next</span>
        <Icon.ChevronsRight size="11" />
      </PaginatorControl>
      <PaginatorControl type="last" {...controlProps} isDisabled={isLastDisabled}>
        last
      </PaginatorControl>
    </Container>
  )
}

Paginator.defaultProps = {
  page: 1,
}

export default Paginator
