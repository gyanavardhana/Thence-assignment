import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useRedirectTimer = (redirectPath, initialCountdown) => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(initialCountdown);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      navigate(redirectPath);
    }
  }, [countdown]);

  return countdown;
};



export default useRedirectTimer;
