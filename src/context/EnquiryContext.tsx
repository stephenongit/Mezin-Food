"use client";

import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import { Product, products } from "@/data/products";

type EnquiryContextType = {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  isInList: (productId: string) => boolean;
  clearList: () => void;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
  itemCount: number;
};

const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined);

const STORAGE_KEY = "mfp_enquiry_ids";

export const EnquiryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [itemIds, setItemIds] = useState<string[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  // Restore stored IDs from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setItemIds(parsed.filter((id): id is string => typeof id === "string"));
        }
      }
    } catch {
      // Ignore localStorage errors
    }
    setHasLoaded(true);
  }, []);

  // Save IDs to localStorage
  useEffect(() => {
    if (!hasLoaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(itemIds));
    } catch {
      // Ignore
    }
  }, [itemIds, hasLoaded]);

  // Rebuild items dynamically from products.ts so data never goes stale
  const items = useMemo(() => {
    return itemIds
      .map((id) => products.find((p) => p.id === id))
      .filter((p): p is Product => Boolean(p));
  }, [itemIds]);

  const addItem = (product: Product) => {
    setItemIds((prev) => {
      if (prev.includes(product.id)) {
        return prev;
      }
      return [...prev, product.id];
    });
  };

  const removeItem = (productId: string) => {
    setItemIds((prev) => prev.filter((id) => id !== productId));
  };

  const isInList = (productId: string) => {
    return itemIds.includes(productId);
  };

  const clearList = () => {
    setItemIds([]);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);

  return (
    <EnquiryContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        isInList,
        clearList,
        isDrawerOpen,
        openDrawer,
        closeDrawer,
        toggleDrawer,
        itemCount: items.length,
      }}
    >
      {children}
    </EnquiryContext.Provider>
  );
};

export const useEnquiry = (): EnquiryContextType => {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error("useEnquiry must be used within an EnquiryProvider");
  }
  return context;
};
