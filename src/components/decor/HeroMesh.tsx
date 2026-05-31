// Generated mesh + circuit decorations for the hero section.
// Static SVG (no runtime randomness) so it renders identically on SSR + client.

const NODES: Array<[number, number]> = [
  [40, 60], [120, 30], [200, 80], [280, 40], [360, 110], [440, 70],
  [80, 140], [180, 180], [260, 150], [340, 200], [420, 170],
  [60, 240], [160, 280], [240, 250], [320, 300], [400, 270], [470, 320],
  [100, 350], [200, 380], [300, 360], [380, 410], [460, 390],
  [50, 430], [140, 460], [230, 440], [310, 480], [390, 460], [450, 470],
  [180, 50], [380, 350],
];

// Connect each node to its 2 nearest neighbors (precomputed indices)
const EDGES: Array<[number, number]> = [
  [0,1],[0,6],[1,2],[1,28],[2,3],[2,7],[3,4],[3,5],[4,5],[4,10],
  [5,10],[6,7],[6,11],[7,8],[8,9],[9,10],[10,16],[11,12],[12,13],
  [13,14],[14,15],[15,16],[16,21],[17,18],[18,19],[19,20],[20,21],
  [22,23],[23,24],[24,25],[25,26],[26,27],[12,17],[13,18],[19,25],
  [22,17],[8,29],[15,29],[20,29],[1,28],[28,7],
];

export function HeroMesh() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 500 500"
      width="500"
      height="500"
      className="absolute top-0 right-0 pointer-events-none"
      style={{
        zIndex: 0,
        animation: "meshRotate 60s linear infinite",
        transformOrigin: "center",
        willChange: "transform",
      }}
    >
      <g stroke="rgba(240,180,41,0.08)" strokeWidth="0.5" fill="none">
        {EDGES.map(([a, b], i) => (
          <line
            key={i}
            x1={NODES[a][0]}
            y1={NODES[a][1]}
            x2={NODES[b][0]}
            y2={NODES[b][1]}
          />
        ))}
      </g>
      <g fill="rgba(240,180,41,0.08)">
        {NODES.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3" />
        ))}
      </g>
    </svg>
  );
}

export function HeroCircuit() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 300 200"
      width="300"
      height="200"
      className="absolute bottom-0 left-0 pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <g stroke="rgba(56,189,248,0.06)" strokeWidth="1" fill="none">
        <path d="M0,180 L60,180 L60,140 L120,140 L120,100 L200,100" />
        <path d="M0,150 L40,150 L40,80 L100,80 L100,40 L180,40 L180,20" />
        <path d="M0,110 L30,110 L30,60 L80,60" />
        <path d="M140,200 L140,160 L220,160 L220,120 L280,120 L280,90" />
        <path d="M20,200 L20,170" />
      </g>
      <g fill="rgba(56,189,248,0.12)">
        <circle cx="60" cy="180" r="2" />
        <circle cx="120" cy="140" r="2" />
        <circle cx="200" cy="100" r="2" />
        <circle cx="100" cy="80" r="2" />
        <circle cx="180" cy="40" r="2" />
        <circle cx="220" cy="160" r="2" />
        <circle cx="280" cy="120" r="2" />
      </g>
    </svg>
  );
}
