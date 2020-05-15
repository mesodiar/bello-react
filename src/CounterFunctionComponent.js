import React from 'react'

export default function CounterFunctionalComponent(){
    //React Hook
    // Just like a hook to get some capability
    const [count, setCount] = React.useState(0)
    // First argument is variable
    // Second is function to change the variable

    // after we use `useState`, we will no longer use `this.state.count`
    // this.setState({count: this.state.count+1}  to setCount(count++)

    // React ใช้สิ่งที่เรียกว่า uni-direction data flow คือการอัพเดทข้อมูลต้องไปทิศทางเดียวเสมอ


    return (
        <div style={{backgroundColor: "#FFDFD3"}}>
            <h2>Counter Functional component</h2>
            <h2> Count : {count}</h2>
            <button onClick={() => setCount(count+1)}>Add</button>
         </div>
    )
}