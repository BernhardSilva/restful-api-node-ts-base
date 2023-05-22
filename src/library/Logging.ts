import { consoleColors } from '../utils/consoleColors';
import { isStatus200, isStatus400, isStatus500 } from '../utils/statusNumbersValidations';

export default class Logging {
	public static info = (args: any) =>
		console.log(
			isStatus500(args)
				? consoleColors.red
				: isStatus400(args)
				? consoleColors.orange
				: isStatus200(args)
				? consoleColors.green
				: consoleColors.blue,
			`${new Date().toLocaleString()} [INFO]`,
			args
		);

	public static warn = (args: any) => console.log(consoleColors.yellow, `${new Date().toLocaleString()} [WARN]`, args);

	public static error = (args: any) => console.log(consoleColors.red, `${new Date().toLocaleString()} [ERROR]`, args);
}
