export default function useFooter() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.toLocaleString('default', { month: 'long' });

  return `${month} ${year}`;
}
