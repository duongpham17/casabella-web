import {PricesDataProps, PricesDataSubsetsProps} from '@share/prices/@types';

const testItems = [
    {   
        name: "item 1 item 1 item 1",
        price: 10,
        discount: 0,
        bulk_price: 50,
        bulk_discount: false,
    },
    {   
        name: "item 2 item 2 item 2",
        price: 20,
        discount: 15,
        bulk_price: 50,
        bulk_discount: true,
    },
    {   
        name: "item 3 item 3 item 3",
        price: 30,
        discount: 50,
        bulk_price: 50,
        bulk_discount: true,
    },
    {   
        name: "item 4",
        price: 29,
        discount: 20,
        bulk_price: 49,
        bulk_discount: true,
    },
    {   
        name: "item 5",
        price: 31,
        discount: 10,
        bulk_price: 23,
        bulk_discount: false,
    },
    {   
        name: "item 6 item 6 item 6 item 6",
        price: 50,
        discount: 0,
        bulk_price: 100,
        bulk_discount: true,
    },
    {   
        name: "full body option 2 (anything and everything)",
        price: 50,
        discount: 40,
        bulk_price: 100,
        bulk_discount: false,
    },
    {   
        name: "item 8",
        price: 20,
        discount: 0,
        bulk_price: 120,
        bulk_discount: false,
    },
    {   
        name: "item 9",
        price: 12,
        discount: 0,
        bulk_price: 60,
        bulk_discount: false,
    },
    {   
        name: "item 10",
        price: 105,
        discount: 0,
        bulk_price: 230,
        bulk_discount: false,
    },
]

const popular: PricesDataSubsetsProps = {
    title: "Popular Packages",
    type: "price",
    bulk_discount: 0,
    items: testItems
};

const single: PricesDataSubsetsProps = {
    title: "Single packages",
    type: "price",
    bulk_discount: 0,
    items: testItems
};

const other: PricesDataSubsetsProps = {
    title: "Other ",
    type: "price",
    bulk_discount: 0,
    items: testItems
};

export const data: PricesDataProps = {
    title: "Waxing",
    subsets: [popular, single, other]
}