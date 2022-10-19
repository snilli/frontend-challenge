import { Injectable } from '@nestjs/common'
import { CreateOrganizationDto } from './dto/create-organization.dto'
import { UpdateOrganizationDto } from './dto/update-organization.dto'

@Injectable()
export class OrganizationService {
	create(createOrganizationDto: CreateOrganizationDto) {
		console.log(createOrganizationDto)
		return 'This action adds a new organization'
	}

	findAll() {
		return `This action returns all organization`
	}

	findOne(id: string) {
		return `This action returns a #${id} organization`
	}

	update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
		console.log(updateOrganizationDto)
		return `This action updates a #${id} organization`
	}

	remove(id: number) {
		return `This action removes a #${id} organization`
	}
}
