import Sidebar from '../components/sidebar';
import Recipe from '../components/recipe';
import RecipeList from '../components/recipeList';

import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    container : {
        display: 'flex',
        height: '100vh'
    }
})

export default function App(){
    const classes = useStyles()
    return(
        <div className={classes.container}>
            <Sidebar />
            <RecipeList />
            <Recipe />
        </div>
    )
}