import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react"
import { Product } from "./product";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const PageNumber = 1

export const MainPage = () => {
    const [Data, SetData] = useState([]);
    const [page, SetPage] = useState(PageNumber)
    const [Price, setPrice] = useState('');
    const [order, SetOrder] = useState("asc")

    const handleChange = (e) => {
        
        if( e.target.value==="asc"){
            SetData([])
            SetOrder("asc")
          }
          if( e.target.value==="desc"){ 
            SetData([]) 
            SetOrder("desc")
          }

        SetOrder(e.target.value)
    };
    const handleChangePrice = (event) => {
        setPrice(event.target.value);
        SetData([])
        SetPage(1)
    };

    useEffect(() => {
        GetData()
    }, [page, Price,order])

    const GetData = () => {
        axios.get(`https://outscal-api.herokuapp.com/product/?page=${page}&price=${Price}&sortBy=price&OrderBy=${order}`).then(({ data }) => {

            SetData([...Data, ...data])
        })
    }



    // http://localhost:3030/get-restaurants?rating_gte=${rating}&_limit=4&_page=${page}&payment_methods.cash=${cash}&payment_methods.card=${card}&_sort=costForTwo&_order=${costForTwo}
    const ReachedBottom = () => {
        SetPage(page + 1)
    }
    window.onscroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            ReachedBottom()
        }
    }
    return (
        <Box>
            <Box sx={{ position: "fixed" }}>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small">Price</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={order}
                        label="Price"
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em></em>
                        </MenuItem>
                        <MenuItem value={"asc"}>low-high</MenuItem>
                        <MenuItem value={"desc"}>hign-low</MenuItem>

                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small">Range</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={Price}
                        label="filter"
                        onChange={handleChangePrice}
                    >
                        <MenuItem value="">
                            <em></em>
                        </MenuItem>
                        <MenuItem value={500}>above 500</MenuItem>
                        <MenuItem value={600}>above 600</MenuItem>
                        <MenuItem value={700}>above 700</MenuItem>
                        <MenuItem value={800}>above 800</MenuItem>
                        <MenuItem value={900}>above 900</MenuItem>

                    </Select>
                </FormControl>
            </Box>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "space-evenly", pt: "50px" }}>

                {Data.map((e,i) => {
                    return <Product key={i+1} data={e} />
                })}
            </Box>
        </Box>
    )
} 