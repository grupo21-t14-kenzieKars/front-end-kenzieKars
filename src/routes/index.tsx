import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'

const RoutesMain = () =>{
    return(
        <Routes>
            <Route path='/' element={<Home />}/>
            {/* <Route path='/product' element={} /> */}
        </Routes>
    )
}

export default RoutesMain