import { useState, useImperativeHandle, forwardRef } from 'react'

const Togglable = forwardRef((props, ref) => {
    const [visible, setVisible] = useState(false)

    const hideWhenVisible = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none'}

    const toggleVisibility = () => {
      setVisible(!visible)
    } 

    useImperativeHandle(ref, () => {
      return {
        toggleVisibility
      }
    })

    return (
      <div>
        <div style={hideWhenVisible}>
          <button className='buttonItem' style={{backgroundColor: '#257adb'}} onClick={toggleVisibility}>{props.buttonLabelShow}</button>
        </div>
        <div style={showWhenVisible}>
          <button className='buttonItem' style={{backgroundColor: '#db4025'}} onClick={toggleVisibility}>{props.buttonLabelHide ? props.buttonLabelHide : 'Cancel'}</button>
          {props.children}
        </div>
      </div>
    ) 
})

export default Togglable