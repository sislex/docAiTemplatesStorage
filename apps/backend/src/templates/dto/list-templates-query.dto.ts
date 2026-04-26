import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class ListTemplatesQueryDto {
  @ApiPropertyOptional({ description: 'Поисковый запрос (по названию и описанию)' })
  @IsOptional()
  @IsString()
  q?: string;
}
