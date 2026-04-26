"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useAuth } from "../../context/AuthContext"

const Protected = ({ children }) => {
  const { isLoggedIn, authLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!authLoading && !isLoggedIn) {
      router.push("/admin/login")
    }
  }, [isLoggedIn, authLoading, router])

  if (authLoading) {
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