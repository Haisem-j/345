import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  tagsContainer: {
    backgroundColor: 'green',
    padding: '5px',
    border: 'solid 0.5px black',
    display: 'inline-block',
    fontSize: "10px",
    borderRadius: '5%'
  }
});
export default function Tags() {
  const classes = useStyles();
  return (
    <div className={classes.tagsContainer}>
        Beginner
    </div>
    );
}
