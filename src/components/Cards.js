import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, CardMedia, CardActions} from '@material-ui/core'
import Button from '@material-ui/core/Button'

function Cards({ classes, image }) {
    return (
        <Card className={classes.item}>
            <CardMedia
                // className={classes.media}
                component="img"
                alt="food"
                height="256"
                image={image}
                title="food"
                />
                
            <CardContent className={classes.content}>
                <Typography gutterBottom variant="h5" component="h2">
                    Food
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                    Cras eleifend sagittis massa. Vestibulum pellentesque <br />
                    bibendum metus iaculis tincidunt. Donec sit amet neque <br />
                    tristique, ultricies felis sit amet, eleifend urna. <br />
                    Ut ac ipsum lectus.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    Compartilhar
                </Button>
                <Button size="small" color="primary">
                    Saiba mais
                </Button>
            </CardActions>
        </Card>

    );
}

export default withStyles({
    item: {
        minWidth: "400px",
        margin: "1em",
        boxSizing: "border-box",
    },
    content: {
        height: "120px"
    }
})(Cards);
