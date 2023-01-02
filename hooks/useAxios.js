import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocalStorage } from "react-use";
import { useRouter } from "next/router";


const useAxios = () => {
  const router = useRouter()
  const [token, setToken, removeToken] = useLocalStorage('access_token', null)
  const [isLoggedIn, setIsLoggedIn, removeIsloggedIn] = useLocalStorage('is_logged_in', null)


  // Create axios instance
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
      "Content-Type": "application/json",
      "Authorization": token ? `token ${token}` : null,
    },
    withCredentials: true,
  })


  // Add a request interceptor
  axios.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );


  // Add a response interceptor
  instance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      const isUnauthorized = [401].includes(error?.response?.status);
      if (isUnauthorized) {
        removeToken();
        removeIsloggedIn();
        router.push('/')
      }

      return Promise.reject(error);
    },
  );

  return { axios: instance }
}

export default useAxios