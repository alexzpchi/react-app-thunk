import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    rowTitle: {
        fontWeight: "bold",
        marginLeft: 50,
    },
    title: {
        margin: theme.spacing(4, 2, 2),
        textAlign: "center",
    },
}));