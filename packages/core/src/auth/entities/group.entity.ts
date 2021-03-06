// 3p
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

// FoalTS
import { Permission } from './permission.entity';

@Entity()
export class Group {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 80 })
  name: string;

  @Column({ length: 100, unique: true })
  codeName: string;

  @ManyToMany(type => Permission)
  @JoinTable()
  permissions: Permission[];

}
