// import React, { useEffect, useMemo, useRef } from "react";
// import ForceGraph2D from "react-force-graph-2d";

// const users = Array.from({ length: 50 }, (_, i) => ({
//   _id: `${i + 1}`,
//   userName: `User ${i + 1}`,
//   email: `user${i + 1}@gmail.com`,
// }));

// export default function UserGraph() {
//   const fgRef = useRef();

//   const graphData = useMemo(() => {
//     const nodes = users.map((user) => ({
//       id: user._id,
//       name: user.userName,
//       x: Math.random() * 4000 - 2000,
//       y: Math.random() * 4000 - 2000,
//     }));

//     const links = [];

//     // Random connections
//     for (let i = 0; i < 180; i++) {
//       const a = users[Math.floor(Math.random() * users.length)];
//       const b = users[Math.floor(Math.random() * users.length)];

//       if (a._id !== b._id) {
//         links.push({
//           source: a._id,
//           target: b._id,
//         });
//       }
//     }

//     return { nodes, links };
//   }, []);

//   useEffect(() => {
//     if (!fgRef.current) return;

//     fgRef.current.d3Force("charge").strength(-900);

//     fgRef.current.d3Force("link").distance(180);

//     fgRef.current.d3Force("center", null);

//     setTimeout(() => {
//       fgRef.current.zoomToFit(1200, 80);
//     }, 1000);
//   }, []);

// return (
//   <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black">
//     {/* Glow Background */}
//     <div className="absolute -left-44 -top-44 h-96 w-96 rounded-full bg-cyan-500/20 blur-[170px]" />
//     <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[180px]" />

//     {/* Title */}
//     <div className="absolute left-8 top-8 z-10">
//       <h1 className="text-4xl font-bold text-white">
//         Users Network
//       </h1>

//       <p className="mt-2 text-slate-400">
//         Live Connected Users Graph
//       </p>
//     </div>

// <ForceGraph2D
//   ref={fgRef}
//   graphData={graphData}
//   width={window.innerWidth}
//   height={window.innerHeight}
//   backgroundColor="rgba(0,0,0,0)"
//   cooldownTicks={0}
//   warmupTicks={300}
//   d3AlphaDecay={0.01}
//   d3VelocityDecay={0.08}
//   enableNodeDrag={true}
//   enableZoomInteraction={true}
//   enablePanInteraction={true}
//   nodeRelSize={8}
//   nodeLabel="name"
//   linkColor={() => "rgba(0,255,255,.18)"}
//   linkWidth={1}
//   linkDirectionalParticles={3}
//   linkDirectionalParticleWidth={2}
//   linkDirectionalParticleSpeed={0.0035}
//   nodeCanvasObject={(node, ctx) => {
//     const radius = 8;

//     // Outer Glow
//     ctx.shadowBlur = 30;
//     ctx.shadowColor = "#00E5FF";

//     ctx.beginPath();
//     ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
//     ctx.fillStyle = "#00E5FF";
//     ctx.fill();

//     // Inner Circle
//     ctx.shadowBlur = 0;

//     ctx.beginPath();
//     ctx.arc(node.x, node.y, radius - 3, 0, Math.PI * 2);
//     ctx.fillStyle = "#ffffff";
//     ctx.fill();

//     // Username
//     ctx.font = "12px sans-serif";
//     ctx.fillStyle = "#ffffff";
//     ctx.fillText(node.name, node.x + 14, node.y + 4);
//   }}
// />
//   </div>
// );
// }
// -----

// import React, { useMemo, useRef, useEffect } from "react";
// import ForceGraph3D from "react-force-graph-3d";
// import * as THREE from "three";

// const users = Array.from({ length: 50 }, (_, i) => ({
//   _id: `${i + 1}`,
//   userName: `User ${i + 1}`,
//   email: `user${i + 1}@gmail.com`,
// }));

// export default function UserGraph() {
//   const fgRef = useRef();

//   const graphData = useMemo(() => {
//     const radius = 350;

//     const nodes = users.map((user, i) => {
//       const angle = (i / users.length) * Math.PI * 2;

