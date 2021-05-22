import React from "react";

function TableRow(props) {
    return (
        <tr>
            <td> <img src={props.thumbnail} alt="image thumbnail"/> </td>
            <td>{props.name}</td>
            {/* <td>{props.cell}</td> */}
            <td>{props.email}</td>
            {/* <td>{props.age}</td> */}
        </tr>
    );
};

export default TableRow;