import { PartialType } from '@nestjs/mapped-types';
import { CreateVotationDto } from './create-votation.dto';

export class UpdateVotationDto extends PartialType(CreateVotationDto) {}
