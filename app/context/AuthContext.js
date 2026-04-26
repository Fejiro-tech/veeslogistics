"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { supabase } from "../lib/supabaseClient"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null)
  const [user, setUser] = useState(null)
  const [authLoading, setAuthLoading] = useState(true)   // for init/Protected
  const [loginLoading, setLoginLoading] = useState(false) // for login button only

  useEffect(() => {
    let isMounted = true

    const initAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!isMounted) return
      setSession(session)
      setUser(session?.user ?? null)
      setAuthLoading(false)
    }

    initAuth()

    const { data: { subscription } } =
      supabase.auth.onAuthStateChange((_event, session) => {
        if (!isMounted) return
        setSession(session)
        setUser(session?.user ?? null)
        setAuthLoading(false)
      })

    return () => {
      isMounted = false
      subscription.unsubscribe()
    }
  }, [])

  const login = async (email, password) => {
    setLoginLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setLoginLoading(false)
    return { success: !error, error }
  }

  const logout = async () => {
    await supabase.auth.signOut()
  }

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        isLoggedIn: !!session,
        authLoading,
        loginLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)