import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import PosterContainer from './../components/posterContainer';
import { mockedCarPost, mockedCarPost2 } from './../mocks/index';
mockedCarPost2
const RoutesMain = () =>{
    return(
        <Routes>
            <Route path='/' element={<Home />}/>
        </Routes>
    )
}

export default RoutesMain