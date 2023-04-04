export interface IPricesItems {
    subsetId: string,
    id: string,
    name: string,
    price: number,
    discount: number,
    bulk_price: number,
    bulk_discount: boolean,
}

export interface IPricesSubsets {
    id: string,
    title: string,
    type: "price" | "bulk",
    bulk_discount: number,
    items: IPricesItems[]
}

export interface IPrices {
    _id: string,
    title: string,
    createdAt: Date,
    subsets:IPricesSubsets[]
}