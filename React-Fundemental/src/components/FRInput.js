import React from 'react'

// function FRInput() {
//   return (
    // <div>
    //     Forward Input
    //     <input type="text" />
    // </div>
//   )
// }

const FRInput = React.forwardRef( (props, ref) => {
    return(
        <div>
            Forward Input
            <input type="text" ref={ref} />
        </div>
       )
})
export default FRInput