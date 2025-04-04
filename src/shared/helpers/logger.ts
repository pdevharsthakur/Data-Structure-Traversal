import chalk from 'chalk';

export class Logger {
  static info(message: string, data?: unknown): void {
    console.log(`\n${chalk.cyan(message)}`);
    if (data !== undefined) {
      console.log(chalk.yellow(data));
    }
  }

  static success(message: string): void {
    console.log(`\n${chalk.bold.green('✅ ' + message)}`);
  }

  static warning(message: string): void {
    console.log(`\n${chalk.bold.yellow('⚠️ ' + message)}`);
  }

  static error(error: unknown): void {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    console.error(`\n${chalk.bold.red('❌ Error: ' + errorMessage)}`);
  }

  static logStep(step: string, message: string): void {
    console.log(`\n${chalk.magenta(step)}: ${chalk.white(message)}`);
  }

  static logState(state: {
    current: string;
    status: string;
    visited: string[];
    toBeVisited: string[];
  }): void {
    console.log(`\n${chalk.bold(state.status)}: ${chalk.yellow(state.current)}`);
    console.log(`${chalk.cyan('Visited:')} ${chalk.green(`[${state.visited.join(', ')}]`)}`);
    console.log(`${chalk.cyan('To Be Visited:')} ${chalk.magenta(`[${state.toBeVisited.join(', ')}]`)}`);
    console.log(chalk.gray('---------------------'));
  }
}
