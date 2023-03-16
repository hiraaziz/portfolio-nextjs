"use client";
import React, { useState, useEffect } from "react";
import PortfolioCards from "@/components/portfolio/PortfolioCards";
import Link from "next/link";

const page = () => {
  return (
    <div className="mt-20 mb-10">
      <PortfolioCards option={"all"} />
    </div>
  );
};

export default page;
