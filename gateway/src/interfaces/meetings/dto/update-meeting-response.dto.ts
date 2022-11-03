import { ApiProperty } from '@nestjs/swagger';
import { IMeeting } from '../meeting.interface';

export class UpdateMeetingResponseDto {
  @ApiProperty({ example: 'meeting_update_success' })
  message: string;
  @ApiProperty({
    example: {
      meeting: {
        name: 'Meeting with Alan',
        code: '123-456-789',
        description: 'Interview for Senior Software Developer position.',
        participants: ['rick@test.com', 'alan@test.com'],
        start_time: +new Date(),
        status: 'created',
        created_at: +new Date(),
        created_by: 'Rick Montaris'
      },
    },
    nullable: true,
  })
  data: {
    meeting: IMeeting;
  };
  @ApiProperty({ example: null, nullable: true })
  errors: { [key: string]: any };
}