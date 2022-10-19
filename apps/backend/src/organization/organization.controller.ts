import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	UseInterceptors,
	UploadedFile,
	ParseFilePipeBuilder,
	HttpStatus,
} from '@nestjs/common'
import { OrganizationService } from './organization.service'
import { CreateOrganizationDto } from './dto/create-organization.dto'
import { UpdateOrganizationDto } from './dto/update-organization.dto'
import { ConfigService } from '@nestjs/config'
import { Express } from 'express'
import { FileInterceptor } from 'src/common/interceptors/file.interceptor'
import { YupValidationPipe } from 'src/common/pipes/yup-validation.pipe'

@Controller('organization')
export class OrganizationController {
	constructor(private configService: ConfigService, private readonly organizationService: OrganizationService) {}

	@Post()
	@UseInterceptors(FileInterceptor('file'))
	async create(
		@UploadedFile(
			new ParseFilePipeBuilder().build({ errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY }),
		)
		file: Express.Multer.File,
		@Body(YupValidationPipe) body: CreateOrganizationDto,
	) {
		console.log(file)
		console.log(body)
		// return this.organizationService.create(createOrganizationDto)
	}

	@Get()
	findAll() {
		console.log(this.configService.get('aa'))
		return this.organizationService.findAll()
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		console.log(12312312)
		return this.organizationService.findOne(String(id) + 12312312)
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateOrganizationDto: UpdateOrganizationDto) {
		return this.organizationService.update(+id, updateOrganizationDto)
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.organizationService.remove(+id)
	}
}
