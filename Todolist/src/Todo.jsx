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
        <div align="center">
            <h1>Add Todo Data</h1>
            <form action="" onSubmit={handlesubmite}>
                Todo : <input type="text" onChange={(e)=>setTask(e.target.value)} value={task}/> <button>Submite</button>
            </form>
            <br/><br/><br/>

            <h1>All Todo Data</h1>
            <table border={5}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Task</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alltask.map((t)=>{
                            const {uid,task,status}= t;
                            return(
                                <tr>
                                    <td>{uid}</td>
                                    <td>{task}</td>
                                    <td>{status}</td>
                                    <td>
                                        <button disabled={status == "confirm"} onClick={()=>confirmTodo(uid)}>Confirm</button>
                                        <button onClick={()=>deletTodo(uid)}>Delet</button>
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