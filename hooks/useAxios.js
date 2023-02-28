import { useState, useEffect } from "react";
import axios from "axios";
import { useLocalStorage } from "react-use";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn, setToken } from "@/redux/userSlice";

const useAxios = ({ baseURL = null, noAuth = false } = {}) => {
  const router = useRouter();

  const token = useSelector((state) => state.user.token);
console.log("token", token)
  const dispatch = useDispatch();

  let headers = {
    "Content-Type": "application/json",
  }

  if (!noAuth) {
    headers = {
      ...headers,
      Authorization: token ? `token ${token}` : null,
    }
  }

  // Create axios instance
  const instance = axios.create({
    baseURL: baseURL ? baseURL : process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: headers,
    withCredentials: true,
  });

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
        dispatch(setToken(null));
        dispatch(setLoggedIn(false));
        router.push("/");
      }

      return Promise.reject(error);
    }
  );

  return { axios: instance };
};

export default useAxios;
