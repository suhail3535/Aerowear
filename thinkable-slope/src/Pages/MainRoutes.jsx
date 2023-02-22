import React from 'react'
import {Routes,Route} from "react-router-dom"
import Clearance from './Clearance/Clearance'
import Men from './Men/Men'
import Women from './Women/Women'


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/women" element={<Women />} />
      <Route path="/men" element={<Men />} />
      <Route path="/clearance" element={<Clearance />} />
    </Routes>
  )
}

export default MainRoutes
