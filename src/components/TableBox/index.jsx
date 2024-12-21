import TextBlock from "../TextBlock";
import classes from "./TableBox.module.scss";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const showListData = [
  { value: 5, label: 5 },
  { value: 10, label: 10 },
  { value: 15, label: 15 },
  { value: 20, label: 20 },
];

const TableBox = ({ hidePagination, columns = [], data = [], noDataItem, minWidth }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapper_over}>
        <table className={classes.wrapper_table} style={{ minWidth: minWidth}}>
          <thead>
            <tr>
              {columns.map((column, idx) => (
                <th key={column.key}>
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length < 1 ? (
              <tr>
                <td colSpan={columns.length} style={{ textAlign: "center" }}>
                  {noDataItem}
                </td>
              </tr>
            ) : (
              <>
                {data.map((row, rowIdx) => (
                  <tr key={rowIdx}>
                    {columns.map((column) => (
                      <td key={`${rowIdx}_${column.key}`}>
                        {column?.renderItem?.(row) || row[column.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
      {!hidePagination && <div className={classes.wrapper_pagination}>
        <TextBlock classWrap={classes.wrapper_pagination_page}>
          <p>Page 1 of 3</p>
        </TextBlock>
        <select className={classes.wrapper_pagination_select}>
          {showListData.map((item, idx) => (
            <option key={idx} value={item.value}>
              Show {item.label}
            </option>
          ))}
        </select>
        <div className={classes.wrapper_pagination_cta}>
          <button className={classes.wrapper_pagination_cta_btn} type="button">
            <FaAngleLeft />
          </button>
          <button className={classes.wrapper_pagination_cta_btn} type="button">
            <FaAngleRight />
          </button>
        </div>
      </div>}
    </div>
  );
};

export default TableBox;
