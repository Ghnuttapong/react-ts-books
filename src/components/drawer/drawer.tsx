import React, { useState } from "react";
import { Drawer } from 'antd';
import {Link} from 'react-router-dom'

function DrawerMain() {
    const [open, setOpen] = useState<boolean>(true)
    const onClose = () => {
        setOpen(false)
    }
    return (
        <Drawer
        title="Menus"
        placement={"left"}
        closable={false}
        onClose={onClose}
        open={open}
        key={"left"}
      >
        <p><Link to="/">Books</Link></p>
        <p><Link to="/books">item</Link></p>
        <p><Link to="/books/add">Add</Link></p>
      </Drawer>
    )

}

export default DrawerMain