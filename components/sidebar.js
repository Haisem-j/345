import Link from "next/link";
import { createUseStyles } from "react-jss";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";

const useStyles = createUseStyles({
  sideBarContainer: {
    height: "100%",
    backgroundColor: "black",
    width: "5%",
    transition: "width .5s",
    color: "white",
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
    // "&:hover": {
    //   width: "15%",
    // },
    "& .logo": {
      marginTop: "50px",
      marginBottom: "50px",
      cursor: "pointer",
    },
  },
  sideBarchoices: {
    marginBottom: "40px",
    "&:hover": {
      cursor: "pointer",
    },
  },
});

export default function Sidebar() {
  const classes = useStyles();
  return (
    <div className={classes.sideBarContainer}>
      <Link href="/">
        <h1 className="logo">345</h1>
      </Link>
      <div className={classes.sideBarchoices}>
        <RestaurantMenuIcon />
      </div>
      <div className={classes.sideBarchoices}>
        <FitnessCenterIcon />
      </div>
    </div>
  );
}
