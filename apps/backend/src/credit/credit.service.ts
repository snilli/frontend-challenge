import { Injectable } from '@nestjs/common'
import { CreateCreditDto } from './dto/create-credit.dto'
import { UpdateCreditDto } from './dto/update-credit.dto'

@Injectable()
export class CreditService {
	create(createCreditDto: CreateCreditDto) {
		console.log(createCreditDto)
		return 'This action adds a new credit'
	}

	findAll() {
		return `This action returns all credit`
	}

	findOne(id: number) {
		return `This action returns a #${id} credit`
	}

	update(id: number, updateCreditDto: UpdateCreditDto) {
		console.log(updateCreditDto)

		return `This action updates a #${id} credit`
	}

	remove(id: number) {
		return `This action removes a #${id} credit`
	}
}
