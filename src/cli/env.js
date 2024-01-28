const parseEnv = () => {
    const RSVars = Object.keys(process.env)
        .filter(k => k.startsWith('RSS_'))
        .map(k => k + '=' + process.env[k])
        .join('; ');
    console.log(RSVars)
};

parseEnv();