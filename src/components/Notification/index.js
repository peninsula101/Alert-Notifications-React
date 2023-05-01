// Write your code here
import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props

  return (
    <div className="notifications">
      <div className="notifications-content">{children}</div>
      <GrFormClose className="close-icon" />
    </div>
  )
}

export default Notification
