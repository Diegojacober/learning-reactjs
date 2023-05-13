import { useState, createContext } from "react";

export const UserContext = createContext({})


//quem tem os dados para repassar para a aplicação
function UserProvider({children}) {
    const [alunos, setAlunos] = useState('Roberto')
    const [qtdAlunos, setQtdAlunos] = useState(85)
    return(
        <UserContext.Provider value={{alunos, setAlunos, qtdAlunos}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider