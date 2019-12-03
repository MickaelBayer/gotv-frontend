import React, { useEffect, useState } from "react";
import clsx from 'clsx';
import "react-multi-carousel/lib/styles.css";
import { Dispatch, bindActionCreators } from "redux";
import { CatSerieActionTypes } from "../store/modules/catSerie/catSerie.type";
import { AppState } from "../store";
import { getAllCatSeries } from "../store/modules/catSerie/catSerie.action";
import { connect } from "react-redux";
import { Drawer, MenuList, MenuItem, makeStyles, createStyles, Theme, IconButton, useTheme, Divider } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
import SeriesCard from "../components/series/SerieCard";
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			marginBottom: "20px"
		},
		drawer: {
			width: drawerWidth,
			flexShrink: 0,
		},
		drawerHeader: {
			display: 'flex',
			alignItems: 'center',
			padding: theme.spacing(0, 1),
			...theme.mixins.toolbar,
			justifyContent: 'flex-end',
		},
		drawerPaper: {
			width: drawerWidth,
			position: "inherit"
		},
		menuButton: {
			position: "absolute",
			zIndex: 1,
			margin: theme.spacing(2),
			color: "white",
			display: "block"
		},
		hide: {
			display: 'none',
		},
		content: {
			flexGrow: 1,
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			marginLeft: -drawerWidth,
		},
		contentShift: {
			position: "relative",
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		},
	}),
);

const mapStateToProps = (state: AppState) => ({
	catSeries: state.catSerie.catSeries,
	isLoading: state.catSerie.isLoading
});

const mapDispatchToProps = (dispatch: Dispatch<CatSerieActionTypes>) => ({
	getAllCatSeries: bindActionCreators(getAllCatSeries, dispatch)
});

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const SeriesPage: React.FunctionComponent<Props> = (props) => {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = useState(true);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		props.getAllCatSeries();
	}, []);

	return (
		<Router>
			<div className={classes.root}>
				<Drawer
					className={classes.drawer}
					variant="persistent"
					open={open}
					classes={{
						paper: classes.drawerPaper,
					}}>
					<div className={classes.drawerHeader}>
						<IconButton onClick={handleDrawerClose}>
							{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
						</IconButton>
					</div>
					<Divider />
					<MenuList>
						{props.catSeries.filter(catserie => catserie.cae_series.length > 0).map((category, i) => {
							return (
								<MenuItem component={Link} to={`/category/${category.cae_id}`}>{category.cae_label}</MenuItem>
							)
						})}
					</MenuList>
				</Drawer>
				<main className={clsx(classes.content, {
					[classes.contentShift]: open,
				})}>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, open && classes.hide)}
					>
						<MenuIcon />
					</IconButton>
					<Switch>
						{props.catSeries.map((category, i) => {
							return (
								<Route key={i} exact path={`/category/${category.cae_id}`} render={() => {
									return (
										<React.Fragment>
											<header className="overview-header" style={{ backgroundColor: "gray" }}>
												<h1 className="title title-serie">{category.cae_label}</h1>
											</header>
											{category.cae_series.map((serie, i) => {
												return (
													<Link key={i} onClick={() => window.location.replace(`/serie/${serie.see_id}`)} to={{ pathname: `/serie/${serie.see_id}`, state: { serie: serie } }}>
														<SeriesCard serie={serie} />
													</Link>
												)
											})}
										</React.Fragment>
									)
								}} />
							)
						})}
					</Switch>
				</main>
			</div>
		</Router>
	);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SeriesPage));