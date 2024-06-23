import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Roles } from "./roles.entity";
import { Transactions } from './transaction.entity';

@Entity('student')
export class Students extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    nim!: string;

    @Column()
    major!: string;

    @Column()
    student_year!: number;

    @Column()
    password!: string;

    @Column()
    role_id!: number;

    @Column({name: 'created_at'})
    created_at!: Date

    @Column({name: 'updated_at'})
    updated_at!: Date

    @ManyToOne(() => Roles, (rl) => rl.id)
    @JoinColumn({name: 'role_id'})
    roles!: Roles;

    @OneToOne(() => Transactions, tr => tr.id, { cascade: true })
    @JoinColumn({name: 'id'})
    student_id: Transactions;

}