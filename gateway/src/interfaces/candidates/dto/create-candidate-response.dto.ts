import { ApiProperty } from '@nestjs/swagger';
import { ICandidate } from '../candidate.interface';

export class CreateCandidateResponseDto {
  @ApiProperty({ example: 'candidate_create_success' })
  message: string;
  @ApiProperty({
    example: {
      candidate: {
        name: 'Alan Rickman',
        contacts: {
          email: 'alan@gmail.com'
        },
        created_at: +new Date(),
        created_by: 'Rick Montaris'
      },
    },
    nullable: true,
  })
  data: {
    candidate: ICandidate;
  };
  @ApiProperty({ example: null, nullable: true })
  errors: { [key: string]: any };
}