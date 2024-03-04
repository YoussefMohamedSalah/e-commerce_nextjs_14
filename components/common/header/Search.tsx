"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import cn from "classnames";
import { PAGES } from "@/constants/pages";

type Props = {
  className?: string;
  searchId?: string;
  variant?: "border" | "fill";
  searchText: string;
};

export default function Search({
  className = "",
  searchId = "search",
  variant = "border",
  searchText
}: Props) {
  const [keyword, setKeyword] = useState("");

  const router = useRouter();

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (keyword) {
      router.push(`${PAGES.PRODUCTS}?search=${keyword}&page=1&per_page=12&orderBy=&orderType=&price_from=&price_to=&selections=`);
    } else {
      router.push("/");
    }
  };

  return (
    <div className={cn(className)}>
      <form onSubmit={submitHandler}>
        <div className="search-input">
          <input
            id="search_input"
            className="form-control"
            placeholder={searchText}
            type="search"
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
          />
          <button
            className="btn btn-submit p-0"
            type="submit"
            onClick={submitHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M2.5 17.5L6.83058 13.1694M6.83058 13.1694C5.69956 12.0384 5 10.4759 5 8.75C5 5.29822 7.79822 2.5 11.25 2.5C14.7018 2.5 17.5 5.29822 17.5 8.75C17.5 12.2018 14.7018 15 11.25 15C9.52411 15 7.96161 14.3004 6.83058 13.1694Z"
                stroke="#8D8D8D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </form>
      {/* RESENT SEARCH */}
      {/* <div className="recent-search-keywords">
        <div className="keywords-section">
          <div className="fw-600 mb-3">Recent search</div>
          <ul className="list-unstyled">
            <li className="d-flex justify-content-between gap-3">
              <span>Mobile</span>
              <button className="delete">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18.0006 6.9227L6.92368 17.9996C6.67137 18.2519 6.25291 18.2519 6.0006 17.9996C5.74829 17.7473 5.74829 17.3289 6.0006 17.0765L17.0775 5.99962C17.3298 5.74732 17.7483 5.74732 18.0006 5.99962C18.2529 6.25193 18.2529 6.67039 18.0006 6.9227Z"
                    fill="#181823"
                  />
                  <path
                    d="M6.92368 6.00037L18.0006 17.0773C18.2529 17.3296 18.2529 17.7481 18.0006 18.0004C17.7483 18.2527 17.3298 18.2527 17.0775 18.0004L6.0006 6.92345C5.74829 6.67114 5.74829 6.25268 6.0006 6.00038C6.25291 5.74807 6.67137 5.74807 6.92368 6.00037Z"
                    fill="#181823"
                  />
                </svg>
              </button>
            </li>
            <li className="d-flex justify-content-between gap-3">
              <span>TV</span>
              <button className="delete">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18.0006 6.9227L6.92368 17.9996C6.67137 18.2519 6.25291 18.2519 6.0006 17.9996C5.74829 17.7473 5.74829 17.3289 6.0006 17.0765L17.0775 5.99962C17.3298 5.74732 17.7483 5.74732 18.0006 5.99962C18.2529 6.25193 18.2529 6.67039 18.0006 6.9227Z"
                    fill="#181823"
                  />
                  <path
                    d="M6.92368 6.00037L18.0006 17.0773C18.2529 17.3296 18.2529 17.7481 18.0006 18.0004C17.7483 18.2527 17.3298 18.2527 17.0775 18.0004L6.0006 6.92345C5.74829 6.67114 5.74829 6.25268 6.0006 6.00038C6.25291 5.74807 6.67137 5.74807 6.92368 6.00037Z"
                    fill="#181823"
                  />
                </svg>
              </button>
            </li>
            <li className="d-flex justify-content-between gap-3">
              <span>Laptop</span>
              <button className="delete">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18.0006 6.9227L6.92368 17.9996C6.67137 18.2519 6.25291 18.2519 6.0006 17.9996C5.74829 17.7473 5.74829 17.3289 6.0006 17.0765L17.0775 5.99962C17.3298 5.74732 17.7483 5.74732 18.0006 5.99962C18.2529 6.25193 18.2529 6.67039 18.0006 6.9227Z"
                    fill="#181823"
                  />
                  <path
                    d="M6.92368 6.00037L18.0006 17.0773C18.2529 17.3296 18.2529 17.7481 18.0006 18.0004C17.7483 18.2527 17.3298 18.2527 17.0775 18.0004L6.0006 6.92345C5.74829 6.67114 5.74829 6.25268 6.0006 6.00038C6.25291 5.74807 6.67137 5.74807 6.92368 6.00037Z"
                    fill="#181823"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <div className="keywords-section">
          <div className="fw-600 mb-3">Top search</div>
          <ul className="list-unstyled">
            <li className="d-flex justify-content-between gap-3">
              <span>Air fryer</span>
              <button className="delete">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18.0006 6.9227L6.92368 17.9996C6.67137 18.2519 6.25291 18.2519 6.0006 17.9996C5.74829 17.7473 5.74829 17.3289 6.0006 17.0765L17.0775 5.99962C17.3298 5.74732 17.7483 5.74732 18.0006 5.99962C18.2529 6.25193 18.2529 6.67039 18.0006 6.9227Z"
                    fill="#181823"
                  />
                  <path
                    d="M6.92368 6.00037L18.0006 17.0773C18.2529 17.3296 18.2529 17.7481 18.0006 18.0004C17.7483 18.2527 17.3298 18.2527 17.0775 18.0004L6.0006 6.92345C5.74829 6.67114 5.74829 6.25268 6.0006 6.00038C6.25291 5.74807 6.67137 5.74807 6.92368 6.00037Z"
                    fill="#181823"
                  />
                </svg>
              </button>
            </li>
            <li className="d-flex justify-content-between gap-3">
              <span>airpods</span>
              <button className="delete">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18.0006 6.9227L6.92368 17.9996C6.67137 18.2519 6.25291 18.2519 6.0006 17.9996C5.74829 17.7473 5.74829 17.3289 6.0006 17.0765L17.0775 5.99962C17.3298 5.74732 17.7483 5.74732 18.0006 5.99962C18.2529 6.25193 18.2529 6.67039 18.0006 6.9227Z"
                    fill="#181823"
                  />
                  <path
                    d="M6.92368 6.00037L18.0006 17.0773C18.2529 17.3296 18.2529 17.7481 18.0006 18.0004C17.7483 18.2527 17.3298 18.2527 17.0775 18.0004L6.0006 6.92345C5.74829 6.67114 5.74829 6.25268 6.0006 6.00038C6.25291 5.74807 6.67137 5.74807 6.92368 6.00037Z"
                    fill="#181823"
                  />
                </svg>
              </button>
            </li>
            <li className="d-flex justify-content-between gap-3">
              <span>iPhone</span>
              <button className="delete">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18.0006 6.9227L6.92368 17.9996C6.67137 18.2519 6.25291 18.2519 6.0006 17.9996C5.74829 17.7473 5.74829 17.3289 6.0006 17.0765L17.0775 5.99962C17.3298 5.74732 17.7483 5.74732 18.0006 5.99962C18.2529 6.25193 18.2529 6.67039 18.0006 6.9227Z"
                    fill="#181823"
                  />
                  <path
                    d="M6.92368 6.00037L18.0006 17.0773C18.2529 17.3296 18.2529 17.7481 18.0006 18.0004C17.7483 18.2527 17.3298 18.2527 17.0775 18.0004L6.0006 6.92345C5.74829 6.67114 5.74829 6.25268 6.0006 6.00038C6.25291 5.74807 6.67137 5.74807 6.92368 6.00037Z"
                    fill="#181823"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
}
