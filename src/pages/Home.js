import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Button,
  Card,
  Container,
  Stack,
  Table,
  TableBody,
  TableContainer,
  Typography,
} from "@mui/material";
import Iconify from "../components/iconify";
import Scrollbar from "../components/scrollbar";
import HOMELIST from "../_mock/home";
import { CarListToolbar, HomeListHead } from "../sections/@dashboard/home";
// @mui

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "name", label: "Name", alignRight: false },
  { id: "car", label: "Car", alignRight: false },
  { id: "car_model", label: "Car Model", alignRight: false },
  { id: "isVerified", label: "Verified", alignRight: false },
  { id: "status", label: "Status", alignRight: false },
  { id: "" },
];

// ----------------------------------------------------------------------

export default function Home() {
  const [order, setOrder] = useState("asc");

  const [orderBy, setOrderBy] = useState("name");

  const [selected, setSelected] = useState([[]]);

  const [filterName, setFilterName] = useState("");

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrderBy(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = HOMELIST.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  return (
    <>
      <Helmet>
        <title> Beyik Yol | Home </title>
      </Helmet>
      <Container>
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h4" gutterBottom>
            Home Page
          </Typography>
          <Button
            variant="contained"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            New Post
          </Button>
        </Stack>
        <Card>
          <CarListToolbar
            numSelected={selected.length}
            filterName={filterName}
            // onFilterName={handleFilterByName}
          />
        </Card>
        <Scrollbar>
          <TableContainer sx={{ minWidth: 800 }}>
            <Table>
              <HomeListHead
                order={order}
                orderBy={orderBy}
                headLabel={TABLE_HEAD}
                rowCount={HOMELIST.length}
                onRequestSort={handleRequestSort}
                onSelectAllClick={handleSelectAllClick}
              />
            </Table>
          </TableContainer>
        </Scrollbar>
      </Container>
    </>
  );
}
