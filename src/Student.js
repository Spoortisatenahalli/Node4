import React from 'react'

function Student({count,text}) {
  console.log(`Rendering ${text}`)
  return (
   
    <div>
{text}-{count}
       
    </div>
  )
}

export default  React.memo(Student)
