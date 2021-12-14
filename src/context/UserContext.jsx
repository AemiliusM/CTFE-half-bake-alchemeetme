import { useContext, createContext, useState, useEffect } from 'react'
import { fetchUser } from '../services/user'

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})
  //   const [likes, setLikes] = useState([])
  //   const [name, setName] = useState('')
  //   const [avatar, setAvatar] = useState('')
  //   const [motto, setMotto] = useState('')
  //   const [color, setColor] = useState('')
  //   const [header, setHeader] = useState('')
  useEffect(() => {
    fetchUser()
      .then((fetchedUser) => {
        setUser(fetchedUser)
      })
      .catch((error) => {
        throw new Error(`Error: ${error}`)
      })
  }, [])

  return (
    <UserContext.Provider
      value={{
        user,
        // setUser,
        // likes,
        // setLikes,
        // name,
        // setName,
        // avatar,
        // setAvatar,
        // motto,
        // setMotto,
        // color,
        // setColor,
        // header,
        // setHeader,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

const useUser = () => {
  const context = useContext(UserContext)

  if (context === undefined) {
    throw new Error('useUser hook must be called within a UserContext Provider')
  }
  return context
}

export { UserProvider, useUser }
