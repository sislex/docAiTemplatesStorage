import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsArray,
  ValidateNested,
  IsIn,
  IsBoolean,
  IsOptional,
} from 'class-validator';

class TemplateKeyDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({ enum: ['string', 'number', 'date', 'boolean'] })
  @IsIn(['string', 'number', 'date', 'boolean'])
  type!: 'string' | 'number' | 'date' | 'boolean';

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  label!: string;

  @ApiProperty()
  @IsBoolean()
  required!: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  defaultValue?: string;
}

export class CreateTemplateDto {
  @ApiProperty({ description: 'Название шаблона' })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({ description: 'Описание шаблона' })
  @IsString()
  @IsNotEmpty()
  description!: string;

  @ApiProperty({ type: [TemplateKeyDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TemplateKeyDto)
  placeholders!: TemplateKeyDto[];
}
