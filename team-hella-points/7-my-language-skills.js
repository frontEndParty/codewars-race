function myLanguages(results) {
  return Object.keys(results)
    .filter((key) => results[key] >= 60)
    .sort((a, b) => results[b] - results[a]);
}
