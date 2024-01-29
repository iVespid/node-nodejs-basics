const parseArgs = () => {
    const keys = process.argv.slice(2).filter(k => k.startsWith('--'));
    const values = process.argv.slice(2).filter(k => !k.startsWith('--'));
    console.log(
        keys.map((k, i) => k.replace('--', '') + ' is ' + values[i]).join(', '))
};

parseArgs();