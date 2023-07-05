import { Navigate, Outlet } from "react-router"
import { useLocation, useContext } from "react"
import { UserContext } from "../../contexts/userContext";

const ProtectedRoute = () => {
    const location = useLocation()

    const { user, loading } = useContext(UserContext)
    if(loading){
        return null
    }

    return user ? <Outlet /> : <Navigate to="/" state={{ from: location }}/>
}

export default ProtectedRoute