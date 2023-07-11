import "./globals.css";

const myArray = [
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
];

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
