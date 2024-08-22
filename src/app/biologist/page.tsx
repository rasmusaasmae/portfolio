'use client';

import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import Hands from './_components/hands';
import Head from './_components/head';
import Human, { type Section } from './_components/human';
import Torso from './_components/torso';

export default function Biologist() {
  const [pressedSection, setPressedSection] = useState<Section | null>(null);
  const [hoveredSection, setHoveredSection] = useState<Section | null>(null);

  function onPress(section: Section) {
    if (pressedSection === section) setPressedSection(null);
    else setPressedSection(section);
  }

  const selectedSection = pressedSection ?? hoveredSection;

  return (
    <main className="flex h-screen flex-row justify-center md:gap-8 md:p-4">
      <Human
        className="h-full w-auto"
        onHover={setHoveredSection}
        onPress={onPress}
      />
      <div className="hidden h-full w-[28rem] overflow-y-scroll md:block">
        <AnimatePresence mode="wait">
          {selectedSection === 'head' && <Head key="head" />}
          {selectedSection === 'torso' && <Torso key="torso" />}
          {(selectedSection === 'rightHand' ||
            selectedSection === 'leftHand') && <Hands key="hands" />}
        </AnimatePresence>
      </div>
    </main>
  );
}
