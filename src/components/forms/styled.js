import {
    makeStyles
} from "@material-ui/core/styles";
export const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    rootCard: {
        minWidth: 275,
    },
    button: {
        marginTop: 20,
    },
    errorCredentials: {
        marginTop: 10,
        color: "red",
    },
}));