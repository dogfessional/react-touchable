var React = require('react')

var Touchable = React.createClass({
  propTypes: {
    onTap: React.PropTypes.func.isRequired
  },

  getInitialState: function () {
    return {
      target: null,
      active: false
    }
  },

  resetState: function () {
    this.setState({
      target: null,
      active: false
    })
  },

  touchStart: function (e) {
    if (e.touches.length === 1) {
      this.setState({
        target: e.target,
        active: true
      })
    }
  },

  touchEnd: function (e) {
    if (!this.state.active) {
      return this.resetState()
    }

    var changedTouches = e.changedTouches[0]
    if (changedTouches) {
      var elem = document.elementFromPoint(changedTouches.pageX, changedTouches.pageY)
      if (elem !== this.state.target) {
        return this.resetState()
      }
    }

    this.resetState()
    this.props.onTap(e)
  },

  render: function () {
    var classes = React.addons.classSet({
      active: this.state.active
    })
    var properties = {
      className: classes
    }
    if (typeof document !== 'undefined' && 'ontouchstart' in document.documentElement) {
      properties.onTouchStart = this.touchStart
      properties.onTouchEnd = this.touchEnd
    } else {
      properties.onClick = this.props.onTap
    }

    return React.createElement('span', properties, this.props.children)
  }
})

module.exports = Touchable
