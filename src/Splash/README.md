The splash component can be used to render a simple animated splash screen for a project. It is used internally by this package and by https://github.com/contiamo/operational-visualizations.

### Usage

```jsx
const Dismiss = styled.default("div")({
  position: "fixed",
  zIndex: "1000000",
  top: 20,
  right: 20,
})

class SplashDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  render() {
    return (
      <>
        {this.state.isOpen && (
          <>
            <Dismiss>
              <Button
                color="white"
                icon="No"
                onClick={() => {
                  this.setState(() => ({
                    isOpen: false,
                  }))
                }}
              >
                Dismiss
              </Button>
            </Dismiss>
            <Splash
              title="My Interesting Project"
              actions={
                <>
                  <Button>Action</Button>
                </>
              }
            >
              <p>I made a software project. It is interesting for the following reasons:</p>
            </Splash>
          </>
        )}
        <Button
          color="primary"
          onClick={() => {
            this.setState(() => ({
              isOpen: true,
            }))
          }}
        >
          Open splash
        </Button>
      </>
    )
  }
}

;<SplashDemo />
```
