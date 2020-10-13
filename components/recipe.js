import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
    recipeContainer: {
        backgroundColor: '#F7F9F7',
        width: '75%'
    }
})

export default function Recipe(){
    const classes = useStyles()
    return (
        <div className={classes.recipeContainer}>
            Recipe
        </div>
    )
}