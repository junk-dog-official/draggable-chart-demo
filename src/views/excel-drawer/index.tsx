import { Drawer } from "antd"
import { Excel } from "./Excel"

export type ExcelDrawerProps = {
    opened: boolean,
    onClose: () => void,
}

export function ExcelDrawer({ opened, onClose }: ExcelDrawerProps) {
    return (
        <Drawer 
        title="表格数据" 
        placement="right" 
        onClose={onClose} 
        open={opened} 
        width={"100%"}>
            <Excel />
        </Drawer>
    )
}