import { Module } from '@nestjs/common'
import { OrganizationModule } from './organization/organization.module'
import { CreditModule } from './credit/credit.module'
import { ServiceModule } from './service/service.module'
import { ConfigModule } from '@nestjs/config'
import config from 'config/config'
import { PrismaService } from './common/services/prisma.service'

@Module({
	imports: [
		OrganizationModule,
		CreditModule,
		ServiceModule,
		ConfigModule.forRoot({
			load: [config],
			isGlobal: true,
		}),
	],
	providers: [PrismaService],
})
export class AppModule {}
