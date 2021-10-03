import {
  Paper,
  Table,
  TableCell,
  TableBody,
  TableContainer,
  TableRow,
  TableHead,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import axios from "axios";
import Row from "./Row";
function Stats() {
  const classes = useStyles();
  const [data, setData] = useState({
    accountName: "",
    accountNumber: "",
    currencyCode: "",
    date: "",
    name: "",
    avatar: "",
    id: "",
  });
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://preciley.herokuapp.com/employee-data")
        .then((res) =>
          setEmployeeList((pre) => {
            return [...res.data.list];
          })
        )
        .catch((e) => console.log("ERROR", e));
    };
    fetchData();
  }, []);

  const handleEdit = (saveValue, data) => {
    setData(data);
    saveValue((pre) => !pre);
  };
  const handleChange = (e) => {
    const {
      target: { value, name },
    } = e;
    var obj = { ...data };
    obj[name] = value;
    setData(obj);
  };
  const handleSave = async (saveValue) => {
    await axios
      .post("https://preciley.herokuapp.com/edit-data", data)
      .then((res) => {
        setEmployeeList((pre) => {
          return [...res.data.list];
        });
      })
      .catch((e) => console.log("Error", e));
    saveValue((pre) => !pre);
  };
  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table stickyHeader sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead className={classes.tableHeader}>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell>Employee Name</TableCell>
            <TableCell>Acc.No</TableCell>
            <TableCell>Acc.Name</TableCell>
            <TableCell>Currency Code</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody fullWidth>
          {employeeList.map(
            (
              {
                name,
                avatar,
                accountName,
                accountNumber,
                currencyCode,
                id,
                date,
              },
              i
            ) => (
              <Row
                eName={classes.eName}
                key={id}
                i={i}
                name={name}
                id={id}
                editObj={data}
                inputClass={classes.inputStyle}
                accountName={accountName}
                accountNumber={accountNumber}
                currencyCode={currencyCode}
                date={date}
                avatar={avatar}
                handleEdit={handleEdit}
                handleSave={handleSave}
                handleInputChange={handleChange}
              />
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Stats;
