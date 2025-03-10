import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {Event} from "../../../model/Event"
import {useEffect, useState} from "react";
import {rowControlsRenderer} from "./RowControlsRenderer";
import {EventDetailsDialog} from "./EventDetails";
import {useSelector} from "react-redux";
import {StoreState} from "../../../model/storing/StoreState";
import {DEFAULT_CURRENCY} from "../../../constants";
import {EventService} from "../../../services/EventService";

interface DataGridRowType {
    id: number,
    eventName: string,
    category: string,
    eventDate: Date,
    price: string,
}

export const ListView = () => {
    const events = useSelector((state: StoreState) => state.events)
    const [detailedEvent, setDetailedEvent] = useState<Event | undefined>(undefined)

    useEffect(() => {
        EventService.getAllAvailableEvents();
        const intervalId = EventService.startAutoRefreshOffers()
        return () => {
            clearInterval(intervalId);
        }
    }, []);

    const getColumns = (): GridColDef<(DataGridRowType[])[number]>[] => [
        {field: 'id', headerName: '', flex: 1, disableColumnMenu: true, disableReorder: true, hideSortIcons: true},
        {field: 'eventName', headerName: 'Event name', flex: 5},
        {field: 'category', headerName: 'Event category', flex: 3},
        {field: 'eventDate', headerName: 'Event date', flex: 2, type: "date"},
        {field: 'price', headerName: 'Ticket price', flex: 2},
        {
            field: 'controls',
            headerName: '',
            flex: 3,
            disableColumnMenu: true,
            disableReorder: true,
            hideSortIcons: true,
            renderCell: rowControlsRenderer(events)
        },
    ]

    const mapEventToRow = (event: Event, index: number) => {
        return {
            id: index + 1,
            eventName: event.name,
            category: event.category.name,
            eventDate: event.date,
            price: event.ticketPrice + ' ' + DEFAULT_CURRENCY,
        }
    }

    const getRows = () => {
        return events.map(mapEventToRow)
    }

    return <div className={'list-item-container'}>
        <h3>Events</h3>
        <DataGrid
            columns={getColumns() as any}
            rows={getRows()}
            rowSelection={false}
            onRowClick={(e) => setDetailedEvent(events[parseInt(e.id.toString()) - 1])}
        />
        <EventDetailsDialog
            detailedEvent={detailedEvent}
            closeEventDetails={() => setDetailedEvent(undefined)}/>
    </div>
}