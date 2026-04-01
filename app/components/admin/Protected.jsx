"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useAuth } from "../../context/AuthContext"

const Protected = ({ children }) => {
  const { isLoggedIn, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !isLoggedIn) {
      router.push("/admin/login")
    }
  }, [isLoggedIn, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        Loading...
      </div>
    )
  }

  if (!isLoggedIn) return null

  return children
}

export default Protected