//       return {
//         id: user._id,
//         name: user.userName,

//         x: Math.cos(angle) * radius,
//         y: Math.sin(angle) * radius,
//         z: (Math.random() - 0.5) * 60, // thoda 3D depth
//       };
//     });

//     const links = [];

//     nodes.forEach((node, i) => {
//       // Next node
//       links.push({
//         source: node.id,
//         target: nodes[(i + 1) % nodes.length].id,
//       });

//       // Skip connection
//       links.push({
//         source: node.id,
//         target: nodes[(i + 3) % nodes.length].id,
//       });

//       // Random connection
//       links.push({
//         source: node.id,
//         target: nodes[Math.floor(Math.random() * nodes.length)].id,
//       });
//     });

//     return {
//       nodes,
//       links,
//     };
//   }, []);

//   useEffect(() => {
//     if (!fgRef.current) return;

//     fgRef.current.d3Force("charge").strength(-350);
//     fgRef.current.d3Force("link").distance(110);

//     fgRef.current.cameraPosition(
//       { x: 0, y: 0, z: 900 },
//       { x: 0, y: 0, z: 0 },
//       2500,
//     );

//     const controls = fgRef.current.controls();
//     controls.enableDamping = true;
//     controls.dampingFactor = 0.08;
//     controls.autoRotate = true;
//     controls.autoRotateSpeed = 0.4;
//   }, []);

//   return (
//     <div
//       style={{
//         width: "100vw",
//         height: "100vh",
//         background:
//           "radial-gradient(circle at top, #07111d 0%, #030712 45%, #000000 100%)",
//         overflow: "hidden",
//       }}
//     >
//       <ForceGraph3D
//         ref={fgRef}
//         graphData={graphData}
//         width={window.innerWidth}
//         height={window.innerHeight}
//         backgroundColor="rgba(0,0,0,0)"
//         showNavInfo={false}
//         onNodeDragEnd={(node) => {
//           node.fx = node.x;
//           node.fy = node.y;
//           node.fz = node.z;
//         }}
//         nodeLabel="name"
//         enableNodeDrag={true}
//         enableNavigationControls={true}
//         controlType="orbit"
//         linkWidth={1}
//         linkOpacity={0.35}
//         linkColor={() => "#00E5FF"}
//         linkDirectionalParticles={3}
//         linkDirectionalParticleWidth={2}
//         linkDirectionalParticleColor={() => "#00E5FF"}
//         linkDirectionalParticleSpeed={() => 0.0035}
//         nodeThreeObject={(node) => {
//           const group = new THREE.Group();

//           // Main Sphere
//           const sphere = new THREE.Mesh(
//             new THREE.SphereGeometry(8, 32, 32),
//             new THREE.MeshStandardMaterial({
//               color: "#00E5FF",
//               emissive: "#00E5FF",
//               emissiveIntensity: 2,
//               roughness: 0.2,
//               metalness: 0.1,
//             }),
//           );

//           // Glow Sphere
//           const glow = new THREE.Mesh(
//             new THREE.SphereGeometry(13, 32, 32),
//             new THREE.MeshBasicMaterial({
//               color: "#00E5FF",
//               transparent: true,
//               opacity: 0.18,
//             }),
//           );

//           group.add(glow);
//           group.add(sphere);

//           // Username Sprite
//           const canvas = document.createElement("canvas");
//           canvas.width = 256;
//           canvas.height = 64;

//           const ctx = canvas.getContext("2d");
//           ctx.font = "24px Arial";
//           ctx.fillStyle = "white";
//           ctx.fillText(node.name, 10, 40);

//           const texture = new THREE.CanvasTexture(canvas);

//           const sprite = new THREE.Sprite(
//             new THREE.SpriteMaterial({
//               map: texture,
//               transparent: true,
//             }),
//           );

//           sprite.position.set(0, 18, 0);
//           sprite.scale.set(55, 14, 1);

//           group.add(sprite);

//           return group;
//         }}
//       />
//     </div>
//   );
// }


