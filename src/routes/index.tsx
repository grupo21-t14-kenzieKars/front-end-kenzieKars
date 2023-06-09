import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import PosterImageBox from '../components/posterImageBox'

const RoutesMain = () =>{
    return(
        <Routes>
            <Route path='/' element={<Home />}/>
        </Routes>
    )
}

export default RoutesMain