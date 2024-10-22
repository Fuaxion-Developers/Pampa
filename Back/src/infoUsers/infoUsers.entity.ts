import { Comments } from 'src/comments/comments.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity({
  name: 'info_users',
})
export class InfoUser {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuid();

  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
  })
  first_name: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
  })
  last_name: string;

  @Column({
    type: 'varchar',
    length: 11,
    nullable: false,
    unique: true,
  })
  cuit_cuil: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  company: string;

  @Column({
    type: 'varchar',
    length: 15,
    nullable: false,
  })
  phone: string;

  @Column({
    type: 'varchar',
    length: 80,
    nullable: false,
  })
  address: string;

  @Column({
    type: 'varchar',
    length: 80,
    nullable: false,
  })
  city: string;

  @Column({
    type: 'varchar',
    length: 80,
    nullable: false,
  })
  state: string;

  @Column({
    type: 'varchar',
    length: 10,
    nullable: false,
  })
  zipCode: string;

  @OneToMany(() => Comments, (comment) => comment.infoUser)
  comments: Comments[];
}
