'use client';
import { LOCALSTORAGE_ITEMS_KEY, LOCALSTORAGE_PERSONAL_ITEMS_KEY, LOCALSTORAGE_LINK_CLICK_TRACKING_KEY, LOCALSTORAGE_VISIT_PRODUCTHUNT_KEY } from '@/lib/config';
import React, { createContext, useContext, useState, useEffect } from 'react';

const LocalStorageContext = createContext();

export const LocalStorageProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [personalItems, setPersonalItems] = useState([]);
    const [linkClickCount, setLinkClickCount] = useState(0);
    const [producthuntVisit, setProducthuntVisit] = useState(false);
    const [producthuntVisitDialog, setProducthuntVisitDialog] = useState(false);

    // Load initial data from localStorage on mount
    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem(LOCALSTORAGE_ITEMS_KEY)) || [];
        const storedPersonalItems = JSON.parse(localStorage.getItem(LOCALSTORAGE_PERSONAL_ITEMS_KEY)) || [];
        const storedClickCount = parseInt(localStorage.getItem(LOCALSTORAGE_LINK_CLICK_TRACKING_KEY)) || 0;
        const storedProducthuntVisit = JSON.parse(localStorage.getItem(LOCALSTORAGE_VISIT_PRODUCTHUNT_KEY)) || false;

        setItems(storedItems);
        setPersonalItems(storedPersonalItems);
        setLinkClickCount(storedClickCount);
        setProducthuntVisit(storedProducthuntVisit);
    }, []);

    // Update localStorage items array changes
    useEffect(() => {
        localStorage.setItem(LOCALSTORAGE_ITEMS_KEY, JSON.stringify(items));
    }, [items]);

    // Update localStorage personalItems array changes
    useEffect(() => {
        localStorage.setItem(LOCALSTORAGE_PERSONAL_ITEMS_KEY, JSON.stringify(personalItems));
    }, [personalItems]);

    //////////////////////////////////////
    // PRODUCT HUNT OPEN
    //////////////////////////////////////
    useEffect(() => {
        localStorage.setItem(LOCALSTORAGE_LINK_CLICK_TRACKING_KEY, linkClickCount);
        if (linkClickCount >= 20 && !producthuntVisit) {
            setProducthuntVisitDialog(true);
            setLinkClickCount(0)
        }
    }, [linkClickCount, producthuntVisit]);

    const handleProducthuntVisitTrue = () => {
        producthuntVisit(true);
        localStorage.setItem(LOCALSTORAGE_VISIT_PRODUCTHUNT_KEY, JSON.stringify(true));
    }

    const handleLinkClick = () => {
        if (!producthuntVisit) {
            setLinkClickCount((prev) => prev + 1);
        }
    };
    //////////////////////////////////////
    // PRODUCT HUNT CLOSE 
    //////////////////////////////////////

    // Add a resource ID to the items array
    const addItem = (id) => {
        if (!items.includes(id)) {
            setItems((prev) => [...prev, id]);
        }
    };

    // Remove a resource ID from the items array
    const removeItem = (id) => {
        setItems((prev) => prev.filter((itemId) => itemId !== id));
    };

    // Add a new personal item
    const addPersonalItem = (name, description, href, tag) => {
        const newItem = {
            id: Date.now(), // Use timestamp as a unique ID
            name,
            description,
            href,
            tag,
        };
        setPersonalItems((prev) => [...prev, newItem]);
    };

    // Edit an existing personal item by ID
    const editPersonalItem = (id, updatedName, updatedDescription, updatedHref, updatedTag) => {
        setPersonalItems((prev) =>
            prev.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        name: updatedName || item.name,
                        description: updatedDescription || item.description,
                        href: updatedHref || item.href,
                        tag: updatedTag || item.tag,
                    }
                    : item
            )
        );
    };

    // Remove a personal item by ID
    const removePersonalItem = (id) => {
        setPersonalItems((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <LocalStorageContext.Provider
            value={{
                items,
                addItem,
                removeItem,
                personalItems,
                addPersonalItem,
                editPersonalItem,
                removePersonalItem,
                linkClickCount,
                handleLinkClick,
                handleProducthuntVisitTrue,
                producthuntVisit,
                producthuntVisitDialog, setProducthuntVisitDialog
            }}
        >
            {children}
        </LocalStorageContext.Provider>
    );
};

export const useLocalStorage = () => {
    const context = useContext(LocalStorageContext);
    if (!context) {
        throw new Error('useLocalStorage must be used within a LocalStorageProvider');
    }
    return context;
};
