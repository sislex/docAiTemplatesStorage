import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ErrorResponseDto {
  @ApiProperty({ example: 'TEMPLATE_NOT_FOUND' })
  code!: string;

  @ApiProperty({ example: 'Template not found' })
  message!: string;

  @ApiPropertyOptional({ example: 'id' })
  field?: string;

  @ApiProperty({ example: false })
  retryable!: boolean;

  @ApiProperty({ example: 'fix_input', enum: ['retry', 'fix_input', 'ask_user', 'fatal'] })
  action!: string;

  @ApiPropertyOptional({ example: 'Check the template ID and try again' })
  explain?: string;
}
