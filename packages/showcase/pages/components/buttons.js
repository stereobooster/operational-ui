import * as React from "react"
import { Button, ButtonGroup, Card, CardHeader } from "@operational/components"

import { Layout, Props, Playground, StaticContent } from "../../components"

const simpleSnippet = `
<div>
  <Button color="info">Button One</Button>
  <Button color="#393939">Button Two</Button>
  <Button disabled>Button Three</Button>
</div>
`

const groupSnippet = `
<ButtonGroup>
  <Button>Group 1</Button>
  <Button active>Group 2</Button>
  <Button>Group 3</Button>
</ButtonGroup>
`

const condensedSnippet = `
<ButtonGroup>
  <Button condensed>1</Button>
  <Button condensed color="success">2</Button>
  <Button condensed>3</Button>
</ButtonGroup>
`

const propDescription = [
  {
    name: "color",
    description: "What color of button would you like? It can be a hex value or a named theme color.",
    defaultValue: "white",
    type: "string",
    optional: true
  },
  {
    name: "onClick",
    description: "What happens when the button is clicked?",
    defaultValue: "",
    type: "func",
    optional: true
  },
  {
    name: "active",
    description: "Active state.",
    defaultValue: "",
    type: "boolean",
    optional: true
  },
  {
    name: "condensed",
    description: "Condensed option",
    defaultValue: "",
    type: "boolean",
    optional: true
  },
  {
    name: "disabled",
    description: "Disabled option",
    defaultValue: "",
    type: "boolean",
    optional: false
  }
]

export default props => (
  <Layout pathname={props.url.pathname}>
    <Card>
      <p>
        Buttons are used heavily throughout an operational interface, and they often require a fair amount of
        customization. They exist independently or in groups, and can shrink to a condensed mode if space is short.
        These buttons can also take on any number of colors required.
      </p>

      <h2>Simple usage</h2>
      <p>
        Using buttons is as simple as including the component with a text node as a child. Colors may be specified as
        hex strings, or as a pre-defined color key from the theme.
      </p>
      <Playground snippet={simpleSnippet} components={{ Button, ButtonGroup }} />

      <h2>Button groups</h2>
      <p>
        If used within the button group component, the library takes care to remove intermediate spacings, border radii
        and makes sure borders don't double up.
      </p>
      <Playground snippet={groupSnippet} components={{ Button, ButtonGroup }} />

      <h2>Condensed mode</h2>
      <p>Buttons can be condensed, and further grouped to achieve, among other things, this paginator-style look:</p>
      <Playground snippet={condensedSnippet} components={{ Button, ButtonGroup }} />
    </Card>
    <Card />
    <Card>
      <CardHeader>Props</CardHeader>
      <Props props={propDescription} />
    </Card>
  </Layout>
)
