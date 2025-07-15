import { ListTable } from "@visactor/react-vtable";
import React, { useEffect, useState } from "react";

type ListTableProps = React.ComponentProps<typeof ListTable>

type PropertyType<T, K extends keyof T> = T[K];

type ITableOption = PropertyType<ListTableProps, 'option'>;

async function handleTestData() {
    const data = (await import('./test-data.json')).default as any[];
    const columns = [
      { field: 'Order ID', title: 'Order ID', dimensionKey: 'Order ID', width: 'auto'  },
      { field: 'Customer ID', title: 'Customer ID', dimensionKey: 'Customer ID', width: 'auto'  },
      { field: 'Product Name', title: 'Product Name', dimensionKey: 'Product Name', width: 'auto'  },
      { field: 'Category', title: 'Category', dimensionKey: 'Category', width: 'auto'  },
      { field: 'Sub-Category', title: 'Sub-Category', dimensionKey: 'Sub-Category', width: 'auto'  },
      { field: 'Region', title: 'Region', dimensionKey: 'Region', width: 'auto'  },
      { field: 'City', title: 'City', dimensionKey: 'City', width: 'auto'  },
      { field: 'Order Date', title: 'Order Date', dimensionKey: 'Order Date', width: 'auto'  },
      { field: 'Quantity', title: 'Quantity', dimensionKey: 'Quantity', width: 'auto'  },
      { field: 'Sales', title: 'Sales', dimensionKey: 'Sales', width: 'auto'  },
      { field: 'Profit', title: 'Profit', dimensionKey: 'Profit', width: 'auto'  }
    ];
    const option: ITableOption = {
      records: data,
      columns,
      widthMode: 'standard'
    }
    return option;
}

export function Excel() {
    const [option, setOption] = useState<ITableOption>();

    useEffect(() => {
        handleTestData().then(res => setOption(res as ITableOption));
    }, [])
    return (
        <ListTable option={option} />
    )
}