import { useState, createContext } from "react";

const AuthContext = createContext();
const initialAuth = null;

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(initialAuth)
    const [userAuth, setUserAuth] = useState({})

    const handleAuth = (user) =>{
        if (auth) {
            setAuth(null);
            setUserAuth(null);
        } else{
            setAuth(true);
            setUserAuth(user);
        }
    }

    const data = {auth, handleAuth, userAuth};
    return <AuthContext.Provider value= {data}>{children}</AuthContext.Provider>
}

export  {AuthProvider};
export default AuthContext;