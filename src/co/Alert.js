import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height:'60px'}}>
  { props.alert && <div>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{props.alert.type}: </strong>{props.alert.msg}
        <button type="button" className="close mx-16" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div> 
    </div>}
    </div>
  )
}
