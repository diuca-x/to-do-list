import React, { useEffect, useState } from "react";
import Listed_item from "./listed_item";

const Form = (props) =>{
    const { list, setList,maped_list, setMap,handleDelete } = props;
    const [item, setItem] = useState ("")
    
  
    
   

    
    const handle_change = () =>{        
        const maped_items = list.map( (x,index) => {            
            return(
                
                <Listed_item item = {x} handleDelete = {handleDelete} key={index} index = {index}/>    
                
            )
        });    
            
        setMap(maped_items)        
    }
    useEffect( handle_change, [list])
   
    
    
    return(
    
        <>        
                      
            <div className="col-auto">
                <label htmlFor="input" className="visually-hidden">todo</label>
                <input type="text" onChange={e => setItem(e.target.value)} value={item} onKeyDown={ (e) => {
                                if (e.key === 'Enter') {
                                    if(item != ""){                                        
                                        setList(prevList => {
                                            const newList = [...prevList, item];                                        
                                            return newList;
                                        });
                                                                                         
                                    }
                                        
                                }
                                
                            }}/>
            </div>
                
            
        </>
    );
}

export default Form;