import { Injectable } from '@nestjs/common'
import { CreateServiceDto } from './dto/create-service.dto'
import { UpdateServiceDto } from './dto/update-service.dto'

@Injectable()
export class ServiceService {
	create(createServiceDto: CreateServiceDto) {
		console.log(createServiceDto)
		return 'This action adds a new service'
	}

	findAll() {
		return `This action returns all service`
	}

	findOne(id: number) {
		return `This action returns a #${id} service`
	}

	update(id: number, updateServiceDto: UpdateServiceDto) {
		console.log(updateServiceDto)
		return `This action updates a #${id} service`
	}

	remove(id: number) {
		return `This action removes a #${id} service`
	}
}
