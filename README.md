# Touchable

## Install

    npm install react-touchable

## Use

    var Touchable = require('react-touchable')

    var SampleComponent = React.createClass({
      render: function () {
        return (
          <Touchable onTap={this.handleClick}>
            <div>
              This element can be tapped or clicked
            </div>
          </Touchable>
        )
      }
    })

# Props

Touchable takes a single prop `onTap` and it is required.
onTap fires once a person taps on your element, it is called back with the event.

    onTap: React.PropTypes.func.isRequired

Touchable works both on mobile web as well as desktop web.

# License

MIT
