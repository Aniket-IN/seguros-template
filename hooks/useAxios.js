import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocalStorage } from "react-use";


const useAxios = () => {
  const [token, setToken, remove] = useLocalStorage('access_token', null)

  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
      "Content-Type": "application/json",
      "Authorization": token ? `token ${token}` : null,
    },
    withCredentials: true,
  })

  return { axios: instance }
}

export default useAxios