import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemText, useTheme } from "@mui/material";
import { useState } from "react";

const CollapseNavItem = ({ buttonText = "", items = [] }) => {
    const [open, setOpen] = useState(false);
    const theme = useTheme()
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
                        <span key={i}>{item}</span>
                    ))}
                </List>
            </Collapse>
        </>
    );
};

export default CollapseNavItem;
