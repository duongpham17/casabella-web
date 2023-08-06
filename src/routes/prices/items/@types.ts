export interface PricesDataSubsetsProps{
    title: string,
    type: "price" | "bulk",
    bulk_discount: number,
    items: {
        name: string,
        price: number,
        discount: number,
        bulk_price: number,
        bulk_discount: boolean,
    }[]
}

export interface PricesDataProps {
    title: string,
    subsets: PricesDataSubsetsProps[]
};