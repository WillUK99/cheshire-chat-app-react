import React, { useContext, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

const AuthContext = React.createContext()

export const useAuth = () => useContext(AuthContext)