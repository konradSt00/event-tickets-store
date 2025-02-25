import {Button, Dialog, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

export const LoginAlert = () => {
    const [open, setOpen] = useState(false);

    const otworzDialog = () => {
        setOpen(true);
    };

    const zamknijDialog = () => {
        setOpen(false);
    };

    useEffect(() => {
        // Przykład: otwórz dialog po 2 sekundach od załadowania komponentu
        const timer = setTimeout(() => {
            otworzDialog();
        }, 2000);

        return () => clearTimeout(timer); // Czyszczenie timera
    }, []);

    return (
        <div>
            <Dialog open={open} onClose={zamknijDialog}>
                <DialogTitle>Powiadomienie</DialogTitle>
                <DialogContent>To jest powiadomienie otwarte programowo.</DialogContent>
            </Dialog>
        </div>
    );
}