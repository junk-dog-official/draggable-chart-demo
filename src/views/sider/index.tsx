import { Excel } from "@icon-park/react"
import { Button, Typography } from "antd"
import { useState } from "react";
import { ExcelDrawer } from "../excel-drawer";

export function Sider() {

    const [drawerOpen, setDrawerOpen] = useState(false);
    function onClose() {
        setDrawerOpen(false)
    }

    function onOpen() {
        console.log('open')
        setDrawerOpen(true)
    }

    return (
        <div>
            <div className="flex items-center justify-between px-4 py-3 border-b border-solid border-gray-300">
                <Typography.Title level={4} style={{ marginBottom: 0 }} >图表配置</Typography.Title>
                <Button type="primary" icon={<Excel />} onClick={onOpen} >查看数据</Button>
            </div>
            <ExcelDrawer opened={drawerOpen} onClose={onClose} />
        </div>
    )
}