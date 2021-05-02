import React from 'react'
import {useHistory,useLocation} from 'react-router-dom'
import {AppBar, Avatar, makeStyles, Toolbar} from "@material-ui/core"
import {Drawer,Typography} from '@material-ui/core'
import {List,ListItem,ListItemIcon,ListItemText} from '@material-ui/core'
import {  AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
import {format } from 'date-fns'
const drawerWidth = 240
const useStyles = makeStyles((theme)=>{
return{
    page: {
        background:'#f9f9f9',
        width:'100%',
        padding:theme.spacing(3)
    },
    drawer:{
        width:drawerWidth
    },
    drawerPaper:{
        width:drawerWidth
    },
    root:{
        display:"flex"
    },
    active:{
        background:'#f4f4f4' 
    },
    title:{
       padding: theme.spacing(2)
    },
    appbar:{
        width: `calc(100% - ${drawerWidth}px)`
    },
    date: {
        flexGrow: 1
      },
      avatar: {
        marginLeft: theme.spacing(2)
      },
    toolbar:theme.mixins.toolbar
}
})
const Layout = ({children}) =>{
   const classes = useStyles()
   const history = useHistory()
   const location = useLocation()
   const menuItems = [
       {
           text:'My Notes',
           icon:<SubjectOutlined color="secondary"/>,
           path:'/'
       },
       {
        text:'Create Note',
        icon:<AddCircleOutlineOutlined color="secondary"/>,
        path:'/create'
    }
   ]
    
    return(
        <div className={classes.root}>
            <AppBar className={classes.appbar}>
                    <Toolbar>
                        <Typography  className={classes.date}> {format(new Date(),'dd-MM-yyyy')}</Typography>
                    <Typography className={classes.date} variant="h3"> Welcome to Note App </Typography>
                        
                        <Typography>Mario</Typography>
                        <Avatar className = {classes.avatar} src="/logo_app.jpg"/>
                    </Toolbar>
                </AppBar>
            <Drawer className={classes.drawer} variant="permanent" anchor="left" classes={{paper:classes.drawerPaper}} >
                
                <div>
                    <Typography variant="h5" className={classes.title}>
                        My Note
                    </Typography>
                </div>
                <List>
                {menuItems.map(item =>(
                    <ListItem 
                    button
                    key={item.text}
                    onClick={()=>history.push(item.path)}
                    className={location.pathname === item.path ? classes.active : null}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text}>{item.text}</ListItemText>
                    </ListItem>
                ))}
            </List>
            </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>

            
        </div>
    )
}
export default Layout