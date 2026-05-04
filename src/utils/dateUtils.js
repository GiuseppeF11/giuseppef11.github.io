// Converte "MM/YYYY" o "YYYY" in un oggetto Date ordinabile.
export function parseDate(dateStr) {
  if (dateStr.includes("/")) {
    const [month, year] = dateStr.split("/");
    return new Date(`${year}-${month}-01`);
  }
  return new Date(`${dateStr}-01-01`);
}

// Ordina esperienze mettendo "In corso" per prime, poi per data di fine decrescente.
export function sortByEndDateDesc(items, inProgressValue = "In corso") {
  return [...items].sort((a, b) => {
    if (a.end === inProgressValue) return -1;
    if (b.end === inProgressValue) return 1;
    return parseDate(b.end) - parseDate(a.end);
  });
}
