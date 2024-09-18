import { createTheme } from "@mui/material/styles";
//here we are using material ui the react libraary which helps in creating lookable website with inbuilt features of icon theme and many more 

export const darkTheme=createTheme({
    palette:{
        mode:"dark",
        background:{
            default:"#0c071b"
        },
        text:{
            primary:"#fff"
        },
        primary:{
            main:"rgba(215,106,255,0.507)"
        }
    }
})