import { createContext, useState } from "react";
export const UserCtx = createContext();
// necesito ahora proveer del contexto al resto de la aplicación
export const UserCtxProvider = ({children}) => {
    const [user, setUser] = useState(null);
    return <UserCtx.Provider value={{user, setUser}}>
        {children}
    </UserCtx.Provider>
}



