import { createUseStyles } from "react-jss";
import RecipeIcon from "./recipeIcon";

const useStyles = createUseStyles({
  recipeListContainer: {
    color: "black",
    width: "25%",
    overflow: "scroll",
  },
});

export default function RecipeList() {
  const classes = useStyles();
  return (
    <div className={classes.recipeListContainer}>
      <RecipeIcon />
    </div>
  );
}
