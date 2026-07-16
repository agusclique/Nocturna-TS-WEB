/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect, ChangeEvent, MouseEvent, TouchEvent } from 'react';
import { 
  Upload, RefreshCw, Trash2, Copy, Move, RotateCw, 
  FlipHorizontal, FlipVertical, Layers, ChevronUp, ChevronDown, Check, Download, 
  Share2, Undo, Redo, Sparkles, Sliders, Type, HelpCircle, AlertCircle
} from 'lucide-react';
import { CanvasElement, BodyTemplate, TattooDesign } from '../types';
import { TATTOO_DESIGNS } from '../data/tattoos';
import { BODY_TEMPLATES } from '../data/mockData';

export default function TattooSimulator() {
  // Canvas Elements State
  const [elements, setElements] = useState<CanvasElement[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  
  // Canvas Background State
  const [backgroundUrl, setBackgroundUrl] = useState<string>('/assets/images/regenerated_image_1784063091445.webp');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  
  // UI Tabs & Controls State
  const [activeCategory, setActiveCategory] = useState<string>('Blackwork');
  const [inkColor, setInkColor] = useState<string>('#18181b'); // Dark charcoal ink
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareUrl, setShareUrl] = useState('');
  const [showHelp, setShowHelp] = useState(false);
  
  // Undo / Redo History State
  const [history, setHistory] = useState<CanvasElement[][]>([[]]);
  const [historyIndex, setHistoryIndex] = useState<number>(0);
  
  // Dragging & Transforming Refs/States
  const canvasRef = useRef<HTMLDivElement>(null);
  const [transforming, setTransforming] = useState<'drag' | 'resize' | 'rotate' | null>(null);
  const [initialTransformState, setInitialTransformState] = useState<{
    x: number;
    y: number;
    scaleX: number;
    scaleY: number;
    rotation: number;
    mouseX: number;
    mouseY: number;
    startDistance?: number;
    startAngle?: number;
  } | null>(null);

  // Available Ink presets (Luxury studio colors)
  const inkPresets = [
    { name: 'Negro Carbón', value: '#18181b' },
    { name: 'Gris Lavado', value: '#52525b' },
    { name: 'Rojo Sangre', value: '#7f1d1d' },
    { name: 'Azul Prusia', value: '#1e3a8a' },
    { name: 'Verde Pino', value: '#14532d' },
  ];

  // Load project from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const projectData = params.get('project');
    if (projectData) {
      try {
        const decoded = JSON.parse(atob(projectData));
        if (decoded.backgroundUrl) setBackgroundUrl(decoded.backgroundUrl);
        if (decoded.elements) {
          setElements(decoded.elements);
          pushToHistory(decoded.elements);
        }
      } catch (e) {
        console.error('Error decoding project from URL', e);
      }
    }
  }, []);

  // Sync state changes with Undo/Redo stack
  const pushToHistory = (newElements: CanvasElement[]) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(JSON.parse(JSON.stringify(newElements)));
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      const prevIndex = historyIndex - 1;
      setHistoryIndex(prevIndex);
      setElements(JSON.parse(JSON.stringify(history[prevIndex])));
      setSelectedId(null);
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      const nextIndex = historyIndex + 1;
      setHistoryIndex(nextIndex);
      setElements(JSON.parse(JSON.stringify(history[nextIndex])));
      setSelectedId(null);
    }
  };

  // Add Tattoo Element to Canvas
  const addTattooToCanvas = (design: TattooDesign) => {
    const canvasWidth = canvasRef.current?.clientWidth || 500;
    const canvasHeight = canvasRef.current?.clientHeight || 500;
    
    const newElement: CanvasElement = {
      id: `elem-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      designId: design.id,
      name: design.name,
      svgPath: design.svgPath,
      viewBox: design.viewBox || '0 0 100 100',
      x: canvasWidth / 2 - 75,
      y: canvasHeight / 2 - 75,
      scaleX: 1.5,
      scaleY: 1.5,
      rotation: 0,
      opacity: 0.85,
      blendMode: 'multiply', // Default realistic tattoo blending
      blur: 0.4,
      contrast: 110,
      brightness: 90,
      color: inkColor,
      isFlipped: false,
      isFlippedVertically: false,
      zIndex: elements.length + 1
    };

    const updated = [...elements, newElement];
    setElements(updated);
    setSelectedId(newElement.id);
    pushToHistory(updated);
  };

  // Handle Custom Uploaded Tattoo
  const handleTattooUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const src = event.target?.result as string;
        const canvasWidth = canvasRef.current?.clientWidth || 500;
        const canvasHeight = canvasRef.current?.clientHeight || 500;
        
        const newElement: CanvasElement = {
          id: `elem-${Date.now()}`,
          name: file.name.replace(/\.[^/.]+$/, ""),
          src: src,
          x: canvasWidth / 2 - 75,
          y: canvasHeight / 2 - 75,
          scaleX: 1.5,
          scaleY: 1.5,
          rotation: 0,
          opacity: 0.8,
          blendMode: 'multiply',
          blur: 0.5,
          contrast: 120,
          brightness: 90,
          color: inkColor,
          isFlipped: false,
          isFlippedVertically: false,
          zIndex: elements.length + 1
        };

        const updated = [...elements, newElement];
        setElements(updated);
        setSelectedId(newElement.id);
        pushToHistory(updated);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Background Image Upload (Body canvas)
  const handleBackgroundUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const src = event.target?.result as string;
        setBackgroundUrl(src);
        setUploadedImage(src);
        setSelectedId(null);
      };
      reader.readAsDataURL(file);
    }
  };



  // Update canvas element properties
  const updateElementProperty = (id: string, property: keyof CanvasElement, value: any, skipHistory = false) => {
    const updated = elements.map(el => {
      if (el.id === id) {
        return { ...el, [property]: value };
      }
      return el;
    });
    setElements(updated);
    if (!skipHistory) {
      pushToHistory(updated);
    }
  };

  // Snaps element to center of viewport
  const snapToCenter = () => {
    if (!selectedId || !canvasRef.current) return;
    const canvasWidth = canvasRef.current.clientWidth;
    const canvasHeight = canvasRef.current.clientHeight;
    const elem = elements.find(el => el.id === selectedId);
    if (elem) {
      updateElementProperty(selectedId, 'x', canvasWidth / 2 - 75);
      updateElementProperty(selectedId, 'y', canvasHeight / 2 - 75);
    }
  };

  // Duplicate selected element
  const duplicateSelected = () => {
    if (!selectedId) return;
    const elem = elements.find(el => el.id === selectedId);
    if (elem) {
      const duplicated: CanvasElement = {
        ...JSON.parse(JSON.stringify(elem)),
        id: `elem-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        x: elem.x + 20,
        y: elem.y + 20,
        zIndex: elements.length + 1
      };
      const updated = [...elements, duplicated];
      setElements(updated);
      setSelectedId(duplicated.id);
      pushToHistory(updated);
    }
  };

  // Delete selected element
  const deleteSelected = () => {
    if (!selectedId) return;
    const updated = elements.filter(el => el.id !== selectedId);
    setElements(updated);
    setSelectedId(null);
    pushToHistory(updated);
  };

  // Move element order forward or backward
  const moveZIndex = (direction: 'up' | 'down') => {
    if (!selectedId) return;
    const currentIndex = elements.findIndex(el => el.id === selectedId);
    if (currentIndex === -1) return;

    const newElements = [...elements];
    if (direction === 'up' && currentIndex < elements.length - 1) {
      const temp = newElements[currentIndex];
      newElements[currentIndex] = newElements[currentIndex + 1];
      newElements[currentIndex + 1] = temp;
    } else if (direction === 'down' && currentIndex > 0) {
      const temp = newElements[currentIndex];
      newElements[currentIndex] = newElements[currentIndex - 1];
      newElements[currentIndex - 1] = temp;
    }

    // Re-index Z levels
    const finalElements = newElements.map((el, i) => ({ ...el, zIndex: i + 1 }));
    setElements(finalElements);
    pushToHistory(finalElements);
  };

  // Horizontally flip tattoo
  const flipHorizontal = () => {
    if (!selectedId) return;
    const elem = elements.find(el => el.id === selectedId);
    if (elem) {
      updateElementProperty(selectedId, 'isFlipped', !elem.isFlipped);
    }
  };

  // Vertically flip tattoo
  const flipVertical = () => {
    if (!selectedId) return;
    const elem = elements.find(el => el.id === selectedId);
    if (elem) {
      updateElementProperty(selectedId, 'isFlippedVertically', !elem.isFlippedVertically);
    }
  };

  // Dragging & Resizing Math Handlers
  const handleCanvasMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    const isCanvasBg = e.target === canvasRef.current || (e.target as HTMLElement).classList.contains('bg-checkerboard') || (e.target as HTMLElement).tagName === 'IMG';
    if (isCanvasBg) {
      setSelectedId(null);
    }
  };

  const startTransform = (
    e: MouseEvent | TouchEvent, 
    elemId: string, 
    type: 'drag' | 'resize' | 'rotate'
  ) => {
    const isTouch = 'touches' in e && e.touches && e.touches.length > 0;
    if (!isTouch || e.touches.length === 1) {
      e.stopPropagation();
    }
    setSelectedId(elemId);
    const elem = elements.find(el => el.id === elemId);
    if (!elem) return;

    const clientX = isTouch ? e.touches[0].clientX : (e as any).clientX;
    const clientY = isTouch ? e.touches[0].clientY : (e as any).clientY;

    const rect = canvasRef.current?.getBoundingClientRect();
    const localX = clientX - (rect?.left || 0);
    const localY = clientY - (rect?.top || 0);
    const startDistance = Math.hypot(localX - (elem.x + 75), localY - (elem.y + 75));
    const startAngle = Math.atan2(localY - (elem.y + 75), localX - (elem.x + 75)) * 180 / Math.PI;

    setTransforming(type);
    setInitialTransformState({
      x: elem.x,
      y: elem.y,
      scaleX: elem.scaleX,
      scaleY: elem.scaleY,
      rotation: elem.rotation,
      mouseX: clientX,
      mouseY: clientY,
      startDistance,
      startAngle
    });
  };

  const handleTransformMove = (e: MouseEvent | TouchEvent) => {
    if (!transforming || !selectedId || !initialTransformState) return;

    // Prevent default touch scrolling when dragging/transforming on touch devices
    if ('touches' in e && e.cancelable) {
      e.preventDefault();
    }

    const isTouch = 'touches' in e && e.touches && e.touches.length > 0;
    const clientX = isTouch ? e.touches[0].clientX : (e as any).clientX;
    const clientY = isTouch ? e.touches[0].clientY : (e as any).clientY;

    const deltaX = clientX - initialTransformState.mouseX;
    const deltaY = clientY - initialTransformState.mouseY;

    if (transforming === 'drag') {
      updateElementProperty(
        selectedId, 
        'x', 
        initialTransformState.x + deltaX, 
        true
      );
      updateElementProperty(
        selectedId, 
        'y', 
        initialTransformState.y + deltaY, 
        true
      );
    } else if (transforming === 'resize') {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (rect) {
        const localX = clientX - rect.left;
        const localY = clientY - rect.top;
        const activeElement = elements.find(el => el.id === selectedId);
        if (activeElement) {
          const currentDistance = Math.hypot(localX - (initialTransformState.x + 75), localY - (initialTransformState.y + 75));
          const startDistance = initialTransformState.startDistance || 1;
          const ratio = currentDistance / (startDistance || 1);
          
          // No arbitrary limits - scale down to 0.01 and up to 100 freely
          const newScaleX = Math.max(0.01, Math.min(100, initialTransformState.scaleX * ratio));
          const newScaleY = Math.max(0.01, Math.min(100, initialTransformState.scaleY * ratio));
          
          updateElementProperty(selectedId, 'scaleX', newScaleX, true);
          updateElementProperty(selectedId, 'scaleY', newScaleY, true);
        }
      }
    } else if (transforming === 'rotate') {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (rect) {
        const localX = clientX - rect.left;
        const localY = clientY - rect.top;
        const activeElement = elements.find(el => el.id === selectedId);
        if (activeElement) {
          const currentAngle = Math.atan2(localY - (initialTransformState.y + 75), localX - (initialTransformState.x + 75)) * 180 / Math.PI;
          const startAngle = initialTransformState.startAngle || 0;
          const angleDiff = currentAngle - startAngle;
          const newRotation = (initialTransformState.rotation + angleDiff) % 360;
          
          updateElementProperty(selectedId, 'rotation', Math.round(newRotation), true);
        }
      }
    }
  };

  const endTransform = () => {
    if (transforming) {
      setTransforming(null);
      setInitialTransformState(null);
      pushToHistory(elements);
    }
  };

  useEffect(() => {
    const handleMove = (e: MouseEvent) => handleTransformMove(e);
    const handleTouchMove = (e: TouchEvent) => handleTransformMove(e);
    const handleUp = () => endTransform();

    if (transforming) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleUp);
    };
  }, [transforming, selectedId, initialTransformState, elements]);

  // Mobile multi-touch pinch to scale & rotate helper
  const handleTouchStartCanvas = (e: TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 2 && selectedId) {
      const p1 = e.touches[0];
      const p2 = e.touches[1];
      const dist = Math.hypot(p1.clientX - p2.clientX, p1.clientY - p2.clientY);
      const angle = Math.atan2(p1.clientY - p2.clientY, p1.clientX - p2.clientX) * 180 / Math.PI;
      
      const elem = elements.find(el => el.id === selectedId);
      if (elem) {
        setInitialTransformState({
          x: elem.x,
          y: elem.y,
          scaleX: elem.scaleX,
          scaleY: elem.scaleY,
          rotation: elem.rotation,
          mouseX: dist, // Store initial touch distance in mouseX
          mouseY: angle // Store initial angle in mouseY
        });
        setTransforming('resize'); // Treat as combined resize & rotate on mobile pinch
      }
    }
  };

  const handleTouchMoveCanvas = (e: TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 2 && initialTransformState && selectedId) {
      e.preventDefault();
      const p1 = e.touches[0];
      const p2 = e.touches[1];
      const dist = Math.hypot(p1.clientX - p2.clientX, p1.clientY - p2.clientY);
      const angle = Math.atan2(p1.clientY - p2.clientY, p1.clientX - p2.clientX) * 180 / Math.PI;
      
      const distRatio = dist / initialTransformState.mouseX;
      const angleDiff = angle - initialTransformState.mouseY;

      const newScaleX = Math.max(0.01, initialTransformState.scaleX * distRatio);
      const newScaleY = Math.max(0.01, initialTransformState.scaleY * distRatio);
      const newRotation = Math.round((initialTransformState.rotation + angleDiff) % 360);

      const updated = elements.map(el => {
        if (el.id === selectedId) {
          return {
            ...el,
            scaleX: newScaleX,
            scaleY: newScaleY,
            rotation: newRotation
          };
        }
        return el;
      });
      setElements(updated);
    }
  };

  // Share project URL generator
  const generateShareLink = () => {
    const projectData = {
      backgroundUrl,
      elements: elements.map(el => ({ ...el, src: undefined })) // Avoid huge Base64 inside sharing URLs
    };
    const base64 = btoa(JSON.stringify(projectData));
    const url = `${window.location.origin}${window.location.pathname}?project=${base64}`;
    setShareUrl(url);
    setShowShareModal(true);
  };

  const copyShareLink = () => {
    navigator.clipboard.writeText(shareUrl);
    alert('¡Enlace de simulación copiado al portapapeles!');
  };

  // Advanced Exporter to PNG/JPG
  const exportMockup = (format: 'png' | 'jpg') => {
    const canvasElement = document.createElement('canvas');
    const bgImg = new Image();
    bgImg.crossOrigin = 'anonymous';
    bgImg.src = backgroundUrl;

    bgImg.onload = () => {
      canvasElement.width = bgImg.naturalWidth;
      canvasElement.height = bgImg.naturalHeight;
      const ctx = canvasElement.getContext('2d');
      if (!ctx) return;

      // Determine ratio between container visual size and natural background image size
      const containerWidth = canvasRef.current?.clientWidth || 500;
      const containerHeight = canvasRef.current?.clientHeight || 500;
      
      const scaleXRatio = canvasElement.width / containerWidth;
      const scaleYRatio = canvasElement.height / containerHeight;

      // Draw background stably at full size
      ctx.drawImage(bgImg, 0, 0, canvasElement.width, canvasElement.height);

      // Sort elements by zIndex and draw them
      const sortedElements = [...elements].sort((a, b) => a.zIndex - b.zIndex);

      let loadedCount = 0;
      if (sortedElements.length === 0) {
        triggerDownload();
        return;
      }

      sortedElements.forEach(elem => {
        const drawElemOnCanvas = () => {
          ctx.save();

          // Scale element coordinates to fit original image size
          const elemX = (elem.x + 75) * scaleXRatio;
          const elemY = (elem.y + 75) * scaleYRatio;
          const elemWidth = 150 * elem.scaleX * scaleXRatio;
          const elemHeight = 150 * elem.scaleY * scaleYRatio;

          // Set Blend Modes
          if (elem.blendMode === 'multiply') ctx.globalCompositeOperation = 'multiply';
          else if (elem.blendMode === 'overlay') ctx.globalCompositeOperation = 'overlay';
          else if (elem.blendMode === 'soft-light') ctx.globalCompositeOperation = 'soft-light';
          else ctx.globalCompositeOperation = 'source-over';

          // Set Opacity
          ctx.globalAlpha = elem.opacity;

          // Set Filters (Approximate browser filter rendering)
          const filterParts = [];
          if (elem.blur > 0) filterParts.push(`blur(${elem.blur * scaleXRatio}px)`);
          if (elem.contrast !== 100) filterParts.push(`contrast(${elem.contrast}%)`);
          if (elem.brightness !== 100) filterParts.push(`brightness(${elem.brightness}%)`);
          if (filterParts.length > 0) ctx.filter = filterParts.join(' ');

          // Translate, Rotate and Scale drawing focus point
          ctx.translate(elemX, elemY);
          ctx.rotate((elem.rotation * Math.PI) / 180);
          if (elem.isFlipped) ctx.scale(-1, 1);
          if (elem.isFlippedVertically) ctx.scale(1, -1);

          if (elem.svgPath) {
            // Draw SVG paths onto canvas
            const path = new Path2D(elem.svgPath);
            ctx.fillStyle = elem.color;
            ctx.translate(-elemWidth / 2, -elemHeight / 2);
            
            // Scaler to fit bounding box
            ctx.scale(elemWidth / 100, elemHeight / 150);
            ctx.fill(path);
          } else if (elem.src) {
            // Draw uploaded custom transparent image
            const customImg = new Image();
            customImg.src = elem.src;
            ctx.drawImage(customImg, -elemWidth / 2, -elemHeight / 2, elemWidth, elemHeight);
          }

          ctx.restore();
          loadedCount++;

          if (loadedCount === sortedElements.length) {
            triggerDownload();
          }
        };

        if (elem.svgPath) {
          drawElemOnCanvas();
        } else if (elem.src) {
          const img = new Image();
          img.src = elem.src;
          img.onload = drawElemOnCanvas;
        }
      });

      function triggerDownload() {
        const mimeType = format === 'png' ? 'image/png' : 'image/jpeg';
        const url = canvasElement.toDataURL(mimeType, 0.95);
        const link = document.createElement('a');
        link.download = `nocturna-simulacion-${Date.now()}.${format}`;
        link.href = url;
        link.click();
      }
    };
  };

  const activeElement = elements.find(el => el.id === selectedId);

  return (
    <div className="w-full bg-zinc-950 text-zinc-100 min-h-screen pt-28 pb-16 px-4 md:px-8 font-sans">
      {/* Title & Concept Header */}
      <div className="max-w-7xl mx-auto mb-8 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-red-500 text-xs tracking-[0.3em] uppercase font-semibold block mb-2">Simulación Aumentada</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">SIMULADOR DE TATUAJES</h1>
          <p className="text-zinc-500 text-sm mt-2 max-w-xl">
            Visualiza tu próxima obra sobre la piel. Sube tu foto o utiliza nuestros modelos de estudio. Ajusta sombras, opacidad, escalas y perspectivas realistas.
          </p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <button 
            onClick={() => setShowHelp(!showHelp)}
            className="flex items-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 px-4 py-2 text-xs tracking-wider uppercase font-semibold transition"
          >
            <HelpCircle className="w-4 h-4 text-red-500" />
            Guía de Uso
          </button>
          <button
            onClick={generateShareLink}
            className="flex items-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 px-4 py-2 text-xs tracking-wider uppercase font-semibold transition"
          >
            <Share2 className="w-4 h-4 text-red-500" />
            Compartir Proyecto
          </button>
        </div>
      </div>

      {/* Help Banner Guide */}
      {showHelp && (
        <div className="max-w-7xl mx-auto mb-8 bg-zinc-900/50 border border-zinc-800 p-6 flex gap-4 animate-fade-in relative">
          <button onClick={() => setShowHelp(false)} className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-100">&times;</button>
          <AlertCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
          <div className="text-sm space-y-2">
            <h4 className="font-semibold text-zinc-100 tracking-wider uppercase">Cómo utilizar el simulador interactivo:</h4>
            <ul className="list-disc list-inside text-zinc-400 space-y-1">
              <li><strong>Paso 1:</strong> Selecciona un modelo de lienzo corporal o sube tu propia foto de brazo, pierna, etc.</li>
              <li><strong>Paso 2:</strong> Haz clic en cualquier diseño del catálogo o sube un boceto personalizado.</li>
              <li><strong>Paso 3:</strong> Selecciona el tatuaje sobre el lienzo para activarlo. Arrástralo para posicionarlo.</li>
              <li><strong>Paso 4:</strong> Utiliza el controlador flotante para rotar, escalar, duplicar o ajustar filtros avanzados.</li>
              <li><strong>Paso 5:</strong> Modifica la opacidad, contraste y el <strong>Modo de Mezcla</strong> (recomendamos Multiplicar para pieles claras y Luz Suave para iluminar).</li>
              <li><strong>Paso 6:</strong> Descarga la simulación final o genera un enlace para reanudar luego.</li>
            </ul>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LEFT COLUMN: Controls, Upload, Templates (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Canvas Source Panel */}
          <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-none">
            <h3 className="text-sm font-bold tracking-widest uppercase text-zinc-100 mb-4 border-b border-zinc-800 pb-2">
              1. Lienzo Corporal
            </h3>
            
            {/* Upload buttons */}
            <div className="mb-4">
              <label className="flex items-center justify-center gap-2 p-3.5 bg-zinc-950 border border-zinc-800 hover:border-red-950 hover:bg-red-950/5 cursor-pointer transition text-center w-full">
                <Upload className="w-4.5 h-4.5 text-red-500 animate-pulse" />
                <span className="text-xs font-semibold tracking-wider uppercase">Subir tu propia foto</span>
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleBackgroundUpload} 
                />
              </label>
            </div>

            {/* Default Studio Templates */}
            <p className="text-zinc-500 text-[11px] uppercase tracking-wider mb-2 font-semibold">Modelos del Estudio:</p>
            <div className="grid grid-cols-3 gap-2">
              {BODY_TEMPLATES.map(temp => (
                <button
                  key={temp.id}
                  onClick={() => {
                    setBackgroundUrl(temp.imageUrl);
                    setSelectedId(null);
                  }}
                  className={`relative aspect-square border overflow-hidden group transition ${
                    backgroundUrl === temp.imageUrl
                      ? 'border-red-500 scale-[0.98]' 
                      : 'border-zinc-800 hover:border-zinc-500'
                  }`}
                >
                  <img 
                    src={temp.imageUrl} 
                    alt={temp.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-black/75 p-1 text-[9px] text-center tracking-wide font-sans text-zinc-300">
                    {temp.name.split(' ')[0]}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Edit Panel (Conditional on selection) */}
          {activeElement ? (
            <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-none animate-fade-in">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-4">
                <h3 className="text-sm font-bold tracking-widest uppercase text-red-500">
                  2. Edición de Pieza
                </h3>
                <span className="text-[10px] bg-zinc-950 px-2 py-0.5 text-zinc-500 uppercase tracking-widest">
                  Activa
                </span>
              </div>

              <p className="text-xs text-zinc-400 font-medium mb-4 italic truncate">
                &ldquo;{activeElement.name}&rdquo;
              </p>

              {/* Ink Color Selector */}
              {activeElement.svgPath && (
                <div className="mb-4">
                  <span className="text-zinc-400 text-xs tracking-wider uppercase block mb-2">Color del Pigmento:</span>
                  <div className="flex gap-2">
                    {inkPresets.map(preset => (
                      <button
                        key={preset.value}
                        onClick={() => updateElementProperty(activeElement.id, 'color', preset.value)}
                        className={`w-8 h-8 border transition flex items-center justify-center ${
                          activeElement.color === preset.value ? 'border-red-500 scale-105' : 'border-zinc-800'
                        }`}
                        style={{ backgroundColor: preset.value }}
                        title={preset.name}
                      >
                        {activeElement.color === preset.value && (
                          <Check className="w-4 h-4 text-zinc-100 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Realism Blend Modes */}
              <div className="mb-4">
                <label className="text-zinc-400 text-xs tracking-wider uppercase block mb-1">
                  Integración (Modo de Mezcla):
                </label>
                <select
                  value={activeElement.blendMode}
                  onChange={(e) => updateElementProperty(activeElement.id, 'blendMode', e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 text-zinc-300 p-2 text-xs uppercase tracking-widest focus:outline-none focus:border-red-800"
                >
                  <option value="normal">Normal (Saturado)</option>
                  <option value="multiply">Multiplicar (Fusión de Piel)</option>
                  <option value="overlay">Superponer (Iluminado)</option>
                  <option value="soft-light">Luz Suave (Natural sutil)</option>
                </select>
              </div>

              {/* Adjustment Sliders */}
              <div className="space-y-4">
                {/* Opacity */}
                <div>
                  <div className="flex justify-between text-xs tracking-wide text-zinc-400 mb-1">
                    <span>Opacidad</span>
                    <span>{Math.round(activeElement.opacity * 100)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.1"
                    max="1"
                    step="0.05"
                    value={activeElement.opacity}
                    onChange={(e) => updateElementProperty(activeElement.id, 'opacity', parseFloat(e.target.value))}
                    className="w-full h-1 bg-zinc-950 rounded-lg appearance-none cursor-pointer accent-red-600"
                  />
                </div>

                {/* Blur (Skin texture bleed) */}
                <div>
                  <div className="flex justify-between text-xs tracking-wide text-zinc-400 mb-1">
                    <span>Expansión de Tinta (Blur)</span>
                    <span>{activeElement.blur.toFixed(1)}px</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="3"
                    step="0.1"
                    value={activeElement.blur}
                    onChange={(e) => updateElementProperty(activeElement.id, 'blur', parseFloat(e.target.value))}
                    className="w-full h-1 bg-zinc-950 rounded-lg appearance-none cursor-pointer accent-red-600"
                  />
                </div>

                {/* Contrast */}
                <div>
                  <div className="flex justify-between text-xs tracking-wide text-zinc-400 mb-1">
                    <span>Contraste de Piel</span>
                    <span>{activeElement.contrast}%</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="180"
                    step="5"
                    value={activeElement.contrast}
                    onChange={(e) => updateElementProperty(activeElement.id, 'contrast', parseInt(e.target.value))}
                    className="w-full h-1 bg-zinc-950 rounded-lg appearance-none cursor-pointer accent-red-600"
                  />
                </div>

                {/* Brightness */}
                <div>
                  <div className="flex justify-between text-xs tracking-wide text-zinc-400 mb-1">
                    <span>Brillo / Iluminación</span>
                    <span>{activeElement.brightness}%</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="150"
                    step="5"
                    value={activeElement.brightness}
                    onChange={(e) => updateElementProperty(activeElement.id, 'brightness', parseInt(e.target.value))}
                    className="w-full h-1 bg-zinc-950 rounded-lg appearance-none cursor-pointer accent-red-600"
                  />
                </div>

                {/* Rotación de Pieza */}
                <div>
                  <div className="flex justify-between text-xs tracking-wide text-zinc-400 mb-1">
                    <span>Rotación de Pieza</span>
                    <span>{activeElement.rotation}°</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    step="1"
                    value={activeElement.rotation}
                    onChange={(e) => updateElementProperty(activeElement.id, 'rotation', parseInt(e.target.value))}
                    className="w-full h-1 bg-zinc-950 rounded-lg appearance-none cursor-pointer accent-red-600"
                  />
                </div>

                {/* Tamaño / Escala de Pieza */}
                <div>
                  <div className="flex justify-between text-xs tracking-wide text-zinc-400 mb-1">
                    <span>Tamaño de Pieza</span>
                    <span>{activeElement.scaleX.toFixed(2)}x</span>
                  </div>
                  <input
                    type="range"
                    min="0.1"
                    max="5.0"
                    step="0.05"
                    value={activeElement.scaleX}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value);
                      updateElementProperty(activeElement.id, 'scaleX', val);
                      updateElementProperty(activeElement.id, 'scaleY', val);
                    }}
                    className="w-full h-1 bg-zinc-950 rounded-lg appearance-none cursor-pointer accent-red-600"
                  />
                </div>

                {/* Posición Manual de Pieza */}
                <div>
                  <span className="text-zinc-400 text-xs tracking-wider uppercase block mb-1">
                    Posición Manual de Pieza:
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="flex justify-between text-[10px] text-zinc-500 mb-0.5">
                        <span>Horiz. (X)</span>
                        <span>{Math.round(activeElement.x)}px</span>
                      </div>
                      <input
                        type="range"
                        min="-150"
                        max={canvasRef.current ? canvasRef.current.clientWidth : 500}
                        step="1"
                        value={activeElement.x}
                        onChange={(e) => updateElementProperty(activeElement.id, 'x', parseInt(e.target.value))}
                        className="w-full h-1 bg-zinc-950 rounded-lg appearance-none cursor-pointer accent-red-600"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between text-[10px] text-zinc-500 mb-0.5">
                        <span>Vert. (Y)</span>
                        <span>{Math.round(activeElement.y)}px</span>
                      </div>
                      <input
                        type="range"
                        min="-150"
                        max={canvasRef.current ? canvasRef.current.clientHeight : 500}
                        step="1"
                        value={activeElement.y}
                        onChange={(e) => updateElementProperty(activeElement.id, 'y', parseInt(e.target.value))}
                        className="w-full h-1 bg-zinc-950 rounded-lg appearance-none cursor-pointer accent-red-600"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Manipulation quick-actions */}
              <div className="grid grid-cols-2 gap-2 mt-5 pt-4 border-t border-zinc-800">
                <button
                  onClick={flipHorizontal}
                  className="flex items-center justify-center gap-1.5 bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 p-2 text-[11px] uppercase tracking-wider font-semibold text-zinc-300"
                >
                  <FlipHorizontal className="w-3.5 h-3.5 text-red-500" /> Voltear H
                </button>
                <button
                  onClick={flipVertical}
                  className="flex items-center justify-center gap-1.5 bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 p-2 text-[11px] uppercase tracking-wider font-semibold text-zinc-300"
                >
                  <FlipVertical className="w-3.5 h-3.5 text-red-500" /> Voltear V
                </button>
                <button
                  onClick={duplicateSelected}
                  className="flex items-center justify-center gap-1.5 bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 p-2 text-[11px] uppercase tracking-wider font-semibold text-zinc-300"
                >
                  <Copy className="w-3.5 h-3.5" /> Duplicar
                </button>
                <button
                  onClick={() => moveZIndex('up')}
                  className="flex items-center justify-center gap-1.5 bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 p-2 text-[11px] uppercase tracking-wider font-semibold text-zinc-300"
                >
                  <Layers className="w-3.5 h-3.5" /> Traer Frente
                </button>
                <button
                  onClick={() => moveZIndex('down')}
                  className="flex items-center justify-center gap-1.5 bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 p-2 text-[11px] uppercase tracking-wider font-semibold text-zinc-300"
                >
                  <Layers className="w-3.5 h-3.5" /> Enviar Fondo
                </button>
                <button
                  onClick={snapToCenter}
                  className="flex items-center justify-center gap-1.5 bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 p-2 text-[11px] uppercase tracking-wider font-semibold text-zinc-300"
                >
                  Centrar
                </button>
              </div>

              <div className="mt-2">
                <button
                  onClick={deleteSelected}
                  className="flex w-full items-center justify-center gap-1.5 bg-red-950/20 hover:bg-red-950/40 border border-red-900/30 hover:border-red-900/60 p-2.5 text-[11px] uppercase tracking-wider font-semibold text-red-500 shadow-md transition"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Eliminar Pieza
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-zinc-900/40 border border-zinc-900 p-6 rounded-none text-center text-zinc-600">
              <Sliders className="w-8 h-8 mx-auto mb-2 text-zinc-700" />
              <p className="text-xs uppercase tracking-widest">Selecciona un tatuaje sobre el cuerpo para habilitar los ajustes avanzados de iluminación y deformación.</p>
            </div>
          )}
        </div>

        {/* MIDDLE COLUMN: Interactive Simulation Canvas Workspace (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4 items-center">
          {/* History & Workspace Status bar */}
          <div className="w-full flex items-center justify-between bg-zinc-900 border border-zinc-800 px-4 py-2">
            <div className="flex gap-2">
              <button
                onClick={handleUndo}
                disabled={historyIndex <= 0}
                className="p-1.5 text-zinc-400 hover:text-zinc-100 disabled:text-zinc-700 disabled:cursor-not-allowed transition"
                title="Deshacer"
              >
                <Undo className="w-4 h-4" />
              </button>
              <button
                onClick={handleRedo}
                disabled={historyIndex >= history.length - 1}
                className="p-1.5 text-zinc-400 hover:text-zinc-100 disabled:text-zinc-700 disabled:cursor-not-allowed transition"
                title="Rehacer"
              >
                <Redo className="w-4 h-4" />
              </button>
            </div>
            <span className="text-[10px] text-zinc-500 tracking-widest uppercase font-mono">
              Capas: {elements.length} | Z-Order
            </span>
            <button
              onClick={() => {
                setElements([]);
                setSelectedId(null);
                pushToHistory([]);
              }}
              className="text-[10px] text-red-500/80 hover:text-red-500 tracking-widest uppercase font-semibold cursor-pointer"
            >
              Reiniciar
            </button>
          </div>

          {/* Core Interactive Canvas Workspace */}
          <div 
            ref={canvasRef}
            onClick={handleCanvasMouseDown}
            onTouchStart={handleTouchStartCanvas}
            onTouchMove={handleTouchMoveCanvas}
            onTouchEnd={endTransform}
            className="relative w-full aspect-[3/4] bg-zinc-950 border border-zinc-800 overflow-hidden shadow-2xl flex items-center justify-center select-none cursor-crosshair bg-checkerboard"
            style={{
              backgroundImage: 'radial-gradient(#1c1917 1px, transparent 1px)',
              backgroundSize: '16px 16px'
            }}
          >
            {/* The Skin/Body Canvas background */}
            <img 
              src={backgroundUrl} 
              alt="Lienzo corporal" 
              className="absolute w-full h-full object-cover pointer-events-none origin-center"
              referrerPolicy="no-referrer"
            />

            {/* Dynamic Tattoo Elements Overlay */}
            {elements.map((elem) => {
              const isSelected = selectedId === elem.id;
              
              // SVG filter string creation for dynamic realism rendering
              const filterStyles = {
                filter: `blur(${elem.blur}px) contrast(${elem.contrast}%) brightness(${elem.brightness}%)`,
                opacity: elem.opacity,
                mixBlendMode: elem.blendMode as any,
                transform: `scaleX(${elem.isFlipped ? -1 : 1}) scaleY(${elem.isFlippedVertically ? -1 : 1})`,
                color: elem.color
              };

              return (
                <div
                  key={elem.id}
                  onTouchStart={(e) => startTransform(e, elem.id, 'drag')}
                  onMouseDown={(e) => startTransform(e, elem.id, 'drag')}
                  className={`absolute w-[150px] h-[150px] cursor-grab active:cursor-grabbing transition-shadow ${
                    isSelected ? 'ring-1 ring-red-500/50' : 'hover:ring-1 hover:ring-zinc-600/30'
                  }`}
                  style={{
                    left: `${elem.x}px`,
                    top: `${elem.y}px`,
                    width: '150px',
                    height: '150px',
                    transform: `rotate(${elem.rotation}deg) scale(${elem.scaleX}, ${elem.scaleY})`,
                    zIndex: elem.zIndex
                  }}
                >
                  {/* The Tattoo Graphic itself */}
                  <div 
                    className="w-full h-full flex items-center justify-center"
                    style={filterStyles}
                  >
                    {elem.svgPath ? (
                      <svg 
                        viewBox={elem.viewBox} 
                        className="w-full h-full select-none pointer-events-none"
                      >
                        <path 
                          d={elem.svgPath} 
                          fill="currentColor" 
                        />
                      </svg>
                    ) : (
                      <img 
                        src={elem.src} 
                        alt={elem.name} 
                        className="w-full h-full object-contain select-none pointer-events-none"
                        referrerPolicy="no-referrer"
                      />
                    )}
                  </div>

                  {/* Active Selection Transform Handles (Rendered only on active elements) */}
                  {isSelected && (
                    <>
                      {/* Bounding box dashes */}
                      <div className="absolute inset-0 border border-dashed border-red-500/60 pointer-events-none" />

                      {/* Top Rotate Handle */}
                      <div 
                        onMouseDown={(e) => startTransform(e, elem.id, 'rotate')}
                        onTouchStart={(e) => startTransform(e, elem.id, 'rotate')}
                        className="absolute -top-7 left-1/2 -translate-x-1/2 w-5 h-5 bg-zinc-900 border border-red-500 rounded-full flex items-center justify-center cursor-alias hover:scale-110 transition shadow-md"
                        title="Rotar"
                      >
                        <RotateCw className="w-2.5 h-2.5 text-red-500" />
                      </div>

                      {/* Top-Left Corner Resize Handle */}
                      <div 
                        onMouseDown={(e) => startTransform(e, elem.id, 'resize')}
                        onTouchStart={(e) => startTransform(e, elem.id, 'resize')}
                        className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-zinc-900 border border-red-500 cursor-nwse-resize hover:scale-110 transition shadow-sm"
                        title="Escalar"
                      />

                      {/* Top-Right Corner Resize Handle */}
                      <div 
                        onMouseDown={(e) => startTransform(e, elem.id, 'resize')}
                        onTouchStart={(e) => startTransform(e, elem.id, 'resize')}
                        className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-zinc-900 border border-red-500 cursor-nesw-resize hover:scale-110 transition shadow-sm"
                        title="Escalar"
                      />

                      {/* Bottom-Left Corner Resize Handle */}
                      <div 
                        onMouseDown={(e) => startTransform(e, elem.id, 'resize')}
                        onTouchStart={(e) => startTransform(e, elem.id, 'resize')}
                        className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-zinc-900 border border-red-500 cursor-nesw-resize hover:scale-110 transition shadow-sm"
                        title="Escalar"
                      />

                      {/* Bottom-Right Corner Resize Handle (Symmetric & Rich with Move icon) */}
                      <div 
                        onMouseDown={(e) => startTransform(e, elem.id, 'resize')}
                        onTouchStart={(e) => startTransform(e, elem.id, 'resize')}
                        className="absolute -bottom-2 -right-2 w-5 h-5 bg-red-600 border border-zinc-100 rounded-none flex items-center justify-center cursor-se-resize hover:scale-110 transition shadow-lg"
                        title="Escalar"
                      >
                        <Move className="w-2.5 h-2.5 text-zinc-100" />
                      </div>

                      {/* Delete Quick Handle (top right) */}
                      <button
                        onClick={(e) => { e.stopPropagation(); deleteSelected(); }}
                        className="absolute -top-3 -right-3 w-5 h-5 bg-zinc-900 hover:bg-red-900 border border-zinc-800 rounded-full flex items-center justify-center cursor-pointer transition shadow-md"
                        title="Eliminar"
                      >
                        <Trash2 className="w-2.5 h-2.5 text-red-500 hover:text-zinc-100" />
                      </button>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* Export / Download Buttons Panel */}
          <div className="w-full grid grid-cols-2 gap-3 mt-2">
            <button
              onClick={() => exportMockup('png')}
              className="flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-red-950 hover:bg-red-950/10 text-zinc-100 py-3 text-xs tracking-widest uppercase font-semibold transition cursor-pointer"
            >
              <Download className="w-4 h-4 text-red-500" />
              Descargar PNG
            </button>
            <button
              onClick={() => exportMockup('jpg')}
              className="flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-red-950 hover:bg-red-950/10 text-zinc-100 py-3 text-xs tracking-widest uppercase font-semibold transition cursor-pointer"
            >
              <Download className="w-4 h-4 text-red-500" />
              Descargar JPG
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Tattoo Library and Custom SVG upload (3 cols) */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-none h-[520px] flex flex-col">
            <div className="border-b border-zinc-800 pb-2 mb-4">
              <h3 className="text-sm font-bold tracking-widest uppercase text-zinc-100">
                3. Catálogo de Tatuajes
              </h3>
            </div>

            {/* Style Selector Tabs (Horizontal scrolling on overflow) */}
            <div className="flex gap-1.5 pb-3 overflow-x-auto scrollbar-thin border-b border-zinc-800/50 mb-3 shrink-0">
              {['Blackwork', 'Fineline', 'Anime', 'Horror', 'Dark Art', 'Traditional', 'Geometric', 'Lettering', 'Ornamental'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[10px] shrink-0 uppercase tracking-wider px-2.5 py-1 transition cursor-pointer ${
                    activeCategory === cat 
                      ? 'bg-red-950/30 text-red-500 border border-red-900/60 font-semibold' 
                      : 'text-zinc-500 hover:text-zinc-300 bg-zinc-950 border border-transparent'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Dynamic Tattoo Designs List Grid */}
            <div className="flex-1 overflow-y-auto pr-1 space-y-2.5 scrollbar-thin">
              {TATTOO_DESIGNS.filter(t => t.category === activeCategory).map(tattoo => (
                <button
                  key={tattoo.id}
                  onClick={() => addTattooToCanvas(tattoo)}
                  className="w-full flex items-center gap-3 bg-zinc-950 hover:bg-zinc-900/80 border border-zinc-850 p-2.5 text-left group transition focus:outline-none focus:border-red-900"
                >
                  <div className="w-12 h-16 shrink-0 bg-zinc-900/50 border border-zinc-850 group-hover:border-red-900/50 transition flex items-center justify-center p-1">
                    <svg viewBox={tattoo.viewBox || "0 0 100 100"} className="w-full h-full text-zinc-300 group-hover:text-red-500 transition-colors">
                      <path d={tattoo.svgPath} fill="currentColor" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-semibold tracking-wide text-zinc-200 group-hover:text-red-500 transition-colors truncate">
                      {tattoo.name}
                    </h4>
                    <p className="text-[10px] text-zinc-500 mt-1 line-clamp-2">
                      {tattoo.description}
                    </p>
                  </div>
                </button>
              ))}
              
              {TATTOO_DESIGNS.filter(t => t.category === activeCategory).length === 0 && (
                <p className="text-center text-xs text-zinc-600 mt-12 uppercase tracking-widest">
                  Próximamente más diseños
                </p>
              )}
            </div>

            {/* Custom SVG Sketch Uploader bottom anchor */}
            <div className="mt-4 pt-3 border-t border-zinc-800 shrink-0">
              <label className="flex items-center justify-center gap-2 bg-zinc-950 hover:bg-zinc-900 border border-zinc-850 py-3 text-[11px] uppercase tracking-wider font-semibold text-zinc-300 cursor-pointer transition">
                <Upload className="w-4.5 h-4.5 text-red-500" />
                Subir tu Propio Boceto
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleTattooUpload} 
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Share Modal Backdrop popup */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-zinc-900 border border-zinc-800 p-6 max-w-lg w-full rounded-none relative">
            <button 
              onClick={() => setShowShareModal(false)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-100 text-xl"
            >
              &times;
            </button>
            <div className="flex items-center gap-2 mb-4 text-red-500">
              <Sparkles className="w-5 h-5 animate-pulse" />
              <h3 className="text-sm font-bold tracking-widest uppercase text-zinc-100">
                PROYECTO COMPARTIBLE
              </h3>
            </div>
            <p className="text-xs text-zinc-400 mb-4 leading-relaxed font-sans">
              Hemos codificado la posición, tamaño, rotación, opacidad y filtros de tus tatuajes sobre el lienzo corporal actual. Copia este enlace único para enviarlo a tu artista o continuar diseñando más tarde.
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                value={shareUrl}
                readOnly
                className="flex-1 bg-zinc-950 border border-zinc-850 p-2.5 text-xs text-zinc-300 select-all font-mono focus:outline-none"
              />
              <button
                onClick={copyShareLink}
                className="bg-red-600 hover:bg-red-700 text-zinc-100 px-4 text-xs font-bold uppercase tracking-wider transition"
              >
                Copiar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
