export interface Item {
    id: number
    name: string
}

export interface ItemClickPayload {
    index: number
    item: Item
}