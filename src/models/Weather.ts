import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Weather {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public date!: Date;

    @Column()
    public temp_high!: number;

    @Column()
    public temp_low!: number;
}