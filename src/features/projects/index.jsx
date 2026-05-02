import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'

export default function ProjectsLayout() {
  return (
    <div className="flex pt-20 min-h-screen">
      <Sidebar />
      <Outlet />
    </div>
  )
}
