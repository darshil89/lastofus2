"use client";
import axios from "axios";
import { useState, useEffect } from "react";

import React from "react";

const IntroPage = () => {
  useEffect(() => {
    axios.get("https://indnutrientsapi.tech/food?type=vegetarian").then((res) => {
        const limitedData = res.slice(0, 10);
    
        // Now you have an array of limited data
        console.log(limitedData);
    });
  }, []);
  return <div>Home Page</div>;
};

export default IntroPage;
