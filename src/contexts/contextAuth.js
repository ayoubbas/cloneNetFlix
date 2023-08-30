import {  createContext,useContext,useEffect,useState } from "react";

import { auth,db } from "../firebase";
import {
    createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged
} from "firebase/auth"
import { setDoc ,doc } from "firebase/firestore";
const AuthContext = createContext()

export function AuthContextProvider({children}){
    const [user,setUSer] = useState({})

    const  signUp =(email,password)=>{
     createUserWithEmailAndPassword(auth,email,password)
     setDoc(doc(db,"users" ,email ),{
        savedShows : []
     })

    }
    const  signIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)

    }
    const  logOut =()=>{
        return signOut(auth)

    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUSer)=>{
            setUSer(currentUSer)
        })
    
        return ()=>{
            unsubscribe()
        }
    })
    return(
        <AuthContext.Provider value={{signIn ,signUp , logOut ,user}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext)
}