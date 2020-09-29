import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Scroll from 'react-scroll'
import {Link} from 'react-scroll';
import './Sidebar.css';

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        background: '#fa8072',
        [theme.breakpoints.up('sm')]: {
            //   width: `calc(100% - ${drawerWidth}px)`,
            //   marginLeft: drawerWidth,
            opacity: '0',
        },
    },
    menuButton: {
        margin: 10,
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
       
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    sideText: {
        cursor: 'pointer',
        '&:before': {
            content: '""',
            position: 'absolute',
            bottom: '0',
            right: '50%',
            height: '0',
            width: '0%',
            borderBottom: '2px solid #fa8072',
            transition: 'width 0.3s ease',
        },
        '&:after': {
            content: '""',
            position: 'absolute',
            bottom: '0',
            left: '50%',
            height: '0',
            width: '0%',
            borderBottom: '2px solid #fa8072',
            transition: 'width 0.3s ease',
        },
        '&:hover:after': {
            width: '50%',
        },
        '&:hover:before': {
            width: '50%'
        }
    },
}));

function ResponsiveDrawer(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <h1 style={{textAlign:'center'}}>Nick King</h1>
            <img src={require('../../Images/headshot2.jpeg')} className="headshot"></img>
            <div className={classes.toolbar} />
            <Divider />
            <List>

                <ListItem>
                <Link className="homeButton" activeClass="active" to="Home" spy={true} smooth={true} duration={1000}>
                <ListItemText className={classes.sideText} primary="Home" />
                </Link>
                </ListItem>

                <ListItem>
                <Link className="homeButton" activeClass="active" to="About" spy={true} smooth={true} duration={1000}>
                <ListItemText className={classes.sideText} primary="About" />
                </Link>
                </ListItem>

                <ListItem>
                <Link className="homeButton" activeClass="active" to="About" spy={true} smooth={true} duration={1000}>
                <ListItemText className={classes.sideText} primary="Projects" />
                </Link>
                </ListItem>

                <ListItem>
                <Link className="homeButton" activeClass="active" to="About" spy={true} smooth={true} duration={1000}>
                <ListItemText className={classes.sideText} primary="Experience" />
                </Link>
                </ListItem>

                <ListItem>
                <Link className="homeButton" activeClass="active" to="About" spy={true} smooth={true} duration={1000}>
                <ListItemText className={classes.sideText} primary="Contact" />
                </Link>
                </ListItem>

            </List>
            <Divider />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Nick King
          </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
}



export default ResponsiveDrawer;