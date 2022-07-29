import React, { useState } from "react";

import {
  Table,
  TableContainer,
  TableRow,
  Typography,
  TableBody,
  TableHead,
  Container,
  TableCell,
  Paper,
  TablePagination,
} from "@mui/material";

const ReceiptTable = ({ receiptdetails }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Container>
        <Typography align="center" fontWeight="bold" gutterBottom>
          Receipt Details Table
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 600 }}>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Payment Mode</TableCell>
                <TableCell>Remark</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {receiptdetails
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item) => {
                  return (
                    <>
                      <TableRow>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>{item.amount}</TableCell>
                        <TableCell>{item.payment}</TableCell>
                        <TableCell>{item.remark}</TableCell>
                      </TableRow>
                    </>
                  );
                })}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={receiptdetails.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Container>
    </>
  );
};

export default ReceiptTable;
