import {
  Avatar,
  IconButton,
  InputBase,
  TableCell,
  TableRow,
} from "@material-ui/core";
import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { IoSaveSharp } from "react-icons/io5";

function Row({
  accountName,
  accountNumber,
  currencyCode,
  date,
  name,
  avatar,
  eName,
  i,
  handleEdit,
  editObj,
  handleSave,
  handleInputChange,
  inputClass,
  id,
}) {
  const [edit, setEdit] = useState(false);
  return !edit ? (
    <TableRow>
      <TableCell>{i + 1}</TableCell>
      <TableCell style={{ display: "flex", alignItems: "center" }}>
        <Avatar src={avatar} />
        <span className={eName}>{name}</span>
      </TableCell>
      <TableCell>{accountNumber}</TableCell>
      <TableCell>{accountName}</TableCell>
      <TableCell>{currencyCode}</TableCell>
      <TableCell>{date}</TableCell>
      <TableCell>
        <IconButton
          onClick={() =>
            handleEdit(setEdit, {
              accountName,
              accountNumber,
              currencyCode,
              date,
              name,
              avatar,
              id,
            })
          }
        >
          <FiEdit />
        </IconButton>
      </TableCell>
    </TableRow>
  ) : (
    <TableRow>
      <TableCell>{i + 1}</TableCell>
      <TableCell style={{ display: "flex", alignItems: "center" }}>
        <Avatar src={avatar} />
        <InputBase
          onChange={handleInputChange}
          name="name"
          value={editObj.name}
        />
      </TableCell>
      <TableCell>
        <InputBase
          className={inputClass}
          onChange={handleInputChange}
          name="accountNumber"
          value={editObj.accountNumber}
        />
      </TableCell>
      <TableCell>
        <InputBase
          className={inputClass}
          onChange={handleInputChange}
          name="accountName"
          value={editObj.accountName}
        />
      </TableCell>
      <TableCell>
        <InputBase
          className={inputClass}
          onChange={handleInputChange}
          name="currencyCode"
          value={editObj.currencyCode}
        />
      </TableCell>
      <TableCell>
        <InputBase
          className={inputClass}
          onChange={handleInputChange}
          name="date"
          value={editObj.date}
        />
      </TableCell>
      <TableCell>
        <IconButton onClick={() => handleSave(setEdit)}>
          <IoSaveSharp />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default Row;
