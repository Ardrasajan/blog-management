import React from 'react'
import '../../Assets/Style/AdmindashboardContent.css'
import AdminDashboard from './AdminDashboard'
import AdminDashboardMain from './AdminDashboardMain'
import AdminCreateBlogs from './AdminCreateBlogs'
import AdminCategory from './AdminCategory'

import AdminViewblogs from './AdminViewblogs'
import AdminUsers from './AdminUsers'
import AdminViewpostLit from './AdminViewpostLit'

function AdminDashboardContent({ data}) {
  return (
    <div className='sidebar'>
      <AdminDashboard />

      <div className='Admin_dashboard_content'>
        {
          data == 'dashboard' ? <AdminDashboardMain /> : data == 'createblogs' ? <AdminCreateBlogs /> : data == 'category' ? <AdminCategory /> : data == 'viewblogs' ? <AdminViewblogs/> : data=='users'?<AdminUsers/>:''
}

      </div>
    </div>
  )
}

export default AdminDashboardContent