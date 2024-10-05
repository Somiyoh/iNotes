import React from 'react'

export const Alert = (props) => {
  return (
    <div style={{ height: '50px' }}>
      <div className="alert alert-primary" role="alert">
        {props.message}
      </div>
    </div>
  )
}
