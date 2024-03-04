import React from "react";
import Image from "@/components/ui/image";
import Link from "@/components/ui/link";
import { PAGES } from "@/constants/pages";

export default function HeaderCategoriesMenu({ data }: any) {
  return (
    <>
      <ul className="submenu dropdown-menu">
        {data.map((category: any) => {
          const hasSub = category.children.length > 0 ? true : false;
          const hasSubCategory = category.children.some(
            (subCategory: any) => subCategory.children.length > 0
          );

          return (
            <li key={`category--key-${category.id}`} className=" ">
              <Link
                className={`dropdown-item ${hasSub && "has-sub"} d-flex justify-content-between`}
                href={PAGES.CATEGORY + "/" + category.slug}
              >
                <div>
                  <Image
                    width={16}
                    height={20}
                    src={category.icon}
                    alt={`${category.name}`}
                  />
                  {category.name} {!hasSub && `(${category.products_count})`}
                </div>
              </Link>
              {hasSub &&
                <ul className="submenu dropdown-menu">
                  {category.children.map((subCategory: any) =>
                    <li key={`subcategory--key-${subCategory.id}`}>
                      <Link
                        className={`dropdown-item ${hasSubCategory && "has-sub"} d-flex justify-content-between`}
                        href={PAGES.CATEGORY + "/" + subCategory.slug}
                      >
                        {subCategory.name}{" "}
                        {!hasSubCategory && `(${category.products_count})`}
                      </Link>
                      {hasSubCategory &&
                        <ul className="submenu dropdown-menu">
                          {subCategory.children.map((subSubCategory: any) =>
                            <li key={`subSubcategory--key-${subSubCategory.id}`}>
                              <Link
                                className="dropdown-item d-flex justify-content-between"
                                href={PAGES.CATEGORY + "/" + subSubCategory.slug}
                              >
                                {subSubCategory.name} ({subSubCategory.products_count})
                              </Link>
                            </li>
                          )}
                        </ul>
                      }
                    </li>
                  )}
                </ul>
              }
            </li>
          );
        })}
      </ul>
    </>
  );
}
