import React, { useState } from 'react'

const Calculator = () => {

    const [board, setBoard]= useState("");
    const [pre, setPre]= useState("");
    const [post, setPost]= useState("");
    const [sym, setSym]=  useState("");
    const [res, setRes]= useState("");

    const store= (e)=>{
        let value= e.target.innerText;
        if(value==="+" || value==="-" || value==="*" || value==="/"|| value==="%"){
            setSym(value);
            setBoard((prev)=>prev+e.target.innerText);
        }else if(value==="=" &&  pre!=="" && post!==""){
            if(sym==="+"){
                setRes(Number(pre)+Number(post));
                setPre(Number(pre)+Number(post));
            }else if(sym==="-"){
                setRes(Number(pre)-Number(post));
                setPre(Number(pre)-Number(post));
            }else if(sym==="*"){
                setRes(Number(pre)*Number(post));
                setPre(Number(pre)*Number(post));
            }else if(sym==="/"){
                setRes(Number(pre)/Number(post));
                setPre(Number(pre)/Number(post));
            }else if(sym==="%"){
                setRes(Number(pre)%Number(post));
                setPre(Number(pre)%Number(post));
            }
        }else if(sym===""){
            setPre((prev)=>prev+e.target.innerText);
            setBoard((prev)=>prev+e.target.innerText);
        }else if(value!=="C" || value!=="+/-"){
                setPost((prev)=>prev+e.target.innerText);
                setBoard((prev)=>prev+e.target.innerText);
            }
        }

  return (
    <div>
      <div style={{backgroundColor: "black", width:"350px", height:"100%", margin: "auto", marginTop: "40px" }}>
        <div>
            <div style={{backgroundColor: "black", color: "white", width:"95%", height: "100px",margin:"auto", border: "none", outline:"none", textAlign: "right"}}>{board}</div>
        </div>
        <div style={{width: "100%", height: "60px", color:"white"}}>
            <h2>{res}</h2>
        </div>
        <div style={{padding: "10px"}}>
            <div style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "15px"}}>
                <div onClick={(e)=>store(e)} style={{display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", width: "50px", height: "50px", backgroundColor: "gray", color:"black", fontSize: "25px"}}>C</div>
                <div onClick={(e)=>store(e)} style={{display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", width: "50px", height: "50px", backgroundColor: "gray", color:"black", fontSize: "25px"}}>+/-</div>
                <div onClick={(e)=>store(e)} style={{display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", width: "50px", height: "50px", backgroundColor: "gray", color:"black", fontSize: "25px"}}>%</div>
                <div onClick={(e)=>store(e)} style={{display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", width: "50px", height: "50px", backgroundColor: "orange", color:"white", fontSize: "25px"}}>/</div>
                <div onClick={(e)=>store(e)} style={{display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", width: "50px", height: "50px", backgroundColor: "gray", color:"white", fontSize: "25px"}}>7</div>
                <div onClick={(e)=>store(e)} style={{display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", width: "50px", height: "50px", backgroundColor: "gray", color:"white", fontSize: "25px"}}>8</div>
                <div onClick={(e)=>store(e)} style={{display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", width: "50px", height: "50px", backgroundColor: "gray", color:"white", fontSize: "25px"}}>9</div>
                <div onClick={(e)=>store(e)} style={{display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", width: "50px", height: "50px", backgroundColor: "orange", color:"white", fontSize: "25px"}}>*</div>
                <div onClick={(e)=>store(e)} style={{display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", width: "50px", height: "50px", backgroundColor: "gray", color:"white", fontSize: "25px"}}>4</div>
                <div onClick={(e)=>store(e)} style={{display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", width: "50px", height: "50px", backgroundColor: "gray", color:"white", fontSize: "25px"}}>5</div>
                <div onClick={(e)=>store(e)} style={{display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", width: "50px", height: "50px", backgroundColor: "gray", color:"white", fontSize: "25px"}}>6</div>
                <div onClick={(e)=>store(e)} style={{display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", width: "50px", height: "50px", backgroundColor: "orange", color:"white", fontSize: "25px"}}>-</div>
                <div onClick={(e)=>store(e)} style={{display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", width: "50px", height: "50px", backgroundColor: "gray", color:"white", fontSize: "25px"}}>1</div>
                <div onClick={(e)=>store(e)} style={{display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", width: "50px", height: "50px", backgroundColor: "gray", color:"white", fontSize: "25px"}}>2</div>
                <div onClick={(e)=>store(e)} style={{display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", width: "50px", height: "50px", backgroundColor: "gray", color:"white", fontSize: "25px"}}>3</div>
                <div onClick={(e)=>store(e)} style={{display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", width: "50px", height: "50px", backgroundColor: "orange", color:"white", fontSize: "25px"}}>+</div>
            </div>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "94%", marginTop: "15px"}}>
                <div onClick={(e)=>store(e)} style={{display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "30px", width: "145px", height: "50px", backgroundColor: "gray", color:"white", fontSize: "25px"}}>0</div>
                <div onClick={(e)=>store(e)} style={{display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", width: "50px", height: "50px", backgroundColor: "gray", color:"white", fontSize: "25px"}}>.</div>
                <div onClick={(e)=>store(e)} style={{display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", width: "50px", height: "50px", backgroundColor: "orange", color:"white", fontSize: "25px"}}>=</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator
