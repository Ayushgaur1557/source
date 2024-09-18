import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import './Sidebar.css';
import { Button } from '@mui/material';
import CreateNewTaskForm from '../Task/CreateTask';
import { useLocation, useNavigate } from 'react-router-dom';

const menu=[
    {name:"Home",value:"Home",role:["ROLE_ADMIN","ROLE_CUSTOMER"]},
    {name:"DONE",value:"DONE",role:["ROLE_ADMIN","ROLE_CUSTOMER"]},
    {name:"ASSIGNED",value:"ASSIGNED",role:["ROLE_ADMIN"]},
    {name:"NOT ASSIGNED",value:"PENDING",role:["ROLE_ADMIN"]},
    {name:"Create New Task",value:"",role:["ROLE_ADMIN"]},
    {name:"NOTIFICATION",value:"NOTIFICATION",role:["ROLE_CUSTOMER"]},
]


const role = "ROLE_ADMIN";

const Sidebar = () => {
    const location=useLocation();
    const navigate=useNavigate();
    const [activeMenu, setActiveMenu] = useState("Done")
    const  [openCreateTaskForm,setOpenCreateTaskForm]=useState(false);

    const handleCloseCreateTaskForm=()=>{
     setOpenCreateTaskForm(false)
    }
    
    const handleOpenCreateTaskModel=()=>{
        setOpenCreateTaskForm(true);
       
    };
    const handleMenuChange=(item)=>{
        const updatedParams=new URLSearchParams(location.search);

        if(item.name=="Create New Task"){
          handleOpenCreateTaskModel()
        }
        // /login?filter&sort
        else if(item.name=="Home"){
            updatedParams.delete("filter")
            const queryString=updatedParams.toString();
            const updatedPath=queryString?`${location.pathname}?${queryString}`:location.pathname;
            navigate(updatedPath);
        }
        else{
            updatedParams.set("filter",item.value);
            navigate(`${location.pathname}?${updatedParams.toString()}`)

        }
        setActiveMenu(item.name)
    }
    const handleLogout=()=>{
        console.log("handle logout")
     }
    return (
        <>
        <div className="card min-h-[85vh] flex flex-col justify-center fixed w-[19vw]">
            <div className='space-y-4 h-full'>
                <div className='flex justify-center'>
                    <Avatar
                        sx={{ width: "6rem", height: "6rem" }}
                        className='border-2 border-[#c24dd0]'
                        src='https://tse3.mm.bing.net/th?id=OIP.z3HA8bPMUwx38obnZcw1xQHaEK&pid=Api&P=0&h=180'
                    />
                </div>
                {
                   menu.filter((item) => item.role.includes(role))
                .map((item) => (
                 <p
                    key={item.name} // Add a unique key for each menu item
                      onClick={() => handleMenuChange(item)}
                       className={`py-2 px-4 rounded-full text-center cursor-pointer ${
                       activeMenu === item.name ? "activeMenuItem" : "menuItem"
                       }`}>
                       {item.name}
                        </p>
                      ))
                   }
                  <Button onClick={handleLogout} sx={{ padding: ".7rem", borderRadius: "2rem" }} fullWidth className="logoutButton">
                    Logout
                    </Button>
            </div>
        </div>
        <CreateNewTaskForm open={openCreateTaskForm} handleClose={handleCloseCreateTaskForm}/>
        </>
        
    )
}

export default Sidebar;
