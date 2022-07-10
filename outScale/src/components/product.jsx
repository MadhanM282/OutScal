import { Box, Typography,Button } from "@mui/material"

export const Product = ({ data }) => {
    const style = {
        borderRadius: "15px 15px 0px 0px"
    }
    return (
        <Box>
            <Box sx={{ m: 1, width: "250px", height: "300px", borderRadius: 5, boxShadow: 5, background: "black", color: "white" }}>

                <img style={style} src={data.imageurl} alt="" width="250px" />
                <Box sx={{ textAlign: "left", pl: 3 }}>
                    <Typography sx={{ fontWeight: "bolder" }}>{data.title}</Typography>
                    <Typography sx={{ fontWeight: "bolder" }}>Price:- {data.price}/-</Typography>
                </Box>
                <Box >
                    <Button sx={[{ color: "black", background: "orange", m: 1, borderRadius: 4, width: "40%" },() => ({ "&:hover": { color: "orange", bgcolor: "black" } })]}>Buy</Button>
                    <Button sx={[{ color: "black", background: "orange", m: 1, borderRadius: 4, width: "40%" },() => ({ "&:hover": { color: "orange", bgcolor: "black" } })]}>Cart</Button>
                </Box>

            </Box>
        </Box>

    )
}
