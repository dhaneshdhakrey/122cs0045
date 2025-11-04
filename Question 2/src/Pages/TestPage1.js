import React,{useState,useEffect} from 'react';
import '../CSS/TestPage.css'
// function TestPage(){
//     let [prevCss,setCss]=useState("")
//     useEffect(()=>{
//         // alert("hey theri")
//     },[]);
//     function changecolor(){
//         setCss("dyanmic_css")
//     }
    
//     return(
//         <>
//         <div className={`Top_Cont ${prevCss}`}>
//             <button className='Btt' onClick={changecolor}>click me</button>
//         </div>
//         </>
//     )
// }
function TestPage(){
    let [data,setData]=useState({email:"",
        passwoed:""
    });
    function  EmailHamdler(e){
        setData.email=e.taget.value;
    }
    function  passwordHandler(e){
        setData.password=e.taget.value;
    }
    return(
        <>
        <form>
        <input type='email' value={data.email} placeholder='input your email' onChange={EmailHamdler}/>
        <input type='password' value={data.passwoed} placeholder='password' onChange={passwordHandler}/>

        </form>
        </>
    )
}
export default TestPage;
