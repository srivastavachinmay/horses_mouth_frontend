import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(( theme ) => (
    {
        box: {
            backgroundColor: '#fffff',
            display: "flex",
            flexDirection: "column",
            width: "99vw",
            justifyContent: "center",
            alignItems: "center",
            
        },
        innerbox: {
            backgroundColor: "#EFEDFF",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            // overflowY: "scroll",
            width: "55vw",
            padding: "30px 30px",
            height: "250vh",
            borderRadius: "7px"
        },
        title: {},
        sminput: {
            border: "1px solid #6E3CBC",
            height: "30px",
            width: "90%",
            margin: "9px 0px",
            borderRadius: "4px",
            padding: "6px 3px"
        },
        biggertext: {
            width: "45vw",
            height: "20vh",
            borderRadius: "7px",
            padding: "30px 30px",
            border: "1px solid #6E3CBC",
            margin: "9px 0px",
        },
        button: {
            width: "14vw",
            height: "8vh",
            padding: "3px 5px",
            border: "none",
            boxShadow: "none",
            backgroundColor: "#6E3CBC",
            color: "#FFFFFF",
            borderRadius: "4px",
            cursor: "pointer",
            '&:hover': {
                backgroundColor: "#6E3CBC"
            },
        },
        regtitle: {
            width: "100vw",
            height: "30vh",
            textAlign: "center",
            color: "#ffffff",
            padding: "66px 0px",
            fontSize: "30px"
        },
        options: {
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: "70vh",
            width: "100vw",
        },
        option: {
            borderRadius: "20px",
            border: "2px solid black",
            boxShadow: "0px 0px 15px 3px #000000",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "30%",
            height: "70%",
            '&:hover': {
                transform: "scale(1.2)",
                transition: "all 1.5s ease-in-out"
            },
            backgroundColor: "#f1f1f1",
        },
        image: {
            width: "200px",
            height: "200px",
            backgroundColor: "#6E3CBC",
            margin: "30px 0px",
            padding: "10px 0px",
            borderRadius: "133px",
        }
    }
));