export default function Footer() {
  const year = new Date().getUTCFullYear();
  return <footer className="mt-auto">&copy;&nbsp;{year} Raman Gupta</footer>;
}
