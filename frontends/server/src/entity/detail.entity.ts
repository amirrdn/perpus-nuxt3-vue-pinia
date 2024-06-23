import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Books } from "./book.entity";
import { Transactions } from "./transaction.entity"

@Entity('detail_transaction')
export class DetailTransaction extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({name: 'transaction_id'})
    transaction_id!: number;

    @Column()
    book_id!: number;

    @Column()
    qty!: number;

    @ManyToOne(() => Books, (b) => b.id)
    @JoinColumn({ name: 'book_id'})
    books!: Books
    
    @ManyToOne(() => Transactions, transaction => transaction.details)
    @JoinColumn({name: 'transaction_id'})
    transaction!: Transactions;
}