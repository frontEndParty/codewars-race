const myLanguages = (results) => {
    return Object.keys(results).filter((x) => results[x] >= 60).sort((a, b) => results[b] - results[a]);
}
