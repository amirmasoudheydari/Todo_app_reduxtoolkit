import { Box, Typography } from "@mui/material"

export const Header = ({ content }) => {
  return (
    <Box sx={{
      textAlign: "center",
      padding: 2,
      backgroundColor: 'rgb(134, 50, 255)'
    }}>
      <Typography variant="h2"
        sx={{
          fontSize: "3.5rem",
          color: "white",
          fontWeight: 'bold'
        }} >
        {content}
      </Typography>
    </Box>
  )
}

