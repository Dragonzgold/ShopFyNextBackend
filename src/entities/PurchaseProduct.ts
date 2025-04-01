import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Product } from "./Products";
import { Purchase } from "./Purches";

@Entity()
export class PurchaseProduct {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({type: "numeric", precision: 10, scale: 2})
    total: number;

    @Column()
    quantity: number;

    @ManyToOne(() => Product, (product) => product.purchaseProducts)
    product: Product;

    @ManyToOne(() => Purchase, (purchase) => purchase.purchaseProducts)
    purchase: Relation<Purchase>;
}