// ---

// import React, { useMemo, useRef, useEffect } from "react";
// import ForceGraph3D from "react-force-graph-3d";
// import * as THREE from "three";

// const users = Array.from({ length: 80 }, (_, i) => ({
//   _id: `${i + 1}`,
//   userName: `User ${i + 1}`,
//   email: `user${i + 1}@gmail.com`,
// }));

// const colors = ["#00E5FF", "#00FFA3", "#8B5CF6", "#FF4D94", "#FFC857"];

// export default function UserGraph() {
//   const fgRef = useRef();
//   const graphData = useMemo(() => {
//     const radius = 1800;

//     const nodes = users.map((user, i) => {
//       // random 3D galaxy distribution

//       const r = radius * (0.45 + Math.random() * 0.55);

//       const theta = Math.random() * Math.PI * 2;

//       const phi = Math.acos(Math.random() * 2 - 1);

//       return {
//         id: user._id,

//         name: user.userName,

//         email: user.email,

//         color: colors[Math.floor(Math.random() * colors.length)],

//         // 3D position

//         x: r * Math.sin(phi) * Math.cos(theta),

//         y: r * Math.sin(phi) * Math.sin(theta),

//         z: r * Math.cos(phi),

//         // custom animation value

//         size: 5 + Math.random() * 8,

//         phase: Math.random() * Math.PI * 2,
//       };
//     });

//     const links = [];

//     nodes.forEach((node, i) => {
//       // nearby chain connection

//       links.push({
//         source: node.id,

//         target: nodes[(i + 1) % nodes.length].id,
//       });

//       // long distance connection

//       links.push({
//         source: node.id,

//         target: nodes[(i + 7) % nodes.length].id,
//       });

//       // random neural connection

//       if (Math.random() > 0.35) {
//         let randomNode = nodes[Math.floor(Math.random() * nodes.length)];

//         if (randomNode.id !== node.id) {
//           links.push({
//             source: node.id,

//             target: randomNode.id,
//           });
//         }
//       }
//     });

//     return {
//       nodes,

//       links,
//     };
//   }, []);

//   useEffect(() => {
//     if (!fgRef.current) return;

//     const fg = fgRef.current;

//     // Force settings
//     fg.d3Force("charge").strength(-250);

//     fg.d3Force("link").distance(140);

//     // Camera setup
//     fg.cameraPosition(
//       {
//         x: 0,
//         y: 0,
//         z: 1000,
//       },
//       {
//         x: 0,
//         y: 0,
//         z: 0,
//       },
//       2500,
//     );

//     // Orbit Controls
//     const controls = fg.controls();

//     controls.enableDamping = true;

//     controls.dampingFactor = 0.08;

//     controls.autoRotate = true;

//     controls.autoRotateSpeed = 0.25;

//     // Scene
//     const scene = fg.scene();

//     // 🌫 Space Fog
//     scene.fog = new THREE.FogExp2("#020617", 0.0008);

//     // ⭐ Star Background
//     const starGeometry = new THREE.BufferGeometry();

//     const starCount = 8000;

//     const positions = [];

//     for (let i = 0; i < starCount; i++) {
//       positions.push(
//         (Math.random() - 0.5) * 5000,
//         (Math.random() - 0.5) * 5000,
//         (Math.random() - 0.5) * 5000,
//       );
//     }

//     starGeometry.setAttribute(
//       "position",

//       new THREE.Float32BufferAttribute(positions, 3),
//     );

//     // const starMaterial = new THREE.PointsMaterial({
//     //   color: "#ffffff",

//     //   size: 2,

//     //   transparent: true,

//     //   opacity: 0.9,

//     //   sizeAttenuation: true,
//     // });

//     const starMaterial = new THREE.PointsMaterial({
//       color: "#ffffff",

//       size: 2.8,

//       transparent: true,

//       opacity: 1,

//       sizeAttenuation: true,

//       blending: THREE.AdditiveBlending,

//       depthWrite: false,
//     });

//     const stars = new THREE.Points(
//       starGeometry,

