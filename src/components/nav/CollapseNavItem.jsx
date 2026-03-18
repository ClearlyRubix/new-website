import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";

const CollapseNavItem = ({ id, buttonText = "", items = [], setMainMenuOpen, openCollapse, setOpenCollapse}) => {
    const open = openCollapse === id

    const handleClick = () => {
        setOpenCollapse(prev => (prev === id ? null : id)) // if this collapse was the one open and clicked, close it, if this was not the collapse open, open this one
    }

    return (
        <>
            <ListItemButton
                onClick={handleClick}
            >
                <ListItemText
                    primary={buttonText}
                />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout={"auto"}>
                <List component={"div"} disablePadding sx={{ pl: 2 }}>
                    {items.map((item, i) => (
                        <span key={i} onClick={() => {setMainMenuOpen();setOpenCollapse(null)}}>{item}</span>
                    ))}
                </List>
            </Collapse>
        </>
    );
};

export default CollapseNavItem;
