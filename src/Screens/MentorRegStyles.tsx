import { makeStyles } from "@material-ui/styles";
import mentorimage from '../images/mentor.jpg'

const useStyles = makeStyles(( theme ) => ( {
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
    interface:{
        display:"flex",
        width:"100vw",
        height:"100vh",
        justifyContent:"space-evenly",
        alignItems:"center"
    },
    student:{
        width:"30%",
        height:"50%",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"flex-end",
        backgroundImage:`url(${mentorimage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding:"30px 30px",
        border:"2px solid black"
    },
    mentors:{
        width:"30%",
        height:"100%",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"
    },
    maintitle:{
        color:"#FFFFFF"
    }
} ))

export default useStyles