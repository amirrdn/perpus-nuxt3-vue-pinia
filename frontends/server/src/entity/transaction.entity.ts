import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { DetailTransaction } from "./detail.entity";
import { Students } from "./students.entity";

@Entity('transaction')
export class Transactions extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    student_id!: number;

    @Column()
    loan_date!: Date;

    @Column()
    return_date!: Date;
    
    @OneToMany(() => DetailTransaction, detail => detail.transaction)
    details!: DetailTransaction[];

    @OneToOne(() => Students, user => user.student_id)
    @JoinColumn({name: 'student_id'})
    user!: Students
}