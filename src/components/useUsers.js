import React, { useState, useEffect } from 'react'
import { sortUsers } from 'utils'

export default function useUsers() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    console.log('fetching users in custom hook')
    const fetchUsers = async () => {
      try {
        const resp = await fetch(`/api/users`)
        const result = await resp.json()
        let userMap = []
        result.data.forEach((user) => userMap.push({ userId: user.id, name: user.name, email: user.email }))
        setUsers(sortUsers(userMap))
      } catch (e) {
        console.error(e)
      }
    }
    fetchUsers()
  }, [])

  return users
}
