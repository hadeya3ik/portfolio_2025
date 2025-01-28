'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { WiMoonAltFull, WiMoonFull } from "react-icons/wi";
import SelectedWorks from '@/components/SelectedWorks'

const Scene = dynamic(
  () => import("@/components/Scene"),
  {
    loading: () => (
      <div className="w-full bg-primary flex justify-center items-center">
        <h1 className="text-5xl">Hadeya Ikram</h1>
      </div>
    ),
    ssr: false,
  }
);

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [sceneColors, setSceneColors] = useState<{ BgCol: string; TextCol: string }>({
    BgCol: "#ffffff",
    TextCol: "#000000",
  });

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(savedTheme as "light" | "dark");
    document.body.classList.add("transition-colors", "duration-500", savedTheme);
    updateSceneColors(savedTheme as "light" | "dark");
  }, []);

  const rotateTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.body.classList.replace(theme, nextTheme);
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    updateSceneColors(nextTheme);
  };

  const updateSceneColors = (currentTheme: "light" | "dark") => {
    const rootStyles = getComputedStyle(document.body);
    setSceneColors({
      BgCol: rootStyles.getPropertyValue("--primary").trim(),
      TextCol: rootStyles.getPropertyValue("--primary-foreground").trim(),
    });
  };

  return (
    <main className="bg-primary text-primary-foreground">
      <NavBar
        theme={theme}
        updateTheme={rotateTheme}
      />
      <div className="relative">
        <Scene BgCol={sceneColors.BgCol} TextCol={sceneColors.TextCol} />
      </div>
      <div className='w-full flex justify-center'>
          <div className='text-right flex justify-end w-full max-w-4xl'>
            <p className='text-sm px-4 text-right self-end max-w-sm'>Designing and developing digital products. Creating experiences that feel intuitive, engaging, and impactful.</p>
            </div>
      </div>
      <div className='bg-primary h-[3rem]'>
      </div>
      <SelectedWorks/>
      <div className="w-full flex justify-center p-4 text-[#afafaf]">
        <div className="flex w-full border-t-[1px] pt-1 border-[#4c4c4c] text-sm justify-between max-w-4xl">
          <a
            href="mailto:h3ikram@uwaterloo.ca"
            className="underline underline-offset-2 hover:text-[#ffffff] transition duration-200"
          >
            h3ikram@uwaterloo.ca
          </a>
          <div className="flex gap-4">
            <a
              href="https://github.com/hadeya3ik"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[#ffffff] transition duration-200"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/hdyik"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[#ffffff] transition duration-200"
            >
              Dribbble
            </a>
          </div>
        </div>
      </div>

    </main>
  );
}

const NavBar: React.FC<{ theme: "light" | "dark"; updateTheme: () => void }> = ({
  theme,
  updateTheme,
}) => {
  return (
    <nav className="w-full flex justify-between items-center p-4">
      <h3>Hadeya Ikram</h3>
      <div className="flex items-center gap-2">
        <div
          onClick={updateTheme}
          className="cursor-pointer text-primary-foreground px-4 py-2 rounded-lg"
        >
          {theme === "dark" ? <WiMoonFull size={24} /> : <WiMoonAltFull size={24} />}
        </div>
      </div>
    </nav>
  );
};
