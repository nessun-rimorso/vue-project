export default {
  bind (el, bindings, vnode) {
    const fontModifire = bindings.modifiers['font']
    if (fontModifire) {
      el.style.fontSize = '40px'
    }

    const delayModifire = bindings.modifiers['delay']
    let delay = 0
    if (delayModifire) {
      delay = 2000
    }
    setTimeout(() => {
      const arg = bindings.arg
      el.style[arg] = bindings.value
    }, delay)
  }
}
