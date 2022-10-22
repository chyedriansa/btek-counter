import React from 'react'

const Counter = () => {
    const [counter, setCounter] = React.useState(1)
    const dec = () => {
        if(counter > 1) {
            setCounter(counter-1)
        }else{
            window.alert("Maaf, tidak bisa berkurang lagi")
        }
    }
    const inc = () => {
        if(counter < 9){
            setCounter(counter+1)
        }else{
            window.alert("Maaf, tidak bisa bertambah lagi")
        }
    }
    return (
        <div className='wrapper'>
            <div className='counter'>
                <div>
                    <button onClick={dec} className='btn'>-</button>
                </div>
                <div className='number'>{counter}</div>
                <div>
                    <button onClick={inc} className='btn'>+</button>
                </div>
            </div>
        </div>
    )
}

export default Counter