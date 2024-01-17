import { SwipeableDrawer } from "@mui/material";
import React from "react";

export default function Drawermodule({
  children,
  open,
  onOpen,
  onClose,
  anchor,
}: {
  children: React.ReactNode;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  anchor: 'right';
}) {
  return (
    <div>
      <SwipeableDrawer
        anchor={anchor}
        open={open}
        onClose={onClose}
        onOpen={onOpen}
        >
        {children}
      </SwipeableDrawer>
    </div>
  );
}
