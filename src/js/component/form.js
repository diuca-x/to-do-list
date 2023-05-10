import React, { useState } from "react";


const Form = (props) =>{
    const { list, setList } = props;
    const [item, setitem] = useState("")
    return(
        <>        
                      
            <div className="col-auto">
                <label htmlFor="input" className="visually-hidden">todo</label>
                <input type="text" onChange={e => setitem(e.target.value)} value={item} onKeyDown={ (e) => {
                                if (e.key === 'Enter') {
                                    setList(list => [...list,item])
                                    console.log(list);}
                                }}/>
            </div>
                
            
        </>
    );
}

export default Form;