import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Dialog,
    DialogContent,
    Typography
} from "@mui/material";
import React from "react";
import {Event} from "../../../model/Event"
import {EventControls} from "./RowControlsRenderer";

interface EventDetailsProps {
    detailedEvent: Event | undefined,
    closeEventDetails: () => void
}

export const EventDetailsDialog = (props: EventDetailsProps) => {

    return <Dialog color={'primary'} open={!!props.detailedEvent} onClose={props.closeEventDetails}>
        {props.detailedEvent &&
            <DialogContent dividers={true}>
                <Card sx={{maxWidth: 345}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={props.detailedEvent.imageLink}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {props.detailedEvent.name}
                            </Typography>
                            <Typography variant="body1">
                                {`${props.detailedEvent.date.toDateString()}  ${props.detailedEvent.time}`}
                            </Typography>
                            <Typography variant="body2" sx={{color: 'text.secondary', marginTop: '18px'}}>
                                {props.detailedEvent.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Typography variant="body2" sx={{color: 'text.secondary', marginTop: '18px'}}>
                            <div>Offer available</div>
                            <div>{`${props.detailedEvent.availableFrom.toLocaleDateString()}  -  ${props.detailedEvent.availableTo.toLocaleDateString()}`}</div>
                        </Typography>
                        <EventControls event={props.detailedEvent}/>
                    </CardActions>
                </Card>
            </DialogContent>
        }
    </Dialog>
}