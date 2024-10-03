import { InfoUser } from 'src/infoUsers/infoUsers.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Roles } from './enums/roles.enum';

@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuid();

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
    select: false,
  })
  password: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  resetPasswordToken: string;

  @Column({
    type: Date,
    nullable: true,
  })
  resetPasswordExpires: Date;

  @DeleteDateColumn({
    nullable: true,
  })
  deleteDate: Date;

  @Column()
  role: Roles;

  @OneToOne(() => InfoUser)
  @JoinColumn({ name: 'info_user' })
  info_user: InfoUser | InfoUser['id'];
}
