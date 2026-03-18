import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";

const CollapseNavItem = ({ buttonText = "", items = [], setMainMenuOpen }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <ListItemButton
                onClick={() => {
                    setOpen((prev) => !prev);
                }}
            >
                <ListItemText
                    primary={buttonText}
                />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout={"auto"}>
                <List component={"div"} disablePadding sx={{ pl: 2 }}>
                    {items.map((item, i) => (
                        <span key={i} onClick={() => setMainMenuOpen()}>{item}</span>
                    ))}
                </List>
            </Collapse>
        </>
    );
};

export default CollapseNavItem;
