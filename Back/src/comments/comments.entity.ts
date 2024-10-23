import { InfoUser } from "src/infoUsers/infoUsers.entity";
import { User } from "src/users/users.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity({
    name: 'comments',
})
export class Comments {
    @PrimaryGeneratedColumn('uuid')
    id: string = uuid()

    @Column({
        type: 'varchar',
    })
    comment: string;

    @Column({
        type: 'float',
        nullable: false,
    })
    rate: number;

    @Column({
        type: Date,
        nullable: false
    })
    date: Date;

    @ManyToOne(() => InfoUser, (infoUser) => infoUser.id)
    @JoinColumn({ name: 'infoUser', referencedColumnName: 'id'})
    infoUser: InfoUser;
}