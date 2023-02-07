import React from 'react'
import { useRoutes } from 'react-router-dom'
import SignIn from '../Auth/SignIn'
import SignUp from '../Auth/SignUp'
import Assigned from '../Pages/Assigned'
import Important from '../Pages/Important'
import MyDay from '../Pages/MyDay'
import Planned from '../Pages/Planned'
import Tasks from '../Pages/Tasks'

const Allroutes = () => {

    let routes = useRoutes([
        {
            path: "/",
            element : <SignIn />
    
        },
        {
            path : "/signup",
            element : <SignUp />
        },
        {
            path : "/signin",
            element : <SignIn />
        },
       {
         path : "/task",
         children :[
            {
                index : true ,
                element : <MyDay />
            },
            {
                path : "/task/planned",
                element : <Planned />
            },
            {
                path : "/task/important",
                element : <Important />
            },
            {
                path : "/task/assigned",
                element : <Assigned />
            },
            {
                path : "/task/tasks",
                element : <Tasks />
            },
            {
                path : "/task/myday",
                element : <MyDay /> 

            }
         ]
        
        }
    ])
  return (
    <div>
      {routes}
    </div>
  )
}

export default Allroutes
