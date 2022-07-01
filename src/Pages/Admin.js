import React from 'react'
import { Link } from 'react-router-dom'

import Student from './Student'

export default function Admin() {
  return (

    <div className='admin'>

      <div className="adminbtn">
        <button><Link to="/addadmin"> Add Admin</Link></button>
      </div>
      

      <div className='admintsp'>

        <div className='admindiv'>
          <Link to="/studentall">Student</Link>
        </div>
        <div className='admindiv'>
          <Link to="/teacherall">Teachers</Link>
        </div>
        <div className='admindiv'>
          <Link to="/parentall">Parents</Link>
        </div>
      
      </div>


      <div className='evecal'>

        <div className='admincaleve'>
          <Link to="/calender">Event Calender</Link>
        </div>
        <div className='admincaleve'>
          <Link to="/notice">Notice Board</Link>
        </div>

      </div>

    </div>

  )
}
