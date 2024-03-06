"use client";
import React from "react";
import { Card } from "./Card";
import { products } from "../data";
import { Products } from "./type";
import Link from "next/link";
import { Button } from "./Button";
import { useEffect, useState } from "react";

type CardsProps = {
  products: Products[];
};

export const Cards = ({ products }: CardsProps) => {
  return (
    <div className="border-spacing-x-7 font-sans: md: font-serif border-style: border-solid">
      <div className="flex gap-7 h-screen justify-center w-full items-center">
        {products.map((product) => {
          return (
            <>
              <Card
                name={product.name}
                description={product.description}
                image={product.image}
                price={product.price}
                rate={product.rate}
                slug={product.slug}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};
