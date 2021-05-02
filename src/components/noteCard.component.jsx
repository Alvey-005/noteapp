import React from 'react';
import {Card,CardHeader,CardContent, IconButton,Typography, makeStyles} from '@material-ui/core'
import { DeleteOutline } from '@material-ui/icons';
const useStyles = makeStyles({
    test : {
        border:(note)=>{
            if (note.category==='work'){
                return '1px solid red'
            }
        }
    }
})
const NoteCard = ({note,handleDelete}) =>{
    const classes = useStyles(note)
    return (
        <div>
            <Card elevation={3} className={classes.test}> 
                <CardHeader
                action ={
                    <IconButton onClick={()=> handleDelete(note.id)}> 
                        <DeleteOutline/>
                    </IconButton>
                }
                title = {note.title}
                subheader={note.category}
                />
                <CardContent>
                    <Typography varint='body2' color="textSecondary"> 
                       {note.detail}
                    </Typography>
                </CardContent>
            </Card>
            
        </div>
    )

}
export default NoteCard