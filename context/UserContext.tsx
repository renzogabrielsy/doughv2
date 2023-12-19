"use client"

import React, {createContext, useState, useEffect, useContext} from "react"
import {initializeApp} from "firebase/app"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const UserContext = createContext({
    user: null,
    signIn: () => {},
    signOut: () => {}
})