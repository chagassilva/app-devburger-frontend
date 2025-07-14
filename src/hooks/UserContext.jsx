import { createContext, useContext, useState, useEffect } from "react";


const UserContext = createContext({});


export const UserProvider = ({ children }) => {

    const [userInfo, setUserInfo] = useState({});
    const [loading, setLoading] = useState(true);

    const putUserData = (userInfo) => {

        setUserInfo(userInfo);
        localStorage.setItem('devburger:userdata', JSON.stringify(userInfo));

    }


    const logout = () => {
        setUserInfo({});
        localStorage.removeItem('devburger:userdata');
    }


    useEffect(() => {

        const userInfoLocalStorage = localStorage.getItem('devburger:userdata');

        setTimeout(() => {
            if (userInfoLocalStorage) {
                setUserInfo(JSON.parse(userInfoLocalStorage));
            }

            setLoading(false);
        },1000)

    }, [])




    return (
        <UserContext.Provider value={{ userInfo, putUserData, logout, loading }}>
            {children}
        </UserContext.Provider>
    );

};


export const useUser = () => {

    const context = useContext(UserContext);

    if (!context) {
        throw new Error('useUser must be used within a UserProvider')
    }

    return context;

}