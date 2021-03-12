import consola from 'consola';

type Logger = {
  success(error: string): void;
  error(error: string): void;
  info(error: string): void;
};

const logger: Logger = {
  success: (msg: string) =>
    consola.success({
      message: `[app]: ${msg}`
    }),
  error: (msg: string) =>
    consola.error({
      message: `[app]: ${msg}`
    }),
  info: (msg: string) =>
    consola.info({
      message: `[app]: ${msg}`
    })
};

export default logger;
