function decodeQuote(str) {
  return str
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ');
}
