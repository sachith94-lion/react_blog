import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    blogsContainer: {
        paddingTop: theme.spacing(3),
      },
      blogTitle: {
        fontWeight: 800,
        paddingBottom: theme.spacing(3),
      },
      card: {
        maxWidth: "100%",
      },
      media: {
        height: 240,
      },
      cardActions: {
        display: "flex",
        margin: "0 10px",
        justifyContent: "space-between",
      },
      author: {
        display: "flex",
      },
      paginationContainer: {
        display: "flex",
        justifyContent: "center",
      },
  }));
  export default useStyles;