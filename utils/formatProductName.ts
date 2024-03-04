"use client"
export const formatProductName = (productName: string) => {
  return productName.length > 65
    ? productName.substring(0, 65) + "..."
    : productName;
};


export const formatText = (text: string, length: number) => {
  return text.length > length
    ? text.substring(0, length) + "..."
    : text;
};