export class OrderDto {
    public id: number;
    public petId: number;
    public quantity: number;
    public shipDate: string;
    public status: string;
    public complete: boolean;

    public constructor(
        id: number,
        petId: number,
        quantity: number,
        shipDate: string,
        status: string,
        complete: boolean
    ) {
        this.id = id;
        this.petId = petId;
        this.quantity = quantity;
        this.shipDate = shipDate;
        this.status = status;
        this.complete = complete;
    }
}
