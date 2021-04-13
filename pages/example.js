import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState , useEffect } from 'react'

// const ArrowFunction = () => {
//   return(
//     <div>
//       <h1>I am arrow function</h1>
//     </div>
//   )
// }


function CompA(allProps) {
  useEffect(()=>{
    console.log('compA useEffect')
  },[])

  return (
    <>

      <h1>CompA</h1>
      <p>Hello CompA</p>
      <div>My Prop1 : {allProps.myProp}</div>
      <div>My Prop2 : {allProps.myProp2}</div>
      <div>My Prop3 : {allProps.myProp3.toString()}</div>
      <div>My Prop4 : {<allProps.myProp4/>}</div>

    </>
  )
}






// return(
//   React.createElement(React.Fragment,null,
//   React.createElement("h1",null,"CompA"),
//   React.createElement("p",null,"Hello CompA"),
//   React.createElement(CompB)
//   )
// )



// function CompB() {
//   return (
//     <>
//       <h1>CompB</h1>
//       <p>Hello CompB</p>
//     </>

//   )
// }

// JSX - Javascript XML
class CompC extends React.Component {

  constructor(){
    super();
    this.state = {
      value:10
    }
  }

  // state = {
  //   value: 10 
  // }

  changeState(incrementor){
    this.setState({
      value: incrementor
    })
  }

  render() {
    const {value} = this.state
    const {myProp,myProp2: MyNewComponent} = this.props

    return(
    <>
      <h1>Hello CompC</h1>
      Current Value: <h1> {value} </h1>
      <button onClick={() => this.changeState(value + 1)}>+</button>
      <button onClick={() => this.changeState(value - 1)}>-</button>
      <h2>{myProp}</h2>
      <MyNewComponent/>
    </>
    )}
}

function myComponent(){
  return <h1>
    My Component
  </h1>
}


function Home() {
  // [stateValue, mutateState]
  const [value, setValue] = useState(10);
  const [myOtherValue, setOtherValue] = useState(100);

  useEffect(()=>{
    //console.log('useeffect called')
  },[myOtherValue,value])
  // const value = valueState[0];
  // const setValue = valueState[1];


  // console.log(valueState)
  // console.log(valueState[0])

  //console.log("i am called initally and when state is changed")

  // const incrementValue = () => {
  //   setValue(value+1);
  //   //console.log(value)
  // }

  // const decrementValue = () => {
  //   setValue(value-1);
  // }

  // const changeValue = (incrementor) => {
  //   setValue(value + incrementor);
  // }
  return (

    <>
      Current Value: <h1> {value} </h1>
      <button onClick={() => setValue(value + 1)}>+</button>
      <button onClick={() => setValue(value - 1)}>-</button>
      <hr></hr>
      Other Value: <h1> {myOtherValue} </h1>
      <button onClick={() => setOtherValue(myOtherValue + 1)}>+</button>
      <button onClick={() => setOtherValue(myOtherValue - 1)}>-</button>

      {/* <CompA
      myProp={value}
      myProp2="My Custom Value"
      myProp3={true}
      myProp4={()=> <div>My NEW JSX!</div>}
      /> */}

      <CompC 
      myProp={value}
      myProp2={()=>
        <CompA
        myProp={value}
        myProp2="My Custom Value"
        myProp3={true}
        myProp4={()=> <div>My NEW JSX!</div>}
        />
      }
      />


    </>

  )
}

// const Home = () => { return() }


export default Home;
