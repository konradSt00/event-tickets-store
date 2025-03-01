
import {DataGrid, GridColDef, GridRowSelectionModel} from "@mui/x-data-grid";
import {exampleOrder} from "../../store/MockData";
import {Order} from "../../model/order/Order";
import dayjs from "dayjs";
import {DATE_FORMAT} from "../../constants";


interface ProfileViewProps {

}

interface DataGridRowType {
    id: number,
    orderId: string,
    eventName: string,
    date: Date,
    price: number,
    quantity: number,
    totalPrice: number
}

let counter = 0;
export const ProfileView = (props: ProfileViewProps) => {

    const getColumns = (): GridColDef<(DataGridRowType[])[number]>[] => [
        {field: 'orderId', headerName: 'Order id', flex: 1},
        {field: 'eventName', headerName: 'Event name', flex: 5},
        {field: 'date', headerName: 'Order date', flex: 2, type: "date"},
        {field: 'price', headerName: 'Ticket price', flex: 2},
        {field: 'quantity', headerName: 'Quantity', flex: 2},
        {field: 'totalPrice', headerName: 'Total price', flex: 2},
    ]

    const mapOrderToRows = (order: Order): DataGridRowType[] => {
        return order.event.map((event) => {
            counter++;
            return {
                id: counter,
                orderId: order.id,
                date: dayjs(order.date, DATE_FORMAT).toDate(),
                eventName: event.name,
                quantity: event.quantity,
                price: event.price,
                totalPrice: event.price * event.quantity
            }
        })
    }

    const getRows = (): DataGridRowType[] => {
        return exampleOrder.flatMap(mapOrderToRows);
    }

    return <div className={'profile-view-container'}>
        <div className={'user-data-container'}>
            <h3>Your data</h3>
        </div>
        <div className={'orders-history-container'}>
            <h3>Your orders</h3>
            <DataGrid
                columns={getColumns()}
                rows={getRows()}
            />
        </div>
    </div>
}