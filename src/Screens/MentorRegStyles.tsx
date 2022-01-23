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
        padding: "6px 3px",
        
    },
    biggertext: {
        width: "45vw",
        height: "20vh",
        borderRadius: "7px",
        padding: "30px 30px",
        border: "1px solid #6E3CBC",
        margin: "9px 0px",
        color:"#6E3CBC"
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
        height:"60vh",
        justifyContent:"space-evenly",
        alignItems:"center"
    },
    student:{
        width:"25%",
        height:"80%",
        display:"flex",
        flexDirection:"column",
        boxShadow: "0px 0px 14px 0px #000000",
        alignItems:"center",
        justifyContent:"flex-end",
        padding:"30px 30px",
        // border:"2px solid black",
        borderRadius:"18px",
        backgroundColor:"#f1f1f1",
        cursor: "pointer",
        '&:hover':{
            transform:"scale(1.1)",
            transition:"transform 2s",
            transitionTimingFunction: "ease-in-out"
        }
    },
    mentors:{
        width:"25%",
        height:"80%",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"flex-end",
        boxShadow: "0px 0px 14px 0px #000000",
        padding:"30px 30px",
        // border:"2px solid black",
        borderRadius:"18px",
        backgroundColor:"#f1f1f1",
        cursor: "pointer",
        '&:hover':{
            transform:"scale(1.1)",
            transition:"transform 2s",
            transitionTimingFunction: "ease-in-out"
        }
    },
    maintitle:{
        color:"#FFFFFF",
        fontSize:"45px",
        width:"100vw",
        height:"25vh",
        padding:"3rem 0rem",
        textAlign:"center",
    }
} ))

export default useStyles