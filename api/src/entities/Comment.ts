import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

import is from 'utils/validation';
import { Issue, User } from '.';

@Entity()
class Comment extends BaseEntity {
  static validations = {
    body: [is.required(), is.maxLength(50000)],
  };

  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column('text')
  body: string | undefined;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date | undefined;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date | undefined;

  @ManyToOne(
    () => User,
    user => user.comments,
  )
  user: User | undefined;

  @Column('integer')
  userId: number | undefined;

  @ManyToOne(
    () => Issue,
    issue => issue.comments,
    { onDelete: 'CASCADE' },
  )
  issue: Issue | undefined;

  @Column('integer')
  issueId: number | undefined;
}

export default Comment;
