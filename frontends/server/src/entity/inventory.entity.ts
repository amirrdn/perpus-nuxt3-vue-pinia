import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Books } from "./book.entity";

@Entity('inventory')
export class Inventories extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({name: 'book_id'})
    book_id!: number;

    @Column()
    qty!: number;

    @Column()
    price!: number;

    @Column({name: 'created_at'})
    created_at!: Date

    @Column({name: 'updated_at'})
    updated_at!: Date

    @ManyToOne(() => Books)
    @JoinColumn({name: 'book_id'})
    inv!: Books
}