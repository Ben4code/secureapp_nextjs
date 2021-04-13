import React, {createContext, useReducer} from 'react'
import firebase from 'firebase'
import {NewsItem} from '../services/newsAPI'
import { allQuotes } from '../quotes'

export interface Quote {
  text: string
  author: string
}

interface IAction {
  type: string
  payload: any
}

interface IState {
  isAuthUser: boolean
  quotes: Quote[]
  user: firebase.User | null
  news: NewsItem[]
}

const initialState: IState = {
  isAuthUser: false,
  user: null,
  news: [],
  quotes: [...allQuotes]
}

export const AuthContext = createContext<IState | any>(initialState)

function reducer(state: IState, action: IAction): IState {
  switch (action.type){
    case 'FETCH_AUTH_USER':
      return { ...state, isAuthUser: action.payload}
      case 'FETCH_NEWS':
        return { ...state, news: [...action.payload]}
    default:
      return state
  }
}

function AuthContextProvider(props: any): JSX.Element{
  const [state, dispatch] = useReducer(reducer, initialState)  

  return (
    <AuthContext.Provider value = {{state, dispatch}}>
    <div>
      {props.children}
    </div>
  </AuthContext.Provider>
  )
}

export default AuthContextProvider