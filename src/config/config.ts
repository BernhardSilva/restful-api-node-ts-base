import dotenv from 'dotenv';

dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const MONGO_CLUSTER = process.env.MONGO_CLUSTER || '';
const MONGO_LINK = process.env.MONGO_LINK || '';
const MONGO_URL = `${MONGO_LINK}${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}`;

const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 1337;

export const config = {
	mongo: {
		url: MONGO_URL
	},
	server: {
		port: SERVER_PORT
	}
};
