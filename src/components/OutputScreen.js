import React from 'react'

function OutputScreen({valu}) {
  return (
    <div className='screen'>
        <input type="text" readOnly value={valu || 0}/>
    </div>
  )
}

export default OutputScreen