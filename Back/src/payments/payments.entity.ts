import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('Payments')
export class Payments {
  @PrimaryColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 255 })
  status: string;
}
