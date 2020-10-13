import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    sideBarContainer : {
        height: '100%',
        backgroundColor: 'black'
    }
})

export default function Sidebar(){
    const classes = useStyles();
    return(
        <div className={classes.sideBarContainer}>
            Sidebar
        </div>
    )
}