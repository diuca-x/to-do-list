import React, { useEffect, useState } from "react";


const Form = (props) =>{
    const { list, setList,maped_list, setMap,handleDelete } = props;
    const [item, setItem] = useState ("")
    const [showDeleteButton, setShowDeleteButton] = useState(false);
  
    // no se actualiza cuando paso el mouse, siempre se hace en el ciclo siguiente, como lo puedo hacer para que se actualice ni bien entre el mouse?
    const handleMouseEnter = () => {
        setShowDeleteButton((prevState) => {
            
            console.log("deberia true");
            return true;
        });
        console.log(showDeleteButton)
        
    };
    const handleMouseLeave = () => {
        setShowDeleteButton((prevState) => {
            
            console.log("deberia false");
            return false;
        });
        
    };


    const handle_change = () =>{        
        const maped_items = list.map( (x) => {            
            return(
                <>
                
                    <li className="list-group-item d-flex border border-primary" 
                    onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key={x}>
                    {x}

                    {showDeleteButton && (<button type="button" className={` btn  ms-auto me-0 border border-primary`} onClick={()=>{handleDelete(x)}}>X</button>)}
                    </li> 
                    
                </>
                    
                
            )
        });    
            
        setMap(maped_items)        
    }
    useEffect( handle_change, [list])
    //sera porque estoy usando un useEffect para cuando cambie list? 
    
    
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