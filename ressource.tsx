

function Ressource({obj})  {

    if(!obj) return <></>;

    let output = [];

    Object.entries(obj).forEach(([key, value]) => {
        switch (typeof value) {           
            case 'object':
                if(Array.isArray(value)){
                    output.push(<div  key={key}> <b>{key}</b> </div>); 
                    output.push(value.map((v) =><Ressource obj={v}></Ressource>));                
                   
                }else{
                    output.push( <div  key={key}> <b>{key}</b> </div> ); 
                    output.push(<Ressource obj={value}></Ressource>);
                }
                break;  
            default:   
                output.push(<p key={key}>{key} : {value}</p>);  break;                            
        }        
    })

    return <div>{output}</div>;
}

export default Ressource;
