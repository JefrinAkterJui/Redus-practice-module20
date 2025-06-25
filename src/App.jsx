import { useReducer, useState } from "react"

function App() {
  // ---------------use useState--------
  // const [userInfo , setUserInfo]= useState({
  //   name:"",
  //   email:"",
  //   phone:""
  // });

  // const updateUserInfo=(e)=>{
  //   setUserInfo({...userInfo, [e.target.name]:e.target.value})
  // }
  // --------------------use useReducer------
  const initialState ={
    name:"",
    email:"",
    phone:""
  }
  const reducer=(state , action)=>{
    switch(action.type){
      case "FIELD_UPDATE":
        return{...state,
          [action.payload.field]: action.payload.value
        };

      case "RESTART":
        return initialState;

      default: state

    }
  }

  const [ userInfo , dispatch] = useReducer(reducer , initialState);

const updateUserInfo = (e) => {
  dispatch({
    type: "FIELD_UPDATE",
    payload: {
      field: e.target.name, 
      value: e.target.value
    }
  });
};
  const handelSubmit=(e)=>{
    e.preventDefault()
    console.log(userInfo)
  }

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={userInfo.name} onChange={updateUserInfo}/>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={userInfo.email} onChange={updateUserInfo}/>
        </div>

        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" value={userInfo.phone} onChange={updateUserInfo}/>
        </div>

        <button onClick={()=>dispatch({type:"RESTART" })}>Restart</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
