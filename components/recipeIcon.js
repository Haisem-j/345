import { createUseStyles } from "react-jss";
import Tags from "./tags";
const useStyles = createUseStyles({
  recipe: {
    height: "10%",
    borderBottom: "solid #292b2c .5px",

    transition: "all .5s",

    "&:hover": {
      backgroundColor: "#f7f7f7",
      cursor: "pointer",
    },
    "& h4": {
      fontWeight: "400",
      fontSize: "1.3rem",
      marginBottom: "5px",
    },
  },
  recipeContent: {
      marginLeft: '30px'
  }
});
export default function RecipeIcon() {
  const classes = useStyles();
  return (
    <div className={classes.recipe}>
      <div className={classes.recipeContent}>
        <h4>Turkey burger</h4>
        <Tags />
      </div>
    </div>
  );
}
