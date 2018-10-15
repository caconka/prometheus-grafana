const bunyan = require('bunyan')
const pjson = require('../../package.json')

const PRODUCTION = process.env.NODE_ENV === 'production'
const LOCAL = !process.env.NODE_ENV

const config = {
	name: pjson.name,
	level: PRODUCTION ? 'info' : 'debug',
	streams: [
		{ stream: process.stdout }
	]
	,
	serializers: {
		err: bunyan.stdSerializers.err,
		req: bunyan.stdSerializers.req,
		res: bunyan.stdSerializers.res
	}
}

const tracerSerializer = (trace, operation, message, object) => {
	return {
		'x-request-id': trace.xRequest,
		'x-correlation-id': trace.xCorrelation,
		'x-customer-id': trace.xCustomerId,
		'x-sfid': trace.xSfId,
		operation,
		message,
		object,
	}
}

const logger = bunyan.createLogger(config)

module.exports = {
	logger,
	tracerSerializer,
}
