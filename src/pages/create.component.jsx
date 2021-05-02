import React ,{useState}from 'react'
import {useHistory} from 'react-router-dom'

import { Typography , Button, Container,TextField  } from '@material-ui/core'
import {RadioGroup, Radio } from '@material-ui/core'
import {FormControl,FormLabel,FormControlLabel} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

import { KeyboardArrowRight } from '@material-ui/icons'

const useStyles = makeStyles({
    field:{
        marginTop:20,
        marginBottom:20,
        display:"block"

    }
})
const Create = () =>{
    const classes = useStyles()
    const history = useHistory()
    const [title, setTitle] = useState("")
    const [detail, setDetail] = useState("")
    const [titleError,setTitleError] = useState(false)
    const [detailError,setDetailError] = useState(false)
    const [category,setCategory] = useState('Work')
    const handleSubmit = (e) =>{
        
        e.preventDefault()
        setTitleError(false)
        setDetailError(false)
        if (title && detail ) {
            fetch("http://localhost:8000/notes",{
                method: 'POST',
                headers : {"Content-Type": 'application/json'},
                body: JSON.stringify({title, detail,category})
            }).then(history.push('./'))
            
        }
        if (title==="") {
            setTitleError(true)

        }
        if (detail===""){
            setDetailError(true)
        }
    }
    return (
        <Container>
           <Typography 
           variant="h6" 
           component="h2" 
           color = "textSecondary"
           gutterBottom >
               Hello
           </Typography>
         <form noValidate autoComplete="off" onSubmit={handleSubmit}>
         <TextField 
         onChange = {(e) => setTitle(e.target.value)} 
         className={classes.field}
         label="Note Title"
         variant="outlined"
         fullWidth
         required 
         error={titleError}/>
               
        
        <TextField 
        onChange = {(e) => setDetail(e.target.value)} 
         className={classes.field}
         label="Details"
         variant="outlined"
         fullWidth
         required
         multiline
         rows={4} 
         error={detailError}/>
               
        
        <FormControl className={classes.field} >
        <FormLabel>Note Category</FormLabel>
        <RadioGroup value = {category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value='Thesis' control={<Radio/>} label="Thesis" />
            <FormControlLabel value='Todos' control={<Radio/>} label="Todos" />
            <FormControlLabel value='Remainders' control={<Radio/>} label="Remainders" />
            <FormControlLabel value='Work' control={<Radio/>} label="Work" />
            <FormControlLabel value='leetcode' control={<Radio/>} label="leetcode" />
            
        </RadioGroup>
        </FormControl>
       
        <Button 
           
           type ="Submit" color="secondary" variant = "contained" endIcon = {<KeyboardArrowRight/>} >
               submit
           </Button>
         </form>
           
        </Container> 
    );
}
export default Create;      