import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const description =
    "Java·Kotlin 엔지니어를 위한 Claude와 Claude Code 실무 학습 과정";
  const socialImage = `${origin}/og.png`;

  return {
    title: {
      default: "Claude와 일하는 엔지니어",
      template: "%s · Claude와 일하는 엔지니어",
    },
    description,
    openGraph: {
      type: "website",
      locale: "ko_KR",
      title: "Claude와 일하는 엔지니어",
      description,
      images: [{ url: socialImage, width: 1714, height: 909 }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Claude와 일하는 엔지니어",
      description,
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
