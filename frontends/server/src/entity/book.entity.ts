import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Inventories } from "./inventory.entity";

@Entity('books')
export class Books extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column()
    creator!: string;

    @Column()
    publisher!: string;

    @Column()
    publication_year!: number;

    @Column({name: 'created_at'})
    created_at!: Date

    @Column({name: 'updated_at'})
    updated_at!: Date

    @Column()
    cover_image!: string;

    @Column()
    description!: string;

    // @ManyToOne(() => Inventories, (itm) => itm.book_id)
    // @JoinColumn({ name: 'id'})
    // inventories!: Inventories[]
    @OneToMany(() => Inventories, o => o.inv)
    inventories!: Inventories[]
}