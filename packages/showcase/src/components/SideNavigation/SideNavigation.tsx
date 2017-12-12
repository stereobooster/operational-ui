import * as React from "react"
import glamorous, { Div, Img, withTheme } from "glamorous"
import { Link } from "react-router-dom"
import { Box, BarChart2, Grid } from "react-feather"

import { Sidenav, SidenavHeader, Icon } from "@operational/components"
import { Theme } from "@operational/theme"
import Logo from "../Logo/Logo"

export interface IProps {
  location?: {
    pathname: string
  }
}

interface ILink {
  url?: string
  label: string
  icon: ReactFeatherIconName
}

const style: {} = {
  "& a": {
    textDecoration: "none",
    width: "100%"
  }
}

const links: ILink[] = [
  { url: "/components", label: "Components", icon: "Box" },
  { url: "/blocks", label: "Blocks", icon: "Grid" },
  { url: "/visualizations", label: "Visualizations", icon: "BarChart2" },
  { url: "/documentation", label: "Documentation", icon: "Edit" }
]

const AppSideNavigation = ({ location }: IProps) => {
  return (
<<<<<<< HEAD
    <Sidenav css={style} fix expandOnHover>
      <Link to="/">
        <SidenavHeader
          css={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}
          label="Operational UI"
          icon="Circle"
        />
      </Link>
=======
    <SideNavigation css={style} fix expandOnHover>
      <SideNavigationHeader>
        <Link to="/">
          <Logo/>
          <span style={{ position: "relative", left: -7 }}>Operational</span>
        </Link>
      </SideNavigationHeader>
>>>>>>> Add favicons and logo

      {links.map(({ url, label, icon }: ILink, index: number) => {
        const routeMatch = location && location.pathname && url && location.pathname.slice(0, url.length) === url
        return (
          <Link to={url || "/"}>
            <SidenavHeader key={index} active={routeMatch} icon={icon} label={label} />
          </Link>
        )
      })}
    </Sidenav>
  )
}

export default AppSideNavigation
