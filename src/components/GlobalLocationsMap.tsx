'use client';

import React, { useEffect, useState, useMemo } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// World GeoJSON URL
const GEO_JSON_URL = "https://raw.githubusercontent.com/datasets/geo-boundaries-world-110m/master/countries.geojson";

const LOCATIONS = [
    { name: 'New Mumbai', position: [19.033, 73.0297] as [number, number] },
    { name: 'Karnataka', position: [15.3173, 75.7139] as [number, number] },
    { name: 'Tamil Nadu', position: [11.1271, 78.6569] as [number, number] },
];

/**
 * Pure Map UI - This will only run on the client
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MapInternal = ({ geoData, L }: { geoData: any; L: any }) => {
    const {
        MapContainer,
        TileLayer,
        GeoJSON,
        Marker,
        Tooltip,
        useMap,
        useMapEvents
        // eslint-disable-next-line @typescript-eslint/no-require-imports
    } = require('react-leaflet');

    const MapLogic = () => {
        const map = useMap();
        const [ready, setReady] = useState(false);
        const [zoom, setZoom] = useState(map.getZoom());

        useEffect(() => {
            if (map) {
                // Safe-mounting sequence
                const timer = setTimeout(() => {
                    if (!map.getPane('labelsPane')) {
                        const pane = map.createPane('labelsPane');
                        pane.style.zIndex = '600';
                        pane.style.pointerEvents = 'none';
                    }
                    setReady(true);
                }, 150);
                return () => clearTimeout(timer);
            }
        }, [map]);

        useMapEvents({
            zoomend: () => setZoom(map.getZoom()),
        });

        const customIcon = useMemo(() => L.divIcon({
            className: 'custom-map-marker',
            html: `<div style="width: 10px; height: 10px; background: #3B5BDB; border: 2px solid white; border-radius: 50%; box-shadow: 0 0 8px rgba(59, 91, 219, 0.4);"></div>`,
            iconSize: [10, 10],
            iconAnchor: [5, 5]
        }), [L]);

        if (!ready) return null;

        /**
         * Logic: 
         * Initial view (Zoom 4 or 5) -> Hide background labels.
         * Zoom In (> 5) -> Show city labels.
         * Zoom Out (< 4) -> Show country names.
         */
        const labelOpacity = (zoom > 5 || zoom < 4) ? 0.9 : 0;

        return (
            <>
                {/* Land Shapes - Lavender Tint #edeff8 */}
                <GeoJSON
                    data={geoData}
                    style={{
                        fillColor: '#edeff8',
                        weight: 0.6,
                        opacity: 1,
                        color: '#ffffff',
                        fillOpacity: 1
                    }}
                />

                {/* Dynamic Detail Layer - Controlled by Zoom opacity */}
                <div style={{ transition: 'opacity 0.4s ease-in-out' }}>
                    <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png"
                        opacity={labelOpacity}
                        pane="labelsPane"
                    />
                </div>

                {/* Targeted Logistics Hubs - Always visible */}
                {LOCATIONS.map((loc) => (
                    <Marker
                        key={loc.name}
                        position={loc.position}
                        icon={customIcon}
                        eventHandlers={{
                            click: () => map.flyTo(loc.position, 7, { duration: 1.5 }),
                        }}
                    >
                        <Tooltip
                            permanent
                            direction="top"
                            offset={[0, -10]}
                            className="custom-tooltip"
                        >
                            <span className="font-poppins font-bold text-[13px] text-[#111111]">{loc.name}</span>
                        </Tooltip>
                    </Marker>
                ))}

                {/* Zoom Controls Styled to match SS */}
                <div className="absolute top-4 left-4 flex flex-col gap-0 z-[1000] pointer-events-auto">
                    <button
                        className="w-8 h-8 bg-white border border-gray-200 rounded-t-lg flex items-center justify-center text-blue-600 font-bold hover:bg-gray-50 active:bg-gray-100 shadow-sm"
                        onClick={() => map.zoomIn()}
                        title="Zoom In"
                    > + </button>
                    <button
                        className="w-8 h-8 bg-white border border-gray-200 border-t-0 rounded-b-lg flex items-center justify-center text-blue-600 font-bold hover:bg-gray-50 active:bg-gray-100 shadow-sm"
                        onClick={() => map.zoomOut()}
                        title="Zoom Out"
                    > − </button>
                </div>
            </>
        );
    };

    return (
        <div className="w-full relative overflow-hidden bg-white border border-gray-100 rounded-[20px] z-10 h-[400px] md:h-[585.62px]" style={{ maxWidth: '1232px' }}>
            <MapContainer
                center={typeof window !== 'undefined' && window.innerWidth < 768 ? [22, 78] : [20, 78]}
                zoom={typeof window !== 'undefined' && window.innerWidth < 768 ? 3.2 : 3.9}
                maxZoom={10}
                minZoom={2.5}
                style={{ width: '100%', height: '100%', background: '#ffffff' }}
                zoomControl={false}
                scrollWheelZoom={false}
                dragging={true}
                doubleClickZoom={true}
                touchZoom={true}
                tap={true}
                attributionControl={false}
            >
                <MapLogic />
            </MapContainer>
        </div>
    );
};

export default function GlobalLocationsMap() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [geoData, setGeoData] = useState<any>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [L, setL] = useState<any>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        import('leaflet').then((mod) => setL(mod.default));

        fetch(GEO_JSON_URL)
            .then(res => res.json())
            .then(data => setGeoData(data))
            .catch(err => console.error("Map Data Error:", err));
    }, []);

    if (!mounted || !geoData || !L) {
        return (
            <div className="w-full h-[369px] bg-white flex items-center justify-center text-gray-400">
                Syncing Logistics Network...
            </div>
        );
    }

    return (
        <section className="pt-20 pb-12 md:pb-16 relative z-0">
            <div className="max-w-[1440px] mx-auto px-6 flex flex-col items-center">
                <h2 className="text-center text-[#000000] font-semibold mb-3 text-[28px] md:text-[34px] leading-[34px] md:leading-[40px] tracking-tight max-w-[320px] md:max-w-none">
                    Ship from 60+ global locations
                </h2>
                <p className="text-center text-[#9B9B9B] font-medium max-w-[738px] mb-8 text-[16px] md:text-[18px] leading-[24px] md:leading-[27px]">
                    We use our network of fulfillment centers to help you strategically
                    split and manage your inventory to reduce shipping costs and transit
                    times.
                </p>

                <MapInternal geoData={geoData} L={L} />
            </div>

            <style jsx global>{`
        /* Avoid overlapping Global Navbar at z-100 */
        .leaflet-container {
          z-index: 1 !important;
          cursor: grab;
        }
        .leaflet-container:active {
          cursor: grabbing;
        }
        .custom-tooltip {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          padding: 0 !important;
        }
        .custom-tooltip::before {
          display: none !important;
        }
        /* SS Styled Markers with pulse */
        .custom-map-marker div {
          animation: marker-pulse 3s infinite ease-in-out;
        }
        @keyframes marker-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.15); opacity: 0.8; }
        }
      `}</style>
        </section>
    );
}
