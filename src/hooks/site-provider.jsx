"use client"
import { datas } from "@/lib/database";
import React, { createContext, useContext, useState } from "react";

const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
    const [free, setFree] = useState(false);

    const toggleFree = () => setFree((prev) => !prev);
    const allCards = datas
        .flatMap((data) => data.category) // Extract all categories
        .flatMap((category) => category.cards); // Extract all cards from each category



    const value = {
        free,
        setFree,
        toggleFree,
        allCards,
    };

    return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};

// Custom hook to use the site context
export const useSiteState = () => {
    const context = useContext(SiteContext);

    if (!context) {
        throw new Error("useSiteState must be used within a SiteProvider");
    }

    return context;
};
