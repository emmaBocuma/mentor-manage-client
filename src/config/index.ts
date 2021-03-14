interface Config {
  api: string;
}

const config: Config = {
  api: process.env.REACT_APP_API as string,
};

export default config;
