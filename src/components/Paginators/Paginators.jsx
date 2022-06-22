import { useState } from "react";
import classes from "./Paginator.module.css";

/**
 * * Paginator API:
 * ! v1.0
 * ? {sl}. @{props name} {{data type}}: [{is optional}] {descriptions} {default value}
 * # 1. items [X] {number}: Total items count to scaffold pages {undefined}
 * # 2. pageItems [Y] {number}: Number of items will show in a page {10}
 * # 3. startPage [Y] {number}: active page number when initialze {1}
 * # 4. onPageChange [Y] {function}: callback with one parameter current page number {null}
 *
 * todo: add documentation for css classes
 */

const Paginator = ({
  items,
  pageItems = 10,
  startPage = 1,
  onPageChange = (pageNumber) => {
    return pageNumber + 1;
  },
  className,
}) => {
  const [activeIndex, setActiveIndex] = useState(startPage ? startPage - 1 : 0);
  const pageCount = Math.ceil(items / pageItems);

  const pageChangeHandler = (i) => {
    setActiveIndex(i);
    onPageChange(i + 1);
  };

  const nextHandler = () => {
    if (pageCount - 1 === activeIndex) return;
    onPageChange(activeIndex + 2);
    setActiveIndex((prevState) => ++prevState);
  };

  const previousHandler = () => {
    if (activeIndex === 0) return;
    setActiveIndex((prevState) => {
      onPageChange(prevState);
      return --prevState;
    });
  };

  return (
    <nav className={`${classes.paginator} ${className}`}>
      {pageCount > 1 && (
        <ul>
          <li
            onClick={previousHandler}
            className={activeIndex === 0 ? classes.disabled : ""}
          >
            <span>
              <span>«</span>
            </span>
          </li>
          {Array.from(Array(pageCount), (v, i) => (
            <li
              onClick={pageChangeHandler.bind(null, i)}
              className={activeIndex === i ? classes.active : ""}
              key={i}
            >
              <span>{i + 1}</span>
            </li>
          ))}
          {
            <li
              onClick={nextHandler}
              className={pageCount - 1 === activeIndex ? classes.disabled : ""}
            >
              <span>
                <span>»</span>
              </span>
            </li>
          }
        </ul>
      )}
    </nav>
  );
};

export default Paginator;
