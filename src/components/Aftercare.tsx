/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Flame, Droplet, Sun, ShieldAlert, Check, RefreshCw } from 'lucide-react';

export default function Aftercare() {
  const steps = [
    {
      phase: 'Fase 1: Primeras 24 Horas',
      title: 'Protección Inicial',
      icon: <Flame className="w-5 h-5 text-red-500" />,
      instructions: [
        'Mantén el parche protector (Saniderm o film) colocado por tu artista durante el tiempo indicado (usualmente entre 4 y 24 horas).',
        'Al retirarlo, lava la zona suavemente con tus manos usando agua tibia y un jabón neutro, antibacterial y sin fragancias.',
        'Seca el tatuaje dando ligeros toques con una toalla de papel desechable limpia. Nunca frotes ni uses toallas de tela de baño.'
      ]
    },
    {
      phase: 'Fase 2: Días 2 al 7',
      title: 'Hidratación & Regeneración',
      icon: <Droplet className="w-5 h-5 text-red-500" />,
      instructions: [
        'Aplica una capa sumamente delgada de pomada recomendada (como Aquaphor o crema específica para tatuajes) de 2 a 3 veces al día.',
        'La piel debe estar hidratada pero respirar; aplicar exceso de pomada ahoga el poro y puede promover bacterias.',
        'Lava el tatuaje suavemente 2 veces al día antes de aplicar crema nueva.'
      ]
    },
    {
      phase: 'Fase 3: Días 8 al 15',
      title: 'Descamación & Picor',
      icon: <RefreshCw className="w-5 h-5 text-red-500 animate-spin-slow" />,
      instructions: [
        'La piel comenzará a pelarse como una quemadura solar leve. Es completamente normal.',
        'NO arranques las costras ni la piel suelta bajo ningún concepto. Si lo haces, removerás pigmento profundo y dejarás calvas en la pieza.',
        'Sentirás picor intenso. No te rasques. Da ligeras palmadas suaves con la mano limpia sobre la zona si el picor es inaguantable.'
      ]
    },
    {
      phase: 'Fase 4: Día 16 en Adelante',
      title: 'Protección Térmica de por Vida',
      icon: <Sun className="w-5 h-5 text-red-500" />,
      instructions: [
        'El tatuaje está sellado superficialmente pero el tejido tarda hasta 3 meses en sanar completamente en las capas profundas.',
        'Evita el sol directo sobre la pieza. Aplica protector solar SPF 50+ sin falta cada vez que te expongas al aire libre.',
        'El sol es el mayor enemigo de los pigmentos; la radiación UV desvanece las líneas finas y satura los negros.'
      ]
    }
  ];

  return (
    <div className="w-full bg-zinc-950 text-zinc-100 min-h-screen pt-28 pb-16 px-6 font-sans">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <span className="text-red-500 text-xs tracking-[0.3em] uppercase font-semibold block mb-2">Preservación del Arte</span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">GUÍA DE CUIDADOS</h1>
        <div className="w-12 h-[1px] bg-red-600 mx-auto mt-4 mb-3" />
        <p className="text-zinc-500 text-sm max-w-xl mx-auto leading-relaxed">
          El proceso de curación es el 50% del resultado final. Sigue estrictamente este protocolo clínico de sanación diseñado por nuestros residentes para garantizar la máxima nitidez y brillo en tu pieza.
        </p>
      </div>

      {/* Grid Layout containing steps and warnings */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Step cards (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-zinc-900 border border-zinc-900 p-6 flex gap-4 md:gap-6 relative">
              <div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-850 flex items-center justify-center shrink-0">
                {step.icon}
              </div>
              <div className="space-y-3 min-w-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                  <span className="text-[10px] text-red-500 font-bold uppercase tracking-widest">{step.phase}</span>
                  <h3 className="text-sm font-bold tracking-wider text-zinc-100 uppercase">{step.title}</h3>
                </div>
                <ul className="space-y-2 text-xs text-zinc-400 leading-relaxed font-sans list-disc list-inside">
                  {step.instructions.map((inst, idx) => (
                    <li key={idx} className="marker:text-red-500">{inst}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Prohibited items and fast check (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Forbidden panel */}
          <div className="bg-zinc-900 border border-zinc-900 p-6 space-y-4">
            <div className="flex items-center gap-2 text-red-500 text-xs font-semibold uppercase tracking-widest border-b border-zinc-800 pb-2">
              <ShieldAlert className="w-5 h-5 shrink-0" />
              <span>ESTRICTAMENTE PROHIBIDO</span>
            </div>

            <ul className="space-y-3 text-xs text-zinc-400 font-sans leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-red-500 shrink-0 font-bold">•</span>
                <span><strong>No rasques ni arranques las costras</strong> bajo ningún pretexto.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 shrink-0 font-bold">•</span>
                <span><strong>Evita piscinas, saunas, playas o jacuzzis</strong> durante los primeros 15 días (el agua estancada y el cloro causan infecciones graves).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 shrink-0 font-bold">•</span>
                <span><strong>No expongas la pieza al sol directo</strong> hasta que esté totalmente curado superficialmente.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 shrink-0 font-bold">•</span>
                <span><strong>Evita entrenar pesadamente o sudar en exceso</strong> sobre la zona del tatuaje por la primera semana (la fricción muscular abre las heridas).</span>
              </li>
            </ul>
          </div>

          {/* Quick FAQ summary */}
          <div className="bg-zinc-900/40 border border-zinc-900 p-6 space-y-4 text-center">
            <p className="text-xs uppercase tracking-widest text-zinc-100 font-bold">¿Tienes dudas o hinchazón inusual?</p>
            <p className="text-xs text-zinc-500 leading-relaxed font-sans">Es habitual que la zona esté inflamada y enrojecida las primeras 48 horas. Si notas secreciones raras o calor extremo, comunícate inmediatamente.</p>
            <a 
              href="https://wa.me/34600000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-zinc-950 border border-zinc-800 hover:border-red-900 text-zinc-300 hover:text-zinc-100 px-4 py-2.5 text-[10px] tracking-widest uppercase font-semibold transition"
            >
              Contactar Soporte Clínico
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
