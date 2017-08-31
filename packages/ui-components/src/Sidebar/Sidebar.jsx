// @flow
import React from "react"
import type { Node } from "react"
import glamorous from "glamorous"

import SidebarItem from "./Item/SidebarItem"
import SidebarLink from "./Link/SidebarLink"

const Sidebar = ({ className, children }: { className: string, children: Node }) =>
    <div className={className}>
      {children}
    </div>,
  style = ({ theme }: { theme: THEME }): {} => ({
    width: "100%",
    maxWidth: 280,
    maxHeight: "100%",
    borderRadius: 2,
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.1)",
    overflow: "auto",
    scrollBehavior: "smooth", // future-proof
    backgroundColor: theme.greys && theme.greys.white
  })

export default glamorous(Sidebar)(style)
export { Sidebar, SidebarItem, SidebarLink }