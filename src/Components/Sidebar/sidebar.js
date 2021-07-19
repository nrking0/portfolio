import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-scroll';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';
import MailIcon from '@material-ui/icons/Mail';
import './Sidebar.css';
import FadeIn from "react-fade-in";
import event from '../../utils/analytics';

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
        },
    }
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
        <div className="sidebardiv">
            <FadeIn>
            <h1 style={{ textAlign: 'center' }}>Nick King</h1>
            <img src={require('../../Images/headshot2.jpeg')} className="headshot" alt=""></img>
            <div className="icons">
            <IconButton color="inherit" href="mailto:nrking2@illinois.edu" onClick={()=> event({category: "Information", action: "Viewed Email", label: "Email Sidebar"})}><MailIcon></MailIcon></IconButton>
            <IconButton color="inherit" target="_blank" href="https://www.github.com/nrking0" onClick={()=> event({category: "Information", action: "Viewed GitHub", label: "Github Sidebar"})}><GitHubIcon /></IconButton>
            <IconButton color="inherit" target="_blank" href="https://www.linkedin.com/in/nrking0" onClick={()=> event({category: "Information", action: "Viewed LinkedIn", label: "LinkedIn Sidebar"})}><LinkedInIcon /></IconButton>
            <IconButton color="inherit" target="_blank" href="https://drive.google.com/file/d/1L2j00rdrF8nt2qiMFN22BBhOaMH77kVB/view?usp=sharing" onClick={()=> event({category: "Information", action: "Viewed resume", label: "Resume Sidebar"})}><DescriptionIcon /></IconButton>
            </div>
            {/* <div className={classes.toolbar} />
            <Divider /> */}
            <List>

                <ListItem>
                    <Link className="homeButton" activeClass="active" to="Home" spy={true} smooth={true} duration={1200}>
                        <ListItemText className={classes.sideText} primary="Home" />
                    </Link>
                </ListItem>

                <ListItem>
                    <Link className="homeButton" activeClass="active" to="About" spy={true} smooth={true} duration={1200}>
                        <ListItemText className={classes.sideText} primary="About" />
                    </Link>
                </ListItem>

                <ListItem>
                    <Link className="homeButton" activeClass="active" to="Projects" spy={true} smooth={true} duration={1200}>
                        <ListItemText className={classes.sideText} primary="Projects" />
                    </Link>
                </ListItem>

                <ListItem>
                    <Link className="homeButton" activeClass="active" to="Experience" spy={true} smooth={true} duration={1200}>
                        <ListItemText className={classes.sideText} primary="Experience" />
                    </Link>
                </ListItem>

                <ListItem>
                    <Link className="homeButton" activeClass="active" to="Contact" spy={true} smooth={true} duration={1200}>
                        <ListItemText className={classes.sideText} primary="Contact" />
                    </Link>
                </ListItem>

            </List>
            </FadeIn>
        
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