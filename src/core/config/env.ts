import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
	PORT: get('PORT').default(3000).asPortNumber(),
	NODE_ENV: get('NODE_ENV').default('development').asString(),
	ACME_SUPPLIER_API_URL: get('ACME_SUPPLIER_API_URL')
		.default('https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/acme')
		.asString(),
	PAPER_SUPPLIER_API_URL: get('PAPER_SUPPLIER_API_URL')
		.default('https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/paperflies')
		.asString(),
	PATAGONIE_SUPPLIER_API_URL: get('PATAGONIE_SUPPLIER_API_URL')
		.default('https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/patagonia')
		.asString()
};
