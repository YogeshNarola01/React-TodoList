import { useState } from "react"

const Todo=()=>{
    const [task,setTask]= useState("")
    const [alltask,setAllTask] = useState([])

    const handlesubmite=(event)=>{
        event.preventDefault()
        let obj = {
            uid : Date.now(),
            task,
            status : 'panding'
        }
        if(!task){
            alert("Enter any task")
            return false
        }
        let newrecord = [...alltask,obj]
        setAllTask(newrecord)
        setTask("")  
    }
    
    const confirmTodo=(id)=>{
        let updatestatus = alltask.map((com)=>{
            if(com.uid==id){
                com.status = "confirm"
            }
            return com
        })
        setAllTask(updatestatus)
    }

    const deletTodo=(id)=>{
        setAllTask(alltask.filter(item => item.uid != id))
    }

    return(
        <div align="center" className="main">
            <h1>Add Todo Data</h1><br/>
            <form action="" onSubmit={handlesubmite}>
                <h3>Todo : <input className="table1" type="text" onChange={(e)=>setTask(e.target.value)} value={task}/> <button className="tbtn" ><h4>Submite</h4></button></h3> 
            </form>
            <br/><br/><br/>
                        <hr/>
            <br/><br/>
            <h1>All Todo Data</h1><br/>
            <table border={4} className="table">
                <thead>
                    <tr>
                        <th><h3>Id</h3></th>
                        <th><h3>Task</h3></th>
                        <th><h3>Status</h3></th>
                        <th><h3>Action</h3></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alltask.map((t)=>{
                            const {uid,task,status}= t;
                            return(
                                <tr>
                                    <td><h3>{uid}</h3></td>
                                    <td><h3>{task}</h3></td>
                                    <td><h3>{status}</h3></td>
                                    <td>
                                        <button className="tbtn" disabled={status == "confirm"} onClick={()=>confirmTodo(uid)}><h4>Confirm</h4></button>
                                        <button className="tbtn" onClick={()=>deletTodo(uid)}><h4>Delet</h4></button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Todo