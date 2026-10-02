import React, { useMemo, useRef, useEffect } from "react";
import ForceGraph3D from "react-force-graph-3d";
import * as THREE from "three";
import { TextureLoader } from "three";

const users = Array.from({ length: 500 }, (_, i) => ({
  _id: `${i + 1}`,
  userName: `User ${i + 1}`,
  email: `user${i + 1}@gmail.com`,
}));

const colors = ["#00E5FF", "#00FFA3", "#8B5CF6", "#FF4D94", "#FFC857"];

export default function UserGraph() {
  const fgRef = useRef();

  const graphData = useMemo(() => {
    const radius = 900;

    const nodes = users.map((user, i) => {
      const r = radius * (0.2 + Math.random() * 0.8);

      const theta = Math.random() * Math.PI * 2;

      const phi = Math.acos(Math.random() * 2 - 1);

      return {
        id: user._id,

        name: user.userName,

        email: user.email,

        color: colors[Math.floor(Math.random() * colors.length)],

        x: r * Math.sin(phi) * Math.cos(theta),

        y: r * Math.sin(phi) * Math.sin(theta),

        z: r * Math.cos(phi),
      };
    });

    const links = [];

    nodes.forEach((node, i) => {
      links.push({
        source: node.id,

        target: nodes[(i + 1) % nodes.length].id,
      });

      if (Math.random() > 0.4) {
        links.push({
          source: node.id,

          target: nodes[Math.floor(Math.random() * nodes.length)].id,
        });
      }
    });

    return {
      nodes,
      links,
    };
  }, []);

  useEffect(() => {
    if (!fgRef.current) return;

    const fg = fgRef.current;

    fg.d3Force("charge").strength(-180);

    fg.d3Force("link").distance(120);

    fg.cameraPosition(
      {
        x: 0,
        y: 0,
        z: 1400,
      },
      {
        x: 0,
        y: 0,
        z: 0,
      },
      2000,
    );

    const controls = fg.controls();

    controls.enableDamping = true;

    controls.dampingFactor = 0.08;

    controls.autoRotate = true;

    controls.autoRotateSpeed = 0.15;

    const scene = fg.scene();

    scene.fog = new THREE.FogExp2("#020617", 0.00035);

    const starGeometry = new THREE.BufferGeometry();

    const starCount = 25000;

    const positions = [];

    for (let i = 0; i < starCount; i++) {
      const radius = 1500 + Math.random() * 3500;

      const theta = Math.random() * Math.PI * 2;

      const phi = Math.acos(Math.random() * 2 - 1);

      positions.push(
        radius * Math.sin(phi) * Math.cos(theta),

        radius * Math.sin(phi) * Math.sin(theta),

        radius * Math.cos(phi),
      );
    }

    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3),
    );

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,

      size: 3,

      transparent: true,

      opacity: 1,

      sizeAttenuation: true,

      blending: THREE.AdditiveBlending,

      depthWrite: false,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);

    scene.add(stars);

    let animation;

    const animate = () => {
      stars.rotation.y += 0.00015;

      stars.rotation.x += 0.00005;

      animation = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animation);

      scene.remove(stars);

      starGeometry.dispose();

      starMaterial.dispose();
    };
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#000",
        overflow: "hidden",
      }}
    >
      <ForceGraph3D
        ref={fgRef}
        graphData={graphData}
        backgroundColor="rgba(0,0,0,0)"
        showNavInfo={false}
        controlType="orbit"
        enableNodeDrag={true}
        onNodeDragEnd={(node) => {
          node.fx = node.x;
          node.fy = node.y;
          node.fz = node.z;
        }}
        nodeLabel={(node) => `

<div style="
padding:10px 14px;
background:#020617ee;
border:1px solid ${node.color};
border-radius:12px;
color:white;
font-size:14px;
box-shadow:0 0 20px ${node.color};
">

<b>${node.name}</b>

<br/>

<span style="
color:${node.color};
font-size:12px;
">

${node.email}

</span>


</div>

`}
        onNodeClick={(node) => {
          const distance = 250;

          const ratio = 1 + distance / Math.hypot(node.x, node.y, node.z);

          fgRef.current.cameraPosition(
            {
              x: node.x * ratio,

              y: node.y * ratio,

              z: node.z * ratio,
            },

            node,

            1500,
          );
        }}
        linkWidth={() => 1.8}
        linkOpacity={0.35}
        linkColor={() => "#00E5FF"}
        linkDirectionalParticles={3}
        linkDirectionalParticleWidth={2}
        linkDirectionalParticleSpeed={0.006}
        linkDirectionalParticleColor={() => "#ffffff"}
        nodeThreeObject={(node) => {
          const group = new THREE.Group();

          // outer glow
          const glow = new THREE.Mesh(
            new THREE.SphereGeometry(20, 32, 32),

            new THREE.MeshBasicMaterial({
              color: node.color,

              transparent: true,

              opacity: 0.12,
            }),
          );

          group.add(glow);

          // main planet

          const sphere = new THREE.Mesh(
            new THREE.SphereGeometry(8, 32, 32),

            new THREE.MeshStandardMaterial({
              color: node.color,

              emissive: node.color,

              emissiveIntensity: 4,

              metalness: 0.5,

              roughness: 0.2,
            }),
          );

          group.add(sphere);

          // orbit ring

          const ring = new THREE.Mesh(
            new THREE.TorusGeometry(15, 0.6, 16, 80),

            new THREE.MeshBasicMaterial({
              color: node.color,

              transparent: true,

              opacity: 0.9,
            }),
          );

          ring.rotation.x = Math.PI / 2;

          group.add(ring);

          return group;
        }}
      />
    </div>
  );
}
