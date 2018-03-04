import './styles.css'
import _ from 'lodash'
import printMe from './print.js'

function component() {
    var element = document.createElement('div')
    var btn = document.createElement('button')

    element.innerHTML = _.join(['Hello', 'webpack'], ' ')

    btn.innerHTML = 'Click me and check the console!'
    btn.onclick = printMe
    element.appendChild(btn)

    return element
}

/** within HMR procedure we should apply new updates manually */
let element = component() // Store the element to re-render on print.js changes
document.body.appendChild(element)

if (module.hot) {
    module.hot.accept('./print.js', function() {
        document.body.removeChild(element)
        element = component() // Re-render the "component" to update the click handler
        document.body.appendChild(element)
    })
}
