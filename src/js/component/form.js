import React, { useEffect, useState } from "react";


const Form = (props) =>{
    const { list, setList,maped_list, setMap } = props;
    const [item, setItem] = useState ("")
    
    const handle_change = () =>{
        console.log("item " + item)
        // no esta entrando a este ciclo en el primer enter, no se carga list 
        const maped_item = list.map( (x) => {            
            return(
                <li className="list-group-item">
                {x}
                </li>
            )
        });        
        setMap(maped_item)        
    }
    useEffect( handle_change, [list])

    
    return(
    
        <>        
                      
            <div className="col-auto">
                <label htmlFor="input" className="visually-hidden">todo</label>
                <input type="text" onChange={e => setItem(e.target.value)} value={item} onKeyDown={ (e) => {
                                if (e.key === 'Enter') {
                                    if(item != ""){
                                        //no funciona al primer enter
                                        setList(prevList => {
                                            const newList = [...prevList, item];                                        
                                            return newList;
                                        });
                                        handle_change()                                        
                                    }
                                        
                                }
                                
                            }}/>
            </div>
                
            
        </>
    );
}

export default Form;