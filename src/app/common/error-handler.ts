import { NotFoundError } from './not-found-error';
import { ForbiddenError } from './forbidden-error';
import { AppError } from './app-error';

export const errorHandler = (error: AppError) => {
	if (error instanceof ForbiddenError) {
		console.log(error);
	} else if (error instanceof NotFoundError) {
		console.log(error);
	} else {
		throw error;
	}
};
