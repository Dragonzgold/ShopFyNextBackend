import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Relation } from "typeorm";
import { PurchaseProduct } from "./PurchaseProduct";

@Entity()
export class Product {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    
    @Column()
    name: string;

    @Column({type: "text"})
    description: string;

    @Column({type: "numeric", precision: 10, scale: 2})
    price: number;

    @Column({type: "numeric", precision: 10, scale: 2, nullable: true } )
    previousPrice: number;

    @Column()
    urlImg: string;

    @Column()
    reviews: number;

    @OneToMany(() => PurchaseProduct, (purchaseProduct) => purchaseProduct.product)
    purchaseProducts: Relation<PurchaseProduct[]>;
}