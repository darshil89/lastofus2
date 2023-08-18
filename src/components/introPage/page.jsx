"use client";
import axios from "axios";
import { useState, useEffect } from "react";

const IntroPage = () => {
  useEffect(() => {
    axios
      .get("https://indnutrientsapi.tech/food?type=vegetarian")

      .then((response) => {
        const data = response.data.item;
        if (data) {
          const limitedData = data.slice(0, 10);
          console.log(limitedData);
        } else {
          console.error("API response data is undefined or empty.");
        }
      });
  }, []);
  return <>
  
  </>;
};

export default IntroPage;
