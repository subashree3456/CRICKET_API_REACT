import React from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    ClickAwayListener,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    Typography,
} from "@material-ui/core";

const MyCard = ({ match }) => {
    const getMatchCart = () => {
        return (
            <Card style={{ marginTop: 20}}>
                <CardContent>
                    <Grid container justify="center" alignItems="center" spacing={4}>
                        <Grid item> 
                        <Typography variant="h5">First Team</Typography>
                        </Grid>
                        <Grid item>
                       
                       <img style={{ width: 85 }} src={require("../img/vs.png")} alt=""/>

                        </Grid>
                        <Grid item> 
                        <Typography variant="h5">second team</Typography>
                        </Grid>
                    </Grid>




                </CardContent>
                <CardActions>
                     
                     <Grid container justify="center" >
                     <Button item variant="contained" color="primary">
                        Show Detail
                    </Button>
                    <Button  style={{ marginLeft: 5 }} item variant="contained" color="primary">
                        {new Date().toString()}
                    </Button>
                     </Grid>



                </CardActions>
                < /Card>
                );
    };

                return (
                getMatchCart()
                )

}




                export default MyCard;