//       starMaterial,
//     );

//     scene.add(stars);

//     // ✨ Star movement animation
//     let frameId;

//     const animateStars = () => {
//       stars.rotation.y += 0.00025;

//       stars.rotation.x += 0.00008;

//       // little twinkle effect
//       starMaterial.opacity = 0.75 + Math.sin(Date.now() * 0.004) * 0.25;
//       frameId = requestAnimationFrame(animateStars);
//     };

//     animateStars();

//     // Cleanup
//     return () => {
//       cancelAnimationFrame(frameId);

//       scene.remove(stars);

//       starGeometry.dispose();

//       starMaterial.dispose();
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         width: "100vw",
//         height: "100vh",
//         background: "#000000",
//         overflow: "hidden",
//       }}
//     >
//       <ForceGraph3D
//         ref={fgRef}
//         onNodeDragEnd={(node) => {
//           node.fx = node.x;
//           node.fy = node.y;
//           node.fz = node.z;
//         }}
//         graphData={graphData}
//         backgroundColor="rgba(0,0,0,0)"
//         showNavInfo={false}
//         nodeLabel={(node) => `

// <div style="
// padding:8px 14px;
// background:#050505dd;
// border:1px solid ${node.color};
// border-radius:10px;
// color:white;
// font-size:14px;
// ">

// ${node.name}

// <br/>

// <span style="
// color:${node.color};
// font-size:12px;
// ">

// ${node.email || ""}

// </span>

// </div>

// `}
//         enableNodeDrag={true}
//         controlType="orbit"
//         onNodeClick={(node) => {
//           const distance = 200;

//           const ratio = 1 + distance / Math.hypot(node.x, node.y, node.z);

//           fgRef.current.cameraPosition(
//             {
//               x: node.x * ratio,

//               y: node.y * ratio,

//               z: node.z * ratio,
//             },

//             node,

//             1500,
//           );
//         }}
//         linkWidth={(link) => {
//           return 1.5;
//         }}
//         linkOpacity={0.5}
//         linkColor={(link) => {
//           return "#00E5FF";
//         }}
//         // linkDirectionalParticles={4}
//         // linkDirectionalParticleWidth={2}
//         // linkDirectionalParticleSpeed={() => 0.004}
//         // linkDirectionalParticleColor={() => "#ffffff"}
//         nodeThreeObject={(node) => {
//           const group = new THREE.Group();

//           // glow

//           const glow = new THREE.Mesh(
//             new THREE.SphereGeometry(16, 32, 32),

//             new THREE.MeshBasicMaterial({
//               color: node.color,

//               transparent: true,

//               opacity: 0.15,
//             }),
//           );

//           group.add(glow);

//           // main node

//           const sphere = new THREE.Mesh(
//             new THREE.SphereGeometry(8, 32, 32),

//             new THREE.MeshStandardMaterial({
//               color: node.color,

//               emissive: node.color,

//               emissiveIntensity: 3,

//               metalness: 0.4,

//               roughness: 0.15,
//             }),
//           );

//           group.add(sphere);

//           // ring

//           const ring = new THREE.Mesh(
//             new THREE.TorusGeometry(13, 0.5, 16, 60),

//             new THREE.MeshBasicMaterial({
//               color: node.color,
//             }),
//           );

//           ring.rotation.x = Math.PI / 2;

//           group.add(ring);

//           // label

//           const canvas = document.createElement("canvas");

//           canvas.width = 300;

//           canvas.height = 70;

//           const ctx = canvas.getContext("2d");

//           ctx.font = "bold 26px Arial";

//           ctx.fillStyle = "white";

//           ctx.fillText(node.name, 10, 40);

//           const texture = new THREE.CanvasTexture(canvas);

//           const sprite = new THREE.Sprite(
//             new THREE.SpriteMaterial({
//               map: texture,

//               transparent: true,
//             }),
//           );

//           sprite.position.y = 25;

//           sprite.scale.set(60, 14, 1);

//           group.add(sprite);

//           return group;
//         }}
//       />
//     </div>
//   );